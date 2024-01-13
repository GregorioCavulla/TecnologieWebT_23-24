package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.ServerData;
import utils.FileUtility;

@WebServlet("/s1")
public class S1 extends HttpServlet{
	
	private static final long serialVersionUID = 5228344992288348012L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ServerData serverData = ServerData.getServerData();
		
		String nomeFile = request.getParameter("nomeFile");
		System.out.println("nomeFile"+nomeFile);
		HttpSession session = request.getSession();
		
		serverData.addLiveSession(session);
		
		FileUtility fu = new FileUtility();
		
		fu.leggiDaFile(nomeFile);
		System.out.println("contenuto file: "+fu.getContenuto());
		
		fu.rimuoviOccorrenze(fu.letteraCasuale());
		
		String contenutoElab = fu.getContenuto();
		
		session.setAttribute("contenuto", contenutoElab);
		
		response.sendRedirect("./pages/J2.jsp");	
	}
}
