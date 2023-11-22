package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import beans.ServerData;

/**
 * Questa classe gestisce le richieste GET inviate tramite AJAX per ottenere la
 * lista degli utenti.
 */
@WebServlet("/ajaxGetConto")
public class AjaxGetContoServlet extends HttpServlet {
	private static final long serialVersionUID = -8277165204447692976L;

	/**
	 * Gestisce le richieste GET per ottenere la lista degli utenti in formato JSON.
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
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// Ottenere l'istanza di ServerData
		System.out.println("Sono nella servlet");
		ServerData serverData = ServerData.getServerData();

		String numeroTavolo = request.getParameter("tavolo");
		// Ottenere la lista dei drink
		Double contoTavolo = serverData.getTavolo(numeroTavolo).getCostoTavolo();
		System.out.println("drinks: ");

		if(contoTavolo<100) {
			serverData.getTavolo(numeroTavolo).setCostoTavolo(100.0);
		}

		// Convertire la lista degli utenti in formato JSON
		Gson gson = new Gson();
		String json = gson.toJson(serverData.getTavolo(numeroTavolo));
		System.out.println("JSON: " + json);

		// Impostare il tipo di contenuto nella risposta come JSON
		response.setContentType("application/json");

		// Scrivere il JSON come risposta
		PrintWriter out = response.getWriter();
		out.print(json);
		out.flush();
	}
}
