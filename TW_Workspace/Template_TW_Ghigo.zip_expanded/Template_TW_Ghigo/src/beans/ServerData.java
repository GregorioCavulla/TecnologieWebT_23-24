package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author ghigo this class is used to keep track of created objects and store
 *         them in order to use them inside all the application
 */
public class ServerData implements Serializable {

	private static final long serialVersionUID = -3686330915794984100L;

	// here you can make List of your bean objects and the relative methods, and the
	// logic in order to keep the servlets clean
	private List<Utente> utenti = new ArrayList<>();

	private List<Utente> utentiOnLine = new ArrayList<>();

	private static ServerData s = new ServerData();

	public synchronized static ServerData getServerData() {
		return s;
	}

	public List<Utente> getUtenti() {
		return utenti;
	}

	public void setUtenti(List<Utente> utenti) {
		this.utenti = utenti;
	}

	public boolean creaUtente(String username, String password) {

		for (Utente a : utenti) {
			if (a.getUsername().equals(username)) {
				// utente già registrato
				return false;
			}
		}
		Utente u = new Utente();
		u.setUsername(username);
		u.setPassword(password);
		this.utenti.add(u);
		return true;
	}

	public Utente getUtente(String username) {

		for (Utente u : utenti) {
			if (u.getUsername().equals(username)) {
				return u;
			}
		}
		return null;
	}

	public void setOnLine(Utente utente) {
		this.utentiOnLine.add(utente);
	}
}
