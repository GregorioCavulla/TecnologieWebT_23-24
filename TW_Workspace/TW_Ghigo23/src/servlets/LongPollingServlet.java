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

    /**
     * Gestisce le richieste GET per la tecnica di long polling. Inizializza un
     * AsyncContext per ogni richiesta in arrivo e lo aggiunge alla coda dei
     * contesti.
     *
     * @param request  L'oggetto HttpServletRequest che rappresenta la richiesta
     *                 HTTP in arrivo.
     * @param response L'oggetto HttpServletResponse che rappresenta la risposta
     *                 HTTP da restituire al client.
     * @throws ServletException Se si verifica un errore nella gestione della
     *                          richiesta.
     * @throws IOException      Se si verifica un errore di input/output durante la
     *                          gestione della richiesta.
     */
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

    /**
     * Invia un messaggio al client attraverso l'AsyncContext fornito. Se la
     * risposta non è stata ancora commessa, scrive il messaggio sulla risposta e
     * completa l'AsyncContext.
     *
     * @param message      Il messaggio da inviare al client.
     * @param asyncContext L'AsyncContext associato alla richiesta del client.
     */
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
