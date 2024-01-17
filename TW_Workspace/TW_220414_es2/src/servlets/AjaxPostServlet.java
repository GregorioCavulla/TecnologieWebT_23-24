package servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

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
		
		Integer[] arrayInput;
		
	
		Integer[][] matrice = new Integer[6][6]; // Inizializza la matrice
		for (int i = 0; i < 6; i++) {
			for (int j = 0; j < 6; j++) {
				matrice[i][j] = 0;
			}
		}
		int dimensione = 6;
		int i = 0;
		System.out.println(jsonBuilder.toString());

		// Converte il JSON in un oggetto Java utilizzando Gson
		Gson gson = new Gson();
		arrayInput = gson.fromJson(jsonBuilder.toString(), Integer[].class);

		if (arrayInput.length == 21) { // mezza sopra
			for (int j = 0; j < dimensione; j++) {
				for (int k = 0; k < (dimensione - j); k++) {
					matrice[j][k] = arrayInput[i];
					i++;
				}
			}
			System.out.println("meta sopra: " + Arrays.deepToString(matrice));

//			000000
//			000001
//			000012
//			000123
//			001234
//			012345
			
			
		} else { // mezza sotto
			for (int riga = 0; riga < dimensione; riga++) {
				for (int colonna = 0; colonna<(dimensione-riga)%6; colonna++) {
					
					matrice[riga][colonna] = arrayInput[i];
					i++;
				}
			}
			System.out.println("meta sotto: " + Arrays.deepToString(matrice));
		}

		String simmetrica = "false";

		for (int k = 0; k < 6; k++) {
			for (int j = 0; j < 6; j++) {
				if (matrice[k][j] == matrice[j][k]) {
					simmetrica = "true";
				} else {
					simmetrica = "false";
				}
			}
		}

		// Restituisci una risposta al client
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();

		out.println(simmetrica);
		out.flush();
	}
}
