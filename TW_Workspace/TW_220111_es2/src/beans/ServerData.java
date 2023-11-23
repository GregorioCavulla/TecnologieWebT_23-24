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

	private List<Utente> utenti = new ArrayList<Utente>();
	private List<Utente> liveUsers = new ArrayList<Utente>();
	private static ServerData s = new ServerData();
	private List<HttpSession> liveSessions = new ArrayList<HttpSession>();

	/**
	 * Restituisce un'istanza condivisa di ServerData (singleton).
	 *
	 * @return L'istanza condivisa di ServerData.
	 */
	public synchronized static ServerData getServerData() {
		return s;
	}

	/**
	 * Restituisce la lista degli utenti.
	 *
	 * @return La lista degli utenti.
	 */
	public List<Utente> getUtenti() {
		return utenti;
	}

	/**
	 * Imposta la lista degli utenti.
	 *
	 * @param utenti La lista degli utenti da impostare.
	 */
	public void setUtenti(List<Utente> utenti) {
		this.utenti = utenti;
	}

	/**
	 * Restituisce un utente dato il suo nome utente.
	 *
	 * @param username Il nome utente dell'utente da cercare.
	 * @return L'utente corrispondente al nome utente specificato o null se non
	 *         trovato.
	 */
	public Utente getUtente(String username) {
		for (Utente u : utenti) {
			if (u.getUsername().equals(username)) {
				return u;
			}
		}
		return null;
	}

	/**
	 * Aggiunge un utente alla lista degli utenti.
	 *
	 * @param utente L'utente da aggiungere.
	 * @return True se l'aggiunta ha successo, false altrimenti.
	 */
	public boolean addUtente(Utente utente) {
		return this.utenti.add(utente);
	}

	/**
	 * Crea un nuovo utente e lo aggiunge alla lista degli utenti.
	 *
	 * @param username Il nome utente del nuovo utente.
	 * @param password La password del nuovo utente.
	 * @return True se l'utente è creato con successo, false se l'utente esiste già.
	 */
	public boolean creaUtente(String username, String password) {
		for (Utente u : this.getUtenti()) {
			if (u.getUsername().equals(username)) {
				System.out.println("utente già esistente " + username);
				return false;
			}
		}
		Utente utente = new Utente();
		utente.setUsername(username);
		utente.setPassword(password);
		System.out.println("ho creato: " + username);
		System.out.println("check: " + utente.getUsername());
		this.addUtente(utente);
		System.out.println("ho aggiunto: " + utente.getUsername());
		return true;
	}

	/**
	 * Crea un nuovo utente e lo restituisce senza aggiungerlo alla lista degli
	 * utenti.
	 *
	 * @param utente L'oggetto Utente da utilizzare come modello per il nuovo
	 *               utente.
	 * @return L'utente creato o null se l'utente esiste già.
	 */
	public Utente creaUtente(Utente utente) {
		for (Utente u : this.getUtenti()) {
			if (u.getUsername().equals(utente.getUsername())) {
				System.out.println("utente già esistente " + utente.getUsername());
				return null;
			}
		}
		Utente u = new Utente();
		u.setPassword(utente.getPassword());
		u.setUsername(utente.getUsername());

		return u;
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
	}

	public List<Utente> getLiveUsers() {
		return liveUsers;
	}
	
	public Utente getLiveUser(String username) {
		for (Utente u : liveUsers) {
			if (u.getUsername().equals(username)) {
				return u;
			}
		}
		return null;
	}


	public boolean addLiveUser(Utente utente) {
		return this.liveUsers.add(utente);
	}
	
	public void removeLiveUser(Utente utente) {
		this.liveUsers.remove(utente);
	}

}
