package it.unibo.tw.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.tecnologieweb.app.HelloWorld;

public class HelloWorldServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
    	
    	// some delay... (as it usually happens in complex Web apps)
    	try {
			Thread.sleep(2000);
		}
    	catch (InterruptedException e) {
			e.printStackTrace();
		}
    	
		// retrieve former values, if any
    	String name = request.getParameter("name");
    	if ( name == null ) name = "utente anonimo";

    	PrintWriter out = response.getWriter();

        out.println("<html>");
        
	        out.println("<head>");
	
            // title
		    out.println("<title>Hello Wolrd Servlet</title>");
	
		    // style
		    out.println("<link rel=\"stylesheet\" href=\"styles/default.css\" type=\"text/css\"></link>");
	
		    out.println("</head>");
	
		    out.println("<body>");

	        out.println("This is the servlet output.<br/><br/>");
	        
	    	/*
	    	 * Requests are served by invoking library functions
	    	 * and returning html-wrapped results 
	    	 */
	        HelloWorld hw = new HelloWorld();
	        hw.setName(name);
	        String output = hw.sayIt();
	        out.println("<i>"+ output + "</i>");

	        out.println("<br/>");
	        out.println("<br/>");
	        out.println("<hr/>");
	        out.println("<br/>");
	        out.println("<form method=\"post\"><input type=\"submit\" name=\"post\" value=\"Reach me via an HTTP POST REQUEST\"/></form>");
		        
	        out.println("</body>");
	        
        out.println("</html>");

    }
    
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		throw new ServletException("This servlet can only be reached via an HTTP GET REQUEST");
    }

}
