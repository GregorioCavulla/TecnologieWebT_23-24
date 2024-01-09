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

@WebServlet("/reset")
public class ResetPasswordServlet  extends HttpServlet {

	private static final long serialVersionUID = 8375098930868002261L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String password = request.getParameter("password");
        HttpSession session = request.getSession();
        Utente utente = (Utente) session.getAttribute("utente");

		ServerData serverData = ServerData.getServerData();
		
		utente.setPassword(password);
		utente.resetPasswordDate();
		
		serverData.getGruppoByUtente(utente).arePasswordOld();
		int changesLeft = serverData.getGruppoByUtente(utente).getChangesLeft();
		
		System.out.println("changes left for this group: " + changesLeft);
		
		response.sendRedirect("./pages/welcome.jsp");		
	}
}
