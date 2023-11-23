package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.ServerData;
import beans.Utente;

/**
 * Questa servlet gestisce le richieste POST relative al logout dell'utente.
 */
@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

    private static final long serialVersionUID = 538742136318470907L;

    /**
     * Gestisce le richieste POST relative al logout dell'utente.
     *
     * @param request  L'oggetto HttpServletRequest che rappresenta la richiesta
     *                 HTTP in arrivo.
     * @param response L'oggetto HttpServletResponse che rappresenta la risposta
     *                 HTTP da restituire al client.
     * @throws ServletException Se si verifica un errore nella gestione della
     *                          richiesta.
     * @throws IOException      Se si verifica un errore di input/output durante la
     *                          gestione della richiesta.
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ServerData serverData = ServerData.getServerData();
        HttpSession session = request.getSession();
        Utente utente = (Utente) session.getAttribute("utente");
        System.out.println("ciao " + utente.getUsername() + " hai fatto il logout");

        // Esegui la logica di logout, ad esempio invalidando la sessione
        serverData.removeLiveSession(session);
        serverData.removeLiveUser(utente);

        System.out.println("liveSessions: ");
        for (HttpSession s : serverData.getLiveSessions()) {
            Utente u = (Utente) s.getAttribute("utente");
            System.out.println(s.getAttribute("utente") + "user: " + u.getUsername());
        }
        // Il redirect è gestito dallo script "Logout.js"
    }
}
