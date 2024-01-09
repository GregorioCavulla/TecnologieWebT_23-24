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

	private List<Utente> utenti = new ArrayList<>(); // Lista degli utenti registrati
	private List<Utente> liveUsers = new ArrayList<>(); // Lista degli utenti attualmente online
	private List<Gruppo> gruppi = new ArrayList<>(); // Lista dei gruppi attivi
	private List<HttpSession> liveSessions = new ArrayList<>(); // Lista delle sessioni utente attive

	/**
	 * Restituisce un'istanza condivisa di ServerData (singleton).
	 *
	 * @return L'istanza condivisa di ServerData.
	 */
	public synchronized static ServerData getServerData() {
		return new ServerData();
	}

	// Metodi per la gestione degli utenti

	/**
	 * Restituisce la lista degli utenti.
	 *
	 * @return La lista degli utenti.
	 */
	public List<Utente> getUtenti() {
		return new ArrayList<>(utenti);
	}

	/**
	 * Aggiunge un utente alla lista degli utenti.
	 *
	 * @param utente L'utente da aggiungere.
	 * @throws UtenteEsistenteException se l'utente esiste già.
	 */
	public boolean addUtente(Utente utente){
		if (utenti.contains(utente)) {
			System.out.println("utenet già presente, non aggiungo");
			return true;
		}
		utenti.add(utente);
		return false;
	}

	/**
	 * Crea un nuovo utente e lo aggiunge alla lista degli utenti.
	 *
	 * @param username    Il nome utente del nuovo utente.
	 * @param password    La password del nuovo utente.
	 * @param groupNumber Il numero del gruppo a cui appartiene il nuovo utente.
	 * @return True se l'utente è creato con successo, false se l'utente esiste già.
	 * @throws Exception
	 */
	public boolean creaUtente(String username, String password, String groupNumber){
		for (Utente u : this.getUtenti()) {
			if (u.getUsername().equals(username)) {
				System.out.println("Utente già esistente " + username);
				return false;
			}
		}

		String nomeGruppo = parseGroupName(groupNumber);
		System.out.println("Nome reale del gruppo: " + nomeGruppo);

		Utente utente = new Utente();
		utente.setUsername(username);
		utente.setPassword(password);

		this.addUtente(utente);

		Gruppo found = getGruppo(nomeGruppo);
		if (found == null) {
			creaGruppo(groupNumber);
			found = getGruppo(groupNumber);
		}
		
		System.out.println("Utente aggiunto: " + utente.getUsername());
		return found.addUtente(utente);
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
				System.out.println("Utente già esistente " + utente.getUsername());
				return null;
			}
		}

		Utente nuovoUtente = new Utente();
		nuovoUtente.setPassword(utente.getPassword());
		nuovoUtente.setUsername(utente.getUsername());

		return nuovoUtente;
	}

	/**
	 * Restituisce un utente dato il suo nome utente.
	 *
	 * @param username Il nome utente dell'utente da cercare.
	 * @return L'utente corrispondente al nome utente specificato o null se non
	 *         trovato.
	 */
	public Utente getUtente(String username) {
		return utenti.stream().filter(u -> u.getUsername().equals(username)).findFirst().orElse(null);
	}

	// Metodi per la gestione degli utenti online

	/**
	 * Aggiunge un utente alla lista degli utenti online.
	 *
	 * @param utente L'utente da aggiungere.
	 * @return True se l'aggiunta ha successo, false altrimenti.
	 */
	public boolean addLiveUser(Utente utente) {
		return liveUsers.add(utente);
	}
	/**
	 * Rimuove un utente alla lista degli utenti online.
	 *
	 * @param utente L'utente da rimuovere.
	 * @return True se la rimossione ha successo, false altrimenti.
	 */
	public boolean removeLiveUser(Utente utente) {
		return liveUsers.remove(utente);
	}

	/**
	 * Restituisce la lista degli utenti attualmente online.
	 *
	 * @return La lista degli utenti online.
	 */
	public List<Utente> getLiveUsers() {
		return new ArrayList<>(liveUsers);
	}

	/**
	 * Restituisce un utente online dato il suo nome utente.
	 *
	 * @param username Il nome utente dell'utente da cercare.
	 * @return L'utente online corrispondente al nome utente specificato o null se
	 *         non trovato.
	 */
	public Utente getLiveUser(String username) {
		return liveUsers.stream().filter(u -> u.getUsername().equals(username)).findFirst().orElse(null);
	}

	// Metodi per la gestione dei gruppi

	/**
	 * Restituisce la lista dei gruppi attivi.
	 *
	 * @return La lista dei gruppi attivi.
	 */
	public List<Gruppo> getGruppi() {
		return new ArrayList<>(gruppi);
	}

	/**
	 * Restituisce un gruppo dato il suo numero.
	 *
	 * @param groupNumber Il numero del gruppo da cercare.
	 * @return Il gruppo corrispondente al nome specificato o null se non trovato.
	 */
	public Gruppo getGruppo(String groupNumber) {
		String nomeGruppo = parseGroupName(groupNumber);
		return gruppi.stream().filter(g -> g.getName().equals(nomeGruppo)).findFirst().orElse(null);
	}

	/**
	 * Crea un nuovo gruppo e lo aggiunge alla lista dei gruppi.
	 *
	 * @param groupNumber Il numero del nuovo gruppo.
	 */
	public boolean creaGruppo(String groupNumber) {
		Gruppo gruppo = new Gruppo();
		String nomeGruppo = parseGroupName(groupNumber);
		gruppo.setName(nomeGruppo);
		return addGroup(gruppo);
	}
	
	/**
	 * Aggiunge un gruppo alla lista dei gruppo=i online.
	 *
	 * @param gruppo il gruppo da aggiungere.
	 * @return True se l'aggiunta ha successo, false altrimenti.
	 */
	public boolean addGroup(Gruppo gruppo) {
		return gruppi.add(gruppo);
	}
	/**
	 * Rimuove un gruppo alla lista dei gruppi online.
	 *
	 * @param gruppo L'gruppo da rimuovere.
	 * @return True se la rimossione ha successo, false altrimenti.
	 */
	public boolean removeGroup(Gruppo gruppo) {
		return gruppi.remove(gruppo);
	}

	/**
	 * Restituisce il gruppo a cui appartiene un utente.
	 *
	 * @param utente L'utente di cui trovare il gruppo.
	 * @return Il gruppo a cui appartiene l'utente o null se non appartiene a nessun
	 *         gruppo.
	 */
	public Gruppo getGruppoByUtente(Utente utente) {
		return gruppi.stream().filter(g -> g.getUtenti().contains(utente)).findFirst().orElse(null);
	}

	// Metodi per la gestione delle sessioni utente

	/**
	 * Restituisce la lista delle sessioni utente attive.
	 *
	 * @return La lista delle sessioni utente attive.
	 */
	public List<HttpSession> getLiveSessions() {
		return new ArrayList<>(liveSessions);
	}

	/**
	 * Aggiunge una sessione utente alla lista delle sessioni utente attive.
	 *
	 * @param liveSession La sessione utente da aggiungere.
	 */
	public boolean addLiveSession(HttpSession liveSession) {
		return this.liveSessions.add(liveSession);
	}

	/**
	 * Rimuove una sessione utente dalla lista delle sessioni utente attive.
	 *
	 * @param liveSession La sessione utente da rimuovere.
	 * @return 
	 */
	public boolean removeLiveSession(HttpSession liveSession) {
		return this.liveSessions.remove(liveSession);
	}

	/**
	 * Restituisce il nome effettivo di un gruppo dato un nome fornito.
	 *
	 * @param nome Il nome fornito del gruppo.
	 * @return Il nome effettivo del gruppo.
	 */
	public String parseGroupName(String nome) {
		return "group" + nome.trim();
	}
}
