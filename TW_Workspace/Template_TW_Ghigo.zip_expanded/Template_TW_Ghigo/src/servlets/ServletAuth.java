package servlets;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.ServerData;
import beans.Utente;

@WebServlet("/Auth")
public class ServletAuth extends HttpServlet {

	private static final long serialVersionUID = -4442798619872929620L;

	public void init(ServletConfig config) throws ServletException {

		ServerData serverData = ServerData.getServerData();
		Utente u1 = new Utente();
		Utente u2 = new Utente();
		Utente u3 = new Utente();
		Utente u0 = new Utente();

		u1.setUsername("ghigo");
		u1.setPassword("ghigo");
		u2.setUsername("vincio");
		u2.setPassword("vincio");
		u3.setUsername("edo");
		u3.setPassword("edo");
		u0.setUsername("admin");
		u0.setPassword("admin");

		serverData.getUtenti().add(u1);
		serverData.getUtenti().add(u2);
		serverData.getUtenti().add(u3);
		serverData.getUtenti().add(u0);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String type = request.getParameter("log");
		ServerData sd = ServerData.getServerData();
		HttpSession session = request.getSession();
		boolean flag = false;
		
		System.out.println("sono nella post, questi sono gli utenti registrati: " + sd.getUtenti().toString());

		if (type != null && !type.equals("") && type.equals("Registrazione")) {
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			System.out.println("registrazione nuovo utente: "+ username);

			if (!sd.creaUtente(username, password)) {
				String error = "gia_registrato";
				session.setAttribute("error", error);
				request.getRequestDispatcher("/pages/authError.jsp").forward(request, response);
			} else {
				Utente u = sd.getUtente(username);

				if (u == null) {
					String error = "errore_critico";
					session.setAttribute("error", error);
					request.getRequestDispatcher("/pages/authError.jsp").forward(request, response);
				} else {
					session.setAttribute("Loggato", true);
					session.setAttribute("utente", u);
					flag = true;
					sd.setOnLine(u);
				}
			}

		} else if (type != null && !type.equals("") && type.equals("Login")) {
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			System.out.println("login utente: "+ username);

			for (Utente u : sd.getUtenti()) {
				if (u.getUsername().equals(username) && u.getPassword().equals(password)) {
					session.setAttribute("Loggato", true);
					session.setAttribute("utente", u);
					flag = true;
					sd.setOnLine(u);
					break;
				}
			}
			if (!flag) {
				String error = "login_errato";
				session.setAttribute("error", error);
				request.getRequestDispatcher("/pages/authError.jsp").forward(request, response);
			}
		}
		
		if (flag) {
			request.getRequestDispatcher("/pages/welcome.jsp").forward(request, response);
		}
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doPost(request, response);
	}

}
