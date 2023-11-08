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
 * Questa classe gestisce le richieste relative al login e alla registrazione degli utenti.
 */
@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 7859707350222212965L;

    /**
     * Questo metodo viene chiamato durante l'inizializzazione dell'applicazione e popola la lista di utenti.
     */
    @Override
    public void init() throws ServletException {
        super.init();

        // Popola la lista di utenti durante l'inizializzazione dell'applicazione
        ServerData serverData = ServerData.getServerData();

        // Crea e aggiungi l'utente "admin"
        Utente admin = new Utente();
        admin.setUsername("admin");
        admin.setPassword("admin");
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
     * Gestisce le richieste POST relative al login e alla registrazione degli utenti.
     *
     * @param request  L'oggetto HttpServletRequest che rappresenta la richiesta HTTP in arrivo.
     * @param response L'oggetto HttpServletResponse che rappresenta la risposta HTTP da restituire al client.
     * @throws ServletException Se si verifica un errore nella gestione della richiesta.
     * @throws IOException      Se si verifica un errore di input/output durante la gestione della richiesta.
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        System.out.println("utente: " + username);
        String password = request.getParameter("password");
        String action = request.getParameter("action");
        HttpSession session = request.getSession();

        // Ottieni l'istanza di ServerData
        ServerData serverData = ServerData.getServerData();

        // Gestisci la registrazione
        if ("Registrazione".equals(action)) {
            if (!serverData.creaUtente(username, password)) {
                String error = "utente già registrato";
                session.setAttribute("error", error);
                request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
            } else {
                Utente utente = serverData.getUtente(username);
                request.getSession().setAttribute("utente", utente);
                response.sendRedirect("./pages/welcome.jsp");
            }
        }

        // Gestisci l'accesso
        if ("Accesso".equals(action)) {
            // Verifica le credenziali
            Utente utente = serverData.getUtente(username);
            if (utente != null && utente.getPassword().equals(password)) {
                // Credenziali valide, reindirizza alla pagina di successo (welcome.jsp)
                request.getSession().setAttribute("utente", utente);
                response.sendRedirect("./pages/welcome.jsp");
            } else if (utente == null) {
                String error = "utente non registrato";
                session.setAttribute("error", error);
                request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
            } else {
                // Credenziali non valide, imposta un messaggio di errore nell'attributo request
                String error = "credenziali non valide";
                session.setAttribute("error", error);
                request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
            }
        }
    }
}
