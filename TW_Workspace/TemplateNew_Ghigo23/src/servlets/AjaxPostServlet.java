package servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import beans.ServerData;
import beans.Utente;

@WebServlet("/AjaxPost")
public class AjaxPostServlet extends HttpServlet {
    /**
	 * 
	 */
	private static final long serialVersionUID = 7042742681874209336L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Leggi il JSON inviato dal client
		System.out.println("sono nella servlet che gestisce i post");
        BufferedReader reader = request.getReader();
        StringBuilder jsonBuilder = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            jsonBuilder.append(line);
        }

        // Converte il JSON in un oggetto Java utilizzando Gson
        Gson gson = new Gson();
        Utente utente = gson.fromJson(jsonBuilder.toString(), Utente.class);

        // Aggiungi l'utente alla lista
        ServerData serverData = ServerData.getServerData();
        boolean success = serverData.addUtente(utente);

        // Restituisci una risposta al client
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        if (success) {
            out.println("Utente aggiunto con successo.");
        } else {
            out.println("Errore nell'aggiunta dell'utente. Potrebbe già esistere.");
        }

        out.flush();
    }
}
