
package it.unibo.tw.es1.servlets;

import java.io.IOException;
import java.util.Vector;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.unibo.tw.es1.beans.Articolo;
import it.unibo.tw.es1.beans.InsiemeDiArticoli;


public class StatisticheServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		String richiesta = req.getParameter("req");
		if(richiesta!=null&&richiesta.equals("calcola")) {
			
			InsiemeDiArticoli vendite = (InsiemeDiArticoli)this.getServletContext().getAttribute("merceVenduta");
			
			//prendo i parametri dalla richiesta
			Vector<Articolo> articoliVenduti = vendite.getMerce();
			String id = req.getParameter("id");
			int firstDay = Integer.parseInt(req.getParameter("firstDay"));
			int lastDay = Integer.parseInt(req.getParameter("lastDay"));
			
			//calcolo il guadagno
			float guadagno=0;
			
			for(int i=0;i<articoliVenduti.size();i++) {
				Articolo art = articoliVenduti.elementAt(i);
				if(id.equals("")||id.equals(art.getId())) {
					if(firstDay<=art.getDay()&&lastDay>=art.getDay()) {
						guadagno += art.getAmount()*art.getPrice();
					}
				}
			}
			
			//cookies
			Cookie ck1 = new Cookie("id",id);
			Cookie ck2 = new Cookie("firstDay",""+firstDay);
			Cookie ck3 = new Cookie("lastDay",""+lastDay);
			Cookie ck4 = new Cookie("guadagno",""+guadagno);
			ck1.setMaxAge(3600);
			ck2.setMaxAge(3600);
			ck3.setMaxAge(3600);
			ck4.setMaxAge(3600);
			resp.addCookie(ck1);
			resp.addCookie(ck2);
			resp.addCookie(ck3);
			resp.addCookie(ck4);
			
			//il risultato viene inserito nella richiesta che andra' passata alla jsp
			req.setAttribute("guadagnoRichiestaAttuale", guadagno);
			
			//Request dispatche per passare il controllo
			RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/statistiche.jsp");
			dispatcher.forward(req, resp);
			
		}
		
	}
	
}
