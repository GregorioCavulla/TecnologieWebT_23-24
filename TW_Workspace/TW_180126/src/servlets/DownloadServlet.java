package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import beans.ServerData;

@WebServlet("/download")
public class DownloadServlet extends HttpServlet {

	private static final long serialVersionUID = 3254787795229193229L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

        ServerData serverData = ServerData.getServerData();
		String action = request.getParameter("action");		
		
        if("submitNumber".equals(action)) {
        	int numeroDiDownloads = Integer.parseInt(request.getParameter("numeroDiDownloads"));
        	System.out.println("numero di downloads: "+numeroDiDownloads);
        	serverData.setNumeroDiDownloads(numeroDiDownloads);
        }else if("submitUrl".equals(action)){
        	
        }
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
