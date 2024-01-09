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

	private List<Utente> utenti = new ArrayList<Utente>(); // Lista degli utenti registrati
	private List<Utente> liveUsers = new ArrayList<Utente>(); // Lista degli utenti attualmente online
	private static ServerData s = new ServerData(); // Istanza condivisa della classe
	private List<HttpSession> liveSessions = new ArrayList<HttpSession>(); // Lista delle sessioni utente attive
	private List<Gruppo> gruppi = new ArrayList<Gruppo>();

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

	/**
	 * Restituisce la lista degli utenti attualmente online.
	 *
	 * @return La lista degli utenti online.
	 */
	public List<Utente> getLiveUsers() {
		return liveUsers;
	}

	/**
	 * Restituisce un utente online dato il suo nome utente.
	 *
	 * @param username Il nome utente dell'utente da cercare.
	 * @return L'utente online corrispondente al nome utente specificato o null se
	 *         non trovato.
	 */
	public Utente getLiveUser(String username) {
		for (Utente u : liveUsers) {
			if (u.getUsername().equals(username)) {
				return u;
			}
		}
		return null;
	}

	/**
	 * Aggiunge un utente alla lista degli utenti online.
	 *
	 * @param utente L'utente da aggiungere.
	 * @return True se l'aggiunta ha successo, false altrimenti.
	 */
	public boolean addLiveUser(Utente utente) {
		return this.liveUsers.add(utente);
	}

	/**
	 * Rimuove un utente dalla lista degli utenti online.
	 *
	 * @param utente L'utente da rimuovere.
	 */
	public void removeLiveUser(Utente utente) {
		this.liveUsers.remove(utente);
	}

	public List<Gruppo> getGruppi() {
		return gruppi;
	}

	public void setGruppi(List<Gruppo> gruppi) {
		this.gruppi = gruppi;
	}

	public void creaGruppo(String nome) {
		Gruppo g = new Gruppo();
		g.setName(nome);
		g.setBigliettiConfermati(0);
		g.setTotaleBiglietti(0);
		this.gruppi.add(g);
	}

	public Gruppo getGruppoByName(String nome) {
		for (Gruppo g : this.gruppi) {
			if (g.getName().equals(nome)) {
				return g;
			}
		}
		System.out.println("gruppo not found");
		return null;
	}

	public Gruppo getGruppoByUtente(Utente utente) {
		for (Gruppo g : this.gruppi) {
			for (Utente u : g.getUtenti()) {
				if (u.equals(utente)) {
					return g;
				}
			}
		}
		System.out.println("gruppo not found");
		return null;
	}

}
