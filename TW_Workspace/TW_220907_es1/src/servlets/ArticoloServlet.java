package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Articolo;
import beans.ServerData;
import beans.Utente;

@WebServlet("/articolo")
public class ArticoloServlet extends HttpServlet {

	private static final long serialVersionUID = -7822407968799413173L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ServerData serverData = ServerData.getServerData();
		String action = (String) request.getParameter("action");
		String nomeArticolo = (String) request.getParameter("nomeArticolo");
		HttpSession session = request.getSession();

		if (action == null) {// nomeArticolo
			session.setAttribute("permesso", "readonly");
			nomeArticolo = nomeArticolo.replaceAll("%", "");

			serverData.creaUtente(session);

			Utente u = serverData.getUtente(session);

			boolean esiste = false;

			System.out.println("in input, nome Articolo: " + nomeArticolo);

			if (u != null) {

				System.out.println("l'utente c'è, sessione: " + u.getSession());

				for (Articolo a : serverData.getArticoli()) {
					if (a.getNomeArticolo().equals(nomeArticolo)) {
						esiste = true;
					}
				}
				if (esiste) {
					u.addArticolo(serverData.getArticolo(nomeArticolo));
				} else {

					System.out.println("creo articolo: " + nomeArticolo);

					serverData.creaArticolo(nomeArticolo);

					System.out.println("eccolo: " + serverData.getArticolo(nomeArticolo));

					u.addArticolo(serverData.getArticolo(nomeArticolo));
				}

				Articolo articoloScelto = serverData.getArticolo(nomeArticolo);

				session.setAttribute("articolo", articoloScelto);

				response.sendRedirect("./pages/articolo.jsp");

			} else {
				System.out.println("tutto rotto, utente è null");
			}

		} else if (action.equals("Richiedi Permesso")) {// richiesta permesso
			System.out.println("richiesta permesso");
			Articolo articolo = serverData.getArticolo(nomeArticolo);
			Utente u = serverData.getUtente(session);
			if (articolo.getUtenteAttivo() == null) {
				articolo.setUtenteAttivo(u);
				session.setAttribute("permesso", "");
			} else {
				session.setAttribute("permesso", "readonly");
			}
			response.sendRedirect("./pages/articolo.jsp");

		} else if (action.equals("Revoca Permesso")) {// revoca permesso
			System.out.println("revoca permesso");
			String contenuto = (String) request.getParameter("contenuto");
			System.out.println(contenuto);
			Articolo articolo = serverData.getArticolo(nomeArticolo);
			articolo.setContenuto(contenuto);
			Utente u = serverData.getUtente(session);
			if (articolo.getUtenteAttivo() == u) {
				articolo.setUtenteAttivo(null);
				session.setAttribute("permesso", "readonly");
			} else {
				System.out.println("qualcosa si è rotto");
			}
			response.sendRedirect("./pages/articolo.jsp");
		} else if (action.equals("Froza Revoca")) {// revoca permesso
			System.out.println("Froza Revoca");
			Articolo articolo = serverData.getArticolo(nomeArticolo);
			Utente u = articolo.getUtenteAttivo();
			HttpSession sessioneUtente = u.getSession();
			sessioneUtente.setAttribute("permesso", "readonly");
			articolo.setUtenteAttivo(null);
			response.sendRedirect("./pages/admin.jsp");
		}
	}
}

