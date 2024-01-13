package webSockets;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Questa classe rappresenta il server WebSocket che gestisce le connessioni
 * degli utenti.
 */
@ServerEndpoint("/websocket")
public class WebSocketServer {

    // Lista di sessioni condivisa tra tutte le connessioni
    private static final CopyOnWriteArrayList<Session> connectedSessions = new CopyOnWriteArrayList<>();

    /**
     * Metodo chiamato quando un nuovo utente si connette al server WebSocket.
     *
     * @param session La sessione del nuovo utente.
     */
    @OnOpen
    public void onOpen(Session session) {
        connectedSessions.add(session);
        broadcast("Nuovo utente connesso! Utenti online: " + connectedSessions.size());
    }

    /**
     * Metodo chiamato quando il server WebSocket riceve un messaggio da un utente.
     *
     * @param message Il messaggio ricevuto.
     * @param session La sessione dell'utente che ha inviato il messaggio.
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        broadcast(session.getId() + ": " + message);
    }

    /**
     * Metodo chiamato quando un utente si disconnette dal server WebSocket.
     *
     * @param session La sessione dell'utente che si è disconnesso.
     */
    @OnClose
    public void onClose(Session session) {
        connectedSessions.remove(session);
        broadcast("Un utente si è disconnesso. Utenti online: " + connectedSessions.size());
    }

    /**
     * Metodo chiamato in caso di errore durante la gestione della connessione WebSocket.
     *
     * @param error   L'errore verificatosi.
     * @param session La sessione associata all'errore.
     */
    @OnError
    public void onError(Throwable error, Session session) {
        System.err.println("Errore durante la gestione della connessione: " + error.getMessage());
        try {
            session.close();
        } catch (IOException e) {
            System.err.println("Errore durante la chiusura della sessione: " + e.getMessage());
        }
    }

    /**
     * Metodo privato per inviare un messaggio a tutti gli utenti connessi.
     *
     * @param message Il messaggio da inviare.
     */
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
