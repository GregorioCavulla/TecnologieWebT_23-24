package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.ServerData;
import beans.Tavolo;
import beans.Utente;

/**
 * Questa classe gestisce le richieste relative al login e alla registrazione
 * degli utenti.
 */
@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 7859707350222212965L;

	/**
	 * Questo metodo viene chiamato durante l'inizializzazione dell'applicazione e
	 * popola la lista di utenti.
	 */
	@Override
	public void init() throws ServletException {
		super.init();

//		System.out.println("init della servlet, creo utenti: ");
//
//		// Popola la lista di utenti durante l'inizializzazione dell'applicazione
//		ServerData serverData = ServerData.getServerData();
//
//		// Crea e aggiungi l'utente "admin"
//		serverData.creaUtente("admin", "admin");
//
//		// Crea e aggiungi l'utente "cecco"
//		serverData.creaUtente("cecco", "ceccopw");
//
//		// Crea e aggiungi l'utente "andre"
//		serverData.creaUtente("andre", "andrepw");
//
//		System.out.println("creati utenti: ");
//		for (Utente u : serverData.getUtenti()) {
//			System.out.println("utente: " + u.getUsername());
//		}
	}

	/**
	 * Gestisce le richieste POST relative al login e alla registrazione degli
	 * utenti.
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

		// Ottieni i parametri dalla richiesta
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String table = request.getParameter("table");
		String action = request.getParameter("action");
		HttpSession session = request.getSession();

		// Ottieni l'istanza di ServerData
		ServerData serverData = ServerData.getServerData();

		// Gestisci la registrazione
		if ("Registrazione".equals(action)) {
			// Se l'utente è già registrato, mostra un messaggio di errore
			if (!serverData.creaUtente(username, password, table)) {
				String error = "utente già registrato";
				session.setAttribute("error", error);
				request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
			} else {
				// Se la registrazione ha successo, impostare la sessione e reindirizzare alla
				// pagina di benvenuto
				Utente utente = serverData.getUtente(username);
				utente.setSession(session);
				session.setAttribute("utente", utente);
				session.setAttribute("logged", true);
				serverData.addLiveSession(session);
				serverData.addLiveUser(utente);
				
				if(!serverData.creatTavolo(table)) {
					Tavolo newTavolo = serverData.getTavolo(table);
					newTavolo.addUtente(utente);
				} else {
					Tavolo tavolo = serverData.getTavolo(table);
					tavolo.addUtente(utente);
				}

				response.sendRedirect("./pages/welcome.jsp");
			}
		}

		// Gestisci l'accesso
		if ("Accesso".equals(action)) {
			// Verifica le credenziali
			Utente utente = serverData.getUtente(username);
			if (utente != null && utente.getPassword().equals(password)) {
				// Credenziali valide, reindirizza alla pagina di successo (welcome.jsp)
				utente.setSession(session);
				request.getSession().setAttribute("utente", utente);
				request.getSession().setAttribute("logged", true);
				serverData.addLiveSession(session);
				serverData.addLiveUser(utente);
				response.sendRedirect("./pages/welcome.jsp");
			} else if (utente == null) {
				// Credenziali non valide, utente non registrato, mostra un messaggio di errore
				String error = "utente non registrato";
				session.setAttribute("error", error);
				request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
			} else {
				// Credenziali non valide, mostra un messaggio di errore
				String error = "credenziali non valide";
				session.setAttribute("error", error);
				request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
			}
		}
	}
}
