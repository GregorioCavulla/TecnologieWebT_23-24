package servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.LiveUser;
import beans.User;

public class LogIn extends HttpServlet{
	
	
	private static final long serialVersionUID = 4037387543831396975L;


	@Override
	public void init(ServletConfig conf) throws ServletException
	{
		super.init(conf);
		
		Map<String,User> utentiRegistrati = new HashMap<String, User>();
		User u = new User();
		u.setUserName("bj");
		u.setPwd("bj");
		u.setGroupId("g01");
		
		utentiRegistrati.put(u.getUserName(), u);
		
		
		u = new User();
		u.setUserName("cecco");
		u.setPwd("cecco");
		u.setGroupId("g02");
		
		utentiRegistrati.put(u.getUserName(), u);
		
		u = new User();
		u.setUserName("caio");
		u.setPwd("caio");
		u.setGroupId("g02");
		
		utentiRegistrati.put(u.getUserName(), u);
		
		u = new User();
		u.setUserName("admin");
		u.setPwd("admin");
		u.setGroupId("g02");
		
		utentiRegistrati.put(u.getUserName(), u);
		this.getServletContext().setAttribute("utentiRegistrati", utentiRegistrati);
		
		
		LiveUser utenti = new LiveUser();
		this.getServletContext().setAttribute("live", utenti);
		
	}
	
	
	@SuppressWarnings({ "unused", "unchecked" })
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException
	{
		String name = request.getParameter("userName");
		Map<String,User> utentiRegistrati = (Map<String, User>) this.getServletContext().getAttribute("utentiRegistrati");
		User utente = utentiRegistrati.get(name);	
		
		System.out.println(utente.toString());
		
		if(utente == null){ // utente non registrato
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/index.jsp");	
			rd.forward(request, response);
			return;
		}		
		if(utente.getPwd().compareTo(request.getParameter("pwd"))!=0){ // pwd errata		
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/index.jsp");	
			rd.forward(request, response);
			return;
		} // altrimenti tutto OK, si procede
		
		if(utente.getPwd().compareTo("admin")==0){ // è un aministratore		
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/admin.jsp");	
			rd.forward(request, response);
			return;
		}
		
		LiveUser live = (LiveUser) this.getServletContext().getAttribute("live");
		live.addUtenti(utente);
		this.getServletContext().setAttribute("live", live);
		
		
		HttpSession session = request.getSession();
		utente.setSession(session);
		
		session.setAttribute("currentUser", utente);
		System.out.println(utente);
		
		response.sendRedirect("matrix.jsp");
	}
	
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
	{}
	

}
