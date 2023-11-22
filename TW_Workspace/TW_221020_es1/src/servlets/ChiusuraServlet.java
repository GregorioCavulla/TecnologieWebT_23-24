package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import beans.ServerData;

@WebServlet("/chiusura")
public class ChiusuraServlet extends HttpServlet {

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
		
		serverData.switchChiuso();
		response.sendRedirect("./pages/welcome.jsp");
		//forza la chiusura del locale, impostando a 100€ i tavoli che sono a meno, e flaggando il campo chiuso di ServerData
	}
}
