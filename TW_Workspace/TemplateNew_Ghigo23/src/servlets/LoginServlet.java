package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import beans.ServerData;
import beans.Utente;

/**
 * Servlet per la gestione del login degli utenti.
 */
@WebServlet("/Login")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 7859707350222212965L;

    /**
     * Inizializza la servlet e popola la lista di utenti durante l'inizializzazione
     * dell'applicazione.
     *
     * @throws ServletException se si verifica un errore durante l'inizializzazione.
     */
    @Override
    public void init() throws ServletException {
        super.init();

        // Popola la lista di utenti durante l'inizializzazione dell'applicazione
        ServerData serverData = ServerData.getServerData();

        // Crea e aggiungi l'utente "admin"
        Utente admin = new Utente();
        admin.setUsername("admin");
        admin.setPassword("adminpw");
        serverData.getUtenti().add(admin);

        // Crea e aggiungi l'utente "cecco"
        Utente cecco = new Utente();
        cecco.setUsername("cecco");
        cecco.setPassword("ceccopw");
        serverData.getUtenti().add(cecco);

        // Crea e aggiungi l'utente "andre"
        Utente andre = new Utente();
        andre.setUsername("andre");
        andre.setPassword("andrepw");
        serverData.getUtenti().add(andre);
    }

    /**
     * Gestisce le richieste POST per il login degli utenti.
     *
     * @param request  la richiesta HTTP.
     * @param response la risposta HTTP.
     * @throws ServletException se si verifica un errore durante la gestione della richiesta.
     * @throws IOException      se si verifica un errore di I/O durante la gestione della richiesta.
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Ottieni i parametri della richiesta
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Ottieni l'istanza di ServerData
        ServerData serverData = ServerData.getServerData();

        // Verifica le credenziali
        Utente utente = serverData.getUtente(username);

        if (utente != null && utente.getPassword().equals(password)) {
            // Credenziali valide, reindirizza alla pagina di successo
            response.sendRedirect("login_success.html");
        } else {
            // Credenziali non valide, reindirizza alla pagina di errore
            response.sendRedirect("login_error.html");
        }
    }
}
