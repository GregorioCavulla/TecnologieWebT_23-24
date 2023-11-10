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

    private List<Utente> utenti = new ArrayList<>();
    private static ServerData s = new ServerData();
    private List<HttpSession> liveSessions = new ArrayList<>();

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
     * @return L'utente corrispondente al nome utente specificato o null se non trovato.
     */
    public Utente getUtente(String username) {
        for (Utente u : utenti) {
            if (u.getUsername().equals(username)) {
                return u;
            }
        }
        return null;
    }
    
    public boolean addUtente(Utente utente) {
    	if(this.utenti.add(utente)) {
    	return true;
    	}
    	return false;
    }
    
    public boolean creaUtente(String username, String password) {
		
    	System.out.println("sto creando: " + username);
    	
    	for(Utente u:this.getUtenti()) {
    		if(u.getUsername().equals(username)) {
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
    	System.out.println("ho aggiunto: "+ utente.getUsername());
    	return true;    	
    }
    
    public Utente creaUtente(Utente utente) {
    	for(Utente u:this.getUtenti()) {
    		if(u.getUsername().equals(utente.getUsername())) {
    			System.out.println("utente già esistente " + utente.getUsername());
    			return null;
    		}
    	}
    	Utente u = new Utente();
    	u.setPassword(utente.getPassword());
    	u.setUsername(utente.getUsername());
    	
    	return u;
    }

	public List<HttpSession> getLiveSessions() {
		return liveSessions;
	}

	public void addLiveSession(HttpSession liveSession) {
		this.liveSessions.add(liveSession);
	}
    
	public void removeLiveSession(HttpSession liveSession) {
		this.liveSessions.remove(liveSession);
	}
}
