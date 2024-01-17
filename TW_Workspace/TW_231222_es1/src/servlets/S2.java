package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/s2")
public class S2 extends HttpServlet {

	private static final long serialVersionUID = 1220055479147629535L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		HttpSession s = request.getSession();
		
		int[] numeri = (int[]) s.getAttribute("numeri");
		//1320
		System.out.println("seconda servlet: "+numeri.toString());
		int[] risultato = new int[numeri.length+numeri.length/3];
		
		for(int i=0; i<numeri.length-3; i+=3) {
			risultato[i]=numeri[i];
			risultato[i+1]=numeri[i+1];
			risultato[i+2]=numeri[i+2];
			risultato[i+3]=Math.round((numeri[i]+numeri[i+1]+numeri[i+2])/3);
		}
		
		s.setAttribute("numeri", risultato);
		s.setAttribute("secondoGiro", "ciao");
		response.sendRedirect("./s1");
		
	}
}
