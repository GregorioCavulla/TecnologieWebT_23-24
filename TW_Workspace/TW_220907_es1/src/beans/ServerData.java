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
	
	private List<Utente> utenti = new ArrayList<>(); // Lista degli utenti registrati
	private List<Articolo> articoli = new ArrayList<>();
	private List<HttpSession> liveSessions = new ArrayList<>(); // Lista delle sessioni utente attive

	/**
	 * Restituisce un'istanza condivisa di ServerData (singleton).
	 *
	 * @return L'istanza condivisa di ServerData.
	 */
	public synchronized static ServerData getServerData() {
		return s;
	}

	// Metodi per la gestione degli utenti
	
	public void creaUtente(HttpSession session) {
		Utente u = new Utente();
		liveSessions.add(session);
		u.setSession(session);
		this.getUtenti().add(u);
	}
	
	public Utente getUtente(HttpSession session) {
		for(Utente u : this.utenti) {
			if(u.getSession().equals(session)) {
				return u;
			}
		}
		return null;
	}
	
	public void creaArticolo(String nomeArticolo) {
		Articolo a = new Articolo();
		a.setNomeArticolo(nomeArticolo);
		this.articoli.add(a);
	}
	
	public Articolo getArticolo(String nomeArticolo) {
		for(Articolo a : this.articoli) {
			if(a.getNomeArticolo().equals(nomeArticolo)) {
				return a;
			}
		}
		return null;
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
	 * Aggiunge un utente alla lista degli utenti.
	 *
	 * @param utente L'utente da aggiungere.
	 * @throws UtenteEsistenteException se l'utente esiste già.
	 */
	public boolean addUtente(Utente utente){
		if (utenti.contains(utente)) {
			System.out.println("utenet già presente, non aggiungo");
			return false;
		}
		utenti.add(utente);
		return true;
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

	public List<Articolo> getArticoli() {
		return articoli;
	}

	public void setArticoli(List<Articolo> articoli) {
		this.articoli = articoli;
	}
}
