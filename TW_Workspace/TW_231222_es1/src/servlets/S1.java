package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import beans.JsonInput;

@WebServlet("/s1")
public class S1 extends HttpServlet {

	private static final long serialVersionUID = 1220055479147629535L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		HttpSession s = request.getSession();


		// Ottieni i parametri dalla richiesta
		String numeriJson = request.getParameter("jsonData");
		Gson gson = new Gson();
		JsonInput jsonInput = gson.fromJson(numeriJson, JsonInput.class);

		System.out.println("primo giro");
		int[] numeri = jsonInput.toArray();
		for (int i = 0; i < numeri.length; i++) {
			System.out.print(numeri[i]+" ");
		}

		int[] risultato = new int[numeri.length + (numeri.length / 2)];

		for (int i = 0; i < numeri.length - 2; i += 2) {
			risultato[i] = numeri[i];
			risultato[i + 1] = numeri[i + 1];
			risultato[i + 2] = Math.round((numeri[i] + numeri[i + 1]) / 2);
		}
		System.out.println("primo elab");
		for (int i = 0; i < risultato.length; i++) {
			System.out.print(risultato[i]+" ");
		}
		s.setAttribute("numeri", risultato);
		response.sendRedirect("./s2");

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		HttpSession s = request.getSession();

		int[] numeri = (int[]) s.getAttribute("numeri");
		String numeriString = "";

		for (int i = 0; i < numeri.length; i++) {
			numeriString += numeri[i];
			System.out.print(numeri[i]+" ");
		}
		s.setAttribute("numeriString", numeriString);
		response.sendRedirect("./pages/welcome.jsp");
	}
}
