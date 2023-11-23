const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const activeSessions = {};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    handleMessage(ws, message);
  });

  ws.on('close', () => {
    handleDisconnect(ws);
  });
});

function handleMessage(ws, message) {
  try {
    const data = JSON.parse(message);
    const { sessionId, groupId, content } = data;

    if (!activeSessions[groupId]) {
      activeSessions[groupId] = { startTime: Date.now(), messages: [] };
    }

    if (!activeSessions[groupId].users) {
      activeSessions[groupId].users = {};
    }

    activeSessions[groupId].users[sessionId] = { lastActivity: Date.now() };

    if (content && typeof content === 'string' && !/\d/.test(content)) {
      activeSessions[groupId].messages.push({ sessionId, content, timestamp: Date.now() });

      // Broadcast the message to all participants
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ groupId, message: { sessionId, content } }));
        }
      });
    }
  } catch (error) {
    console.error('Error handling message:', error);
  }
}

function handleDisconnect(ws) {
  // Find the group to which the user belongs
  let groupId;
  for (const id in activeSessions) {
    if (activeSessions[id].users && activeSessions[id].users[ws._socket.remoteAddress]) {
      groupId = id;
      break;
    }
  }

  if (groupId) {
    delete activeSessions[groupId].users[ws._socket.remoteAddress];

    // Check if there are no active users in the group
    if (Object.keys(activeSessions[groupId].users).length === 0) {
      const endTime = Date.now();
      const chatInfo = {
        startTime: activeSessions[groupId].startTime,
        endTime,
        messages: activeSessions[groupId].messages,
      };

      // Save chat info to the file system
      saveChatInfo(groupId, chatInfo);

      // Remove the group from active sessions
      delete activeSessions[groupId];
    }
  }
}

function saveChatInfo(groupId, chatInfo) {
  const filename = `chat_${groupId}_${Date.now()}.json`;
  fs.writeFileSync(filename, JSON.stringify(chatInfo, null, 2));
  console.log(`Chat info saved to ${filename}`);
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
