const form = document.getElementById("chatForm");
const messageInput = document.getElementById("message");
const chatMessages = document.getElementById("chatMessages");

// Change the URL to match your server's WebSocket endpoint
const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", (event) => {
  console.log("WebSocket connection opened:", event);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = "";
  });
});

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  displayMessage(data.message);
});

function sendMessage(message) {
  const groupId = "your_group_id"; // Replace with your group ID
  const sessionId = generateSessionId(); // Implement your session ID generation logic
  const data = {
    groupId,
    sessionId,
    content: message,
  };
  socket.send(JSON.stringify(data));
}

function displayMessage(message) {
  const li = document.createElement("li");
  li.textContent = message.content;
  chatMessages.appendChild(li);
}

function generateSessionId() {
  // Implement your session ID generation logic
  return Math.random().toString(36).substring(7);
}
