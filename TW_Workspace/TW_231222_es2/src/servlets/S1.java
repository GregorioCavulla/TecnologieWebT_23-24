package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/s1")
public class S1 extends HttpServlet{

	private static final long serialVersionUID = 5228344992288348012L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		System.out.println("servlet s1");
		
		String string = "devi morire";
		
		String matrice = request.getParameter("matrix");
		
		HttpSession session = request.getSession();
		
		String messaggio = string + matrice;
		
		session.setAttribute("messaggio", messaggio);
		
		System.out.println("messaggio: "+ messaggio);
		
		response.sendRedirect("./pages/welcome.jsp");
	}
}
