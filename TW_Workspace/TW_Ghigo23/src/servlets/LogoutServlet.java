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

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

	private static final long serialVersionUID = 538742136318470907L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ServerData serverData = ServerData.getServerData();
		HttpSession session = request.getSession();
		Utente utente = (Utente) session.getAttribute("utente");
		System.out.println("ciao " + utente.getUsername() + " hai fatto il logout");

		// Esegui la logica di logout, ad esempio invalidando la sessione
		serverData.removeLiveSession(session);
		
		
		for(HttpSession s : serverData.getLiveSessions()) {
		System.out.println(s.getAttribute("utente"));
		}
		//il redirec è gestito dallo scritp "Logout.js"
	}
}
