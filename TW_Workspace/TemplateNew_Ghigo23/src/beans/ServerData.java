package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Rappresenta i dati del server, inclusa una lista di utenti.
 */
public class ServerData implements Serializable {

    private static final long serialVersionUID = 1936094822314768887L;

    private List<Utente> utenti = new ArrayList<>();
    private static ServerData s = new ServerData();

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
}
