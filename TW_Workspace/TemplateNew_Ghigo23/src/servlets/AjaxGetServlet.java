package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import beans.ServerData;
import beans.Utente;

@WebServlet("/AjaxGet")
public class AjaxGetServlet extends HttpServlet {
    /**
	 * 
	 */
	private static final long serialVersionUID = -8277165204447692976L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Ottenere l'istanza di ServerData
		System.out.println("sono nella servlet");
		
        ServerData serverData = ServerData.getServerData();

        // Ottenere la lista degli utenti
        List<Utente> utenti = serverData.getUtenti();
        System.out.println("lunghezza utenti: " + utenti.size());
        // Convertire la lista degli utenti in formato JSON
        Gson gson = new Gson();
        String json = gson.toJson(utenti);
        System.out.println("json: "+ json);
        // Impostare il tipo di contenuto nella risposta come JSON
        response.setContentType("application/json");

        // Scrivere il JSON come risposta
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }
}
