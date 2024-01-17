package beans;

import java.util.ArrayList;
import java.util.List;

/**
 * Classe che rappresenta un gruppo di utenti.
 */
public class Gruppo {

    private List<Utente> utenti = new ArrayList<Utente>();
    private String name;

    /**
     * Restituisce la lista degli utenti nel gruppo.
     *
     * @return La lista degli utenti nel gruppo.
     */
    public List<Utente> getUtenti() {
        return utenti;    }

    /**
     * Imposta la lista degli utenti nel gruppo.
     *
     * @param utenti La lista degli utenti da impostare nel gruppo.
     */
    public void setUtenti(List<Utente> utenti) {
        this.utenti = utenti;
    }

    /**
     * Restituisce l'utente con il nome specificato.
     *
     * @param utente Il nome dell'utente da cercare nel gruppo.
     * @return L'utente con il nome specificato.
     * @throws Exception Se l'utente non è presente nel gruppo.
     */
    public Utente getUtente(String utente) throws Exception {
        for (Utente u : utenti) {
            if (u.getUsername().equals(utente)) {
                return u;
            }
        }
        throw new Exception("Utente " + utente + " non presente nel gruppo");
    }

    /**
     * Aggiunge un utente al gruppo.
     *
     * @param utente L'utente da aggiungere al gruppo.
     * @return 
     */
    public boolean addUtente(Utente utente) {
        return this.utenti.add(utente);
    }

    /**
     * Restituisce il nome del gruppo.
     *
     * @return Il nome del gruppo.
     */
    public String getName() {
        return name;
    }

    /**
     * Imposta il nome del gruppo.
     *
     * @param name Il nome da impostare per il gruppo.
     */
    public void setName(String name) {
        this.name = name;
    }
}
