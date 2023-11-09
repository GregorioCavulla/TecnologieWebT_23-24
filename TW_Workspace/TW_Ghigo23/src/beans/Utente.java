package beans;

import java.io.Serializable;

import javax.servlet.http.HttpSession;

/**
 * Rappresenta un utente dell'applicazione.
 */
public class Utente implements Serializable {

    private static final long serialVersionUID = -4284484858124618478L;

    private String username;
    private String password;
    private HttpSession session;
    

	public Utente() {
		super();
		this.session=null;
		this.username="";
		this.password="";
	}

	public Utente(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	/**
     * Restituisce il nome utente dell'utente.
     *
     * @return Il nome utente.
     */
    public String getUsername() {
        return username;
    }

    /**
     * Imposta il nome utente dell'utente.
     *
     * @param username Il nome utente da impostare.
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * Restituisce la password dell'utente.
     *
     * @return La password dell'utente.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Imposta la password dell'utente.
     *
     * @param password La password da impostare.
     */
    public void setPassword(String password) {
        this.password = password;
    }

	public HttpSession getSession() {
		return session;
	}

	public void setSession(HttpSession session) {
		this.session = session;
	}
}
