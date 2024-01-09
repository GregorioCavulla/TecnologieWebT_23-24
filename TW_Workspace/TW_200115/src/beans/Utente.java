package beans;

import java.io.Serializable;
import java.time.LocalDate;

import javax.servlet.http.HttpSession;

/**
 * Rappresenta un utente dell'applicazione.
 */
public class Utente implements Serializable {

	private static final long serialVersionUID = -4284484858124618478L;

	private String username;
	private String password;
	private LocalDate passwordDate;
	private boolean oldPassword;
	private transient HttpSession session;

	/**
	 * Costruttore predefinito dell'utente.
	 */
	public Utente() {
		super();
		this.session = null;
		this.username = "";
		this.password = "";
		this.passwordDate = LocalDate.now();
		this.oldPassword = false;
	}

	/**
	 * Costruttore dell'utente con parametri.
	 *
	 * @param username Il nome utente dell'utente.
	 * @param password La password dell'utente.
	 */
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

	/**
	 * Override del metodo toString per una rappresentazione testuale dell'oggetto
	 * Utente.
	 *
	 * @return Rappresentazione testuale dell'oggetto Utente.
	 */
	@Override
	public String toString() {
		return "Utente{" + "username='" + username + '\'' + ", password='" + password + '\'' + ", session=" + session
				+ '}';
	}

	public LocalDate getPasswordDate() {
		return passwordDate;
	}

	public void setPasswordDate(LocalDate passwordDate) {
		this.passwordDate = passwordDate;
	}

	public void resetPasswordDate() {
		this.passwordDate = LocalDate.now();
	}

	public boolean isPasswordOld() {
		if (this.passwordDate.isBefore(LocalDate.now().minusDays(60))) {
			oldPassword = true;
		} else {
			oldPassword = false;
		}
		return oldPassword;
	}
}
