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

@WebServlet(urlPatterns = "/longPolling", asyncSupported = true)
public class LongPollingServlet extends HttpServlet {
    // ... altri metodi e variabili ...

    private static final long serialVersionUID = -7662367006984855119L;
    private static final Queue<AsyncContext> contexts = new ConcurrentLinkedQueue<>();

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        final AsyncContext asyncContext = request.startAsync(request, response);
        asyncContext.setTimeout(10 * 60 * 1000);
        contexts.add(asyncContext);

        // Ottieni il messaggio inviato dal client
        String clientMessage = request.getParameter("message");

        if (clientMessage != null && !clientMessage.isEmpty()) {
            // Esempio: se il client invia un messaggio, rispondi con "bella"
            sendMessage("bella", asyncContext);
        }
    }

    public static void sendMessage(String message, AsyncContext asyncContext) {
        try {
            if (!asyncContext.getResponse().isCommitted()) {
                asyncContext.getResponse().getWriter().write(message);
                asyncContext.complete();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
