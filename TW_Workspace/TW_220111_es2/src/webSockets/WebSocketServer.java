package webSockets;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

@ServerEndpoint("/websocket")
public class WebSocketServer {

    private static final CopyOnWriteArrayList<Session> connectedSessions = new CopyOnWriteArrayList<>();

    @OnOpen
    public void onOpen(Session session) {
        connectedSessions.add(session);
        broadcast("Nuovo utente connesso! Utenti online: " + connectedSessions.size());
    }

    @OnMessage
    public void onMessage(String message, Session session) {
        broadcast(session.getId() + ": " + message);
    }

    @OnClose
    public void onClose(Session session) {
        connectedSessions.remove(session);
        broadcast("Un utente si è disconnesso. Utenti online: " + connectedSessions.size());
    }

    @OnError
    public void onError(Throwable error, Session session) {
        System.err.println("Errore durante la gestione della connessione: " + error.getMessage());
        try {
            session.close();
        } catch (IOException e) {
            System.err.println("Errore durante la chiusura della sessione: " + e.getMessage());
        }
    }

    private static void broadcast(String message) {
        for (Session session : connectedSessions) {
            try {
                session.getBasicRemote().sendText(message);
            } catch (IOException e) {
                System.err.println("Errore nell'invio del messaggio: " + e.getMessage());
            }
        }
    }
}
