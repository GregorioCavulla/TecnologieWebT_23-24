package servlets;

import java.io.IOException;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

import javax.servlet.AsyncContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import beans.Utente;

@WebServlet(urlPatterns = "/longPolling", asyncSupported = true)
public class LongPollingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Queue<AsyncContext> contexts = new ConcurrentLinkedQueue<>();

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final AsyncContext asyncContext = request.startAsync(request, response);
		asyncContext.setTimeout(10 * 60 * 1000); // Timeout set to 10 minutes (adjust as needed)
		contexts.add(asyncContext);
		HttpSession session = request.getSession();
		Utente utente = (Utente)session.getAttribute("utente");
		sendMessage("Server: ciao " + utente.getUsername());
	}

	// Metodo per inviare un messaggio a tutti i client connessi
	public static void sendMessage(String message) {
		for (AsyncContext asyncContext : contexts) {
			try {
				asyncContext.getResponse().getWriter().write(message);
				asyncContext.complete();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
