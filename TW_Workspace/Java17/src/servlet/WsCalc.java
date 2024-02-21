package servlet;

import java.io.IOException;

import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.google.gson.Gson;

@ServerEndpoint("/calc")
public class WsCalc {
	
	private Gson gson = new Gson();
	
	
	@OnOpen
	public void open(Session session) {
		System.out.println("Aperta socket");
			
	}
	
	@OnMessage
	public void handleMessage(String message, Session session) {
		
		
		
		System.out.println("Messaggio ricevuto: " + message);
			
			for(Session s: session.getOpenSessions()) {
				try {
					s.getBasicRemote().sendText(message);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		

		
	
}
