package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Drink;
import beans.ServerData;
import beans.Tavolo;

@WebServlet("/ordina")
public class OrdinaServlet extends HttpServlet{

	private static final long serialVersionUID = -8383301496500868000L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String drinkName = request.getParameter("drink");
		String action = request.getParameter("action");
		HttpSession session = request.getSession();
		String table = (String) session.getAttribute("tavolo");

		// Ottieni l'istanza di ServerData
		ServerData serverData = ServerData.getServerData();
		
		if ("Ordina".equals(action)) {
			System.out.println("ordinato drink: " + drinkName);
			Tavolo tavolo = serverData.getTavolo(table);
			Drink drink = new Drink();
			drink.setName(drinkName);
			drink.setCost(((Math.random()+1)*5)); //porcata, ma non avevo voglia di fare una mappa che associasse drink a costo
			tavolo.addDrink(drink);
			response.sendRedirect("./pages/welcome.jsp");
		} else {
			String error = "rotto in ordina Servlet";
			session.setAttribute("error", error);
			request.getRequestDispatcher("./pages/error.jsp").forward(request, response);
		}
		
	}
}
