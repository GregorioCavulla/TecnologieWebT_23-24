package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.ServerData;

@WebServlet("/ordina")
public class OrdinaServlet extends HttpServlet{

	private static final long serialVersionUID = -8383301496500868000L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String drinkName = request.getParameter("drink");
		String action = request.getParameter("action");
		HttpSession session = request.getSession();

		// Ottieni l'istanza di ServerData
		ServerData serverData = ServerData.getServerData();
		
		if ("Ordina".equals(action)) {
			
		}
	}
}
