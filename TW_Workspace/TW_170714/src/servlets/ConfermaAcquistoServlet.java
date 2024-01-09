package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Gruppo;
import beans.ServerData;
import beans.Utente;

@WebServlet("/acquisto")
public class ConfermaAcquistoServlet extends HttpServlet {
	private static final long serialVersionUID = -4300660788513685165L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("sono nella servlet acquisto");
		ServerData serverData = ServerData.getServerData();
		HttpSession session = request.getSession();
		String action = request.getParameter("action");
		Utente utente = (Utente) session.getAttribute("utente");
		Gruppo gruppoUtente = serverData.getGruppoByUtente(utente);
		System.out.println("action = " + action);

		if ("Aggiungi".equals(action)) {
			// aggiungi al carrello
			int numeroBiglietti;
			if (request.getParameter("numeroBiglietti").equals("")) {
				numeroBiglietti = 0;
			} else {
				numeroBiglietti = Integer.parseInt(request.getParameter("numeroBiglietti"));
			}
			gruppoUtente.addBiglietti(numeroBiglietti);
			utente.addBigliettiAcquistati(numeroBiglietti);

			System.out.println(
					"l'utente " + utente.getUsername() + " ha aggiunto " + numeroBiglietti + " biglietti al carrello");
			System.out.println(
					"fa parte del gruppo: " + gruppoUtente.getName() + " che ha: " + gruppoUtente.getTotaleBiglietti()
							+ " biglietti, di cui confermati: " + gruppoUtente.getBigliettiConfermati());
			String message = "biglietti nel carrello: " + utente.getBigliettiAcquistati();
			request.getSession().setAttribute("carrello", message);
			response.sendRedirect(request.getContextPath() + "/pages/welcome.jsp?carrello=true");
		} else if ("Conferma".equals(action)) {
			// conferma acquisto utente
			gruppoUtente.addBigliettiConfermati(utente.getBigliettiAcquistati());
			gruppoUtente.checkOrdineCompleto();
			System.out.println("l'utente " + utente.getUsername() + " ha confermato i biglietti nel carrello");
			System.out.println(
					"fa parte del gruppo: " + gruppoUtente.getName() + " che ha: " + gruppoUtente.getTotaleBiglietti()
							+ " biglietti, di cui confermati: " + gruppoUtente.getBigliettiConfermati());
			if (!gruppoUtente.isOrdineCompleto()) {
				// se non completo
				String message = "ordine non ancora finalizzato, manca la conferma di altri utenti del gruppo";
				request.getSession().setAttribute("error", message);
			} else {
				// se completo
				// finalizza ordine
				String message = "ordine finalizzato, tutti i membri del gruppo hanno finalizzato l'ordine";
				request.getSession().setAttribute("error", message);
			}
			response.sendRedirect(request.getContextPath() + "/pages/welcome.jsp?error=true");
		}else if("Completa".equals(action)){
			Gruppo gruppo = serverData.getGruppoByName(request.getParameter("groupId"));
			gruppo.addBigliettiConfermati(gruppo.getTotaleBiglietti()-gruppo.getBigliettiConfermati());
			gruppo.checkOrdineCompleto();
			response.sendRedirect(request.getContextPath() + "/pages/admin.jsp");
		}else if("Resetta".equals(action)){
			Gruppo gruppo = serverData.getGruppoByName(request.getParameter("groupId"));
			for(Utente u : gruppo.getUtenti()) {
				u.setBigliettiAcquistati(0);
			}
			gruppo.setTotaleBiglietti(0);
			gruppo.setBigliettiConfermati(0);
			response.sendRedirect(request.getContextPath() + "/pages/admin.jsp");
		}
	}
}
