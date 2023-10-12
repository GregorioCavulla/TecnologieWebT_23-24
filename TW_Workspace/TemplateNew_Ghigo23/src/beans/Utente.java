package beans;

import java.io.Serializable;

/**
 * Rappresenta un utente dell'applicazione.
 */
public class Utente implements Serializable {

    private static final long serialVersionUID = -4284484858124618478L;

    private String username;
    private String password;

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
}
