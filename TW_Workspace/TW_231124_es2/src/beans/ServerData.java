package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

/**
 * Rappresenta i dati del server, inclusa una lista di utenti.
 */
public class ServerData implements Serializable {

	private static final long serialVersionUID = 1936094822314768887L;

	private static ServerData s = new ServerData(); // Istanza condivisa della classe
	private List<HttpSession> liveSessions = new ArrayList<HttpSession>(); // Lista delle sessioni utente attive

	/**
	 * Restituisce un'istanza condivisa di ServerData (singleton).
	 *
	 * @return L'istanza condivisa di ServerData.
	 */
	public synchronized static ServerData getServerData() {
		return s;
	}

	/**
	 * Restituisce la lista delle sessioni utente attive.
	 *
	 * @return La lista delle sessioni utente attive.
	 */
	public List<HttpSession> getLiveSessions() {
		return liveSessions;
	}

	/**
	 * Aggiunge una sessione utente alla lista delle sessioni utente attive.
	 *
	 * @param liveSession La sessione utente da aggiungere.
	 */
	public void addLiveSession(HttpSession liveSession) {
		this.liveSessions.add(liveSession);
		for (HttpSession s : this.liveSessions) {
			System.out.println("sessione: " + s.toString());
		}
	}

	/**
	 * Rimuove una sessione utente dalla lista delle sessioni utente attive.
	 *
	 * @param liveSession La sessione utente da rimuovere.
	 */
	public void removeLiveSession(HttpSession liveSession) {
		this.liveSessions.remove(liveSession);
		liveSession.invalidate();
	}
	
	public HttpSession getSessionById(String sessionId) {
		for(HttpSession s : this.liveSessions) {
			if(s.getId().equals(sessionId)){
				return s;
			}
		}
		return null;
	}


}
