package webSockets;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.google.gson.Gson;

import beans.JsonInput;

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
    	System.out.println("connessione aperta!");
        connectedSessions.add(session);
    }

    /**
     * Metodo chiamato quando il server WebSocket riceve un messaggio da un utente.
     *
     * @param message Il messaggio ricevuto.
     * @param session La sessione dell'utente che ha inviato il messaggio.
     */
    @OnMessage
    public void onMessage(String message, Session session) {
    	Gson gson = new Gson();
    	JsonInput jsonInput = gson.fromJson(message, JsonInput.class);
    	System.out.println("message: id: "+jsonInput.getId()+" val: "+jsonInput.getValore());
        
    	broadcast(message);
    }

    /**
     * Metodo chiamato quando un utente si disconnette dal server WebSocket.
     *
     * @param session La sessione dell'utente che si è disconnesso.
     */
    @OnClose
    public void onClose(Session session) {
        connectedSessions.remove(session);
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
