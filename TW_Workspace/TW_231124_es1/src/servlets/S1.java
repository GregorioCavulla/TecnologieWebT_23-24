package servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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

		System.out.println("Sono nella servlet S1");
		
		String jsonString =  request.getParameter("jsonData");
		System.out.println("la stringa in input è :" + jsonString);
		
		Gson gson = new Gson();
		JsonInput jsonInput = gson.fromJson(jsonString, JsonInput.class);

		List<Double> numeri = jsonInput.getNumeri();

		List<Double> outputList = new ArrayList<>();

		for (int i = 0; i < numeri.size(); i += 3) {

			int somma = 0;
			int conteggio = 0;

			for (int j = i; j < i + 3 && j < numeri.size(); j++) {
				somma += numeri.get(j);
				outputList.add(numeri.get(j));
				conteggio++;
			}

			double media = 0.0;
			if (conteggio > 0) {
				media = (double) somma / conteggio;
			}

			media = Math.round(media * 10.0) / 10.0;

			outputList.add(media);
		}
		
		jsonInput.setNumeri(outputList);
		jsonInput.setStringaNumeri(outputList.toString());
		
		HttpSession session = request.getSession();
		
		String jsonResponse = gson.toJson(jsonInput);

		session.setAttribute("jsonData", jsonResponse);
		session.setAttribute("final", true);
		
		response.sendRedirect("./pages/welcome.jsp");
	}
}
