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
public class S1 extends HttpServlet {

	private static final long serialVersionUID = 7859707350222212965L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		System.out.println("arrivata una richiesta!");
		String nomeFile = request.getParameter("nomeFile");
		String parola = request.getParameter("parola");
		ServerData serverData = ServerData.getServerData();
		try {
		serverData.addContaRichieste();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("sono gay");
		}
		System.out.println("nomeFile: " + nomeFile + " parola: " + parola);
		HttpSession session = request.getSession();

		FileUtility fu = new FileUtility();
		String percorsoFile = "/home/ghigo/Scrivania/files/" + nomeFile;

		System.out.println("percorso file: " + percorsoFile);
		fu.leggiDaFile(percorsoFile.trim());

		fu.impostaMaiuscolo();

		session.setAttribute("fu", fu);
		session.setAttribute("parola", parola);
		response.sendRedirect("./pages/J2.jsp");
	}
}
