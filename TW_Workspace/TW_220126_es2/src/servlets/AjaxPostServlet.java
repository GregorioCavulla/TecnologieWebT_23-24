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

/**
 * Questa classe gestisce le richieste POST inviate tramite AJAX per aggiungere
 * un utente.
 */
@WebServlet("/ajaxPost")
public class AjaxPostServlet extends HttpServlet {
    private static final long serialVersionUID = 7042742681874209336L;

    /**
     * Gestisce le richieste POST in cui viene inviato un oggetto Utente in formato
     * JSON.
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
        // Leggi il JSON inviato dal client
        System.out.println("Sono nella servlet che gestisce i post");
        BufferedReader reader = request.getReader();
        StringBuilder jsonBuilder = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            jsonBuilder.append(line);
        }

        // Converte il JSON in un oggetto Java utilizzando Gson
        Gson gson = new Gson();
        Utente utenteTemp = gson.fromJson(jsonBuilder.toString(), Utente.class);

        // Aggiungi l'utente alla lista
        ServerData serverData = ServerData.getServerData();
        Utente utente = serverData.creaUtente(utenteTemp);

        // Restituisci una risposta al client
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        String jsonResponse;

        if (utente != null && serverData.addUtente(utente)) {
            jsonResponse = "{\"message\": \"Utente aggiunto con successo.\"}";
        } else {
            jsonResponse = "{\"message\": \"Errore nell'aggiunta dell'utente, è già presente.\"}";
        }

        out.println(jsonResponse);
        out.flush();
    }
}
