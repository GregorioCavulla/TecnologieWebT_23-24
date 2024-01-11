package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

/**
 * Rappresenta un utente dell'applicazione.
 */
public class Utente implements Serializable {

	private static final long serialVersionUID = -4284484858124618478L;

	private List<Articolo> articoli = new ArrayList<Articolo>();
	private transient HttpSession session;

	/**
	 * Restituisce la sessione associata all'utente.
	 *
	 * @return La sessione dell'utente.
	 */
	public HttpSession getSession() {
		return session;
	}

	/**
	 * Imposta la sessione associata all'utente.
	 *
	 * @param session La sessione da associare all'utente.
	 */
	public void setSession(HttpSession session) {
		this.session = session;
	}

	public List<Articolo> getArticoli() {
		return articoli;
	}

	public void setiArticoli(List<Articolo> articoli) {
		this.articoli = articoli;
	}
	
	public void addArticolo(Articolo articolo) {
		this.articoli.add(articolo);
	}
}
