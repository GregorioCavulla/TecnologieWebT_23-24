package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import utils.FileUtility;

@WebServlet("/s1")
public class S1 extends HttpServlet{

	private static final long serialVersionUID = 5228344992288348012L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String nomeFile = request.getParameter("nomeFile");
		String carattere = request.getParameter("charInput");
		HttpSession session = request.getSession();
		
		FileUtility fu = new FileUtility();
		
		String percorso = "./"+nomeFile;
		
		fu.leggiDaFile(percorso);
		
		fu.rimuoviCarattere(carattere);
		
		session.setAttribute("fileTextS1", fu.getContenuto());
		response.sendRedirect("./pages/J2.jsp");
	}
}
