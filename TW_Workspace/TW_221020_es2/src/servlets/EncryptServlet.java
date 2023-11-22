package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/encrypt")
public class EncryptServlet extends HttpServlet {
	private static final long serialVersionUID = 3499534037264468965L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String word = request.getParameter("word");
        System.out.println(word);
        if (word != null && word.endsWith("%") && word.length() >= 5 && word.length() <= 20) {
            // Split the word into characters for encryption
            char[] characters = word.toCharArray();

            // Create two threads for concurrent processing
            Thread vowelThread = new Thread(() -> processEncryption(out, characters, "Vowel"));
            Thread consonantThread = new Thread(() -> processEncryption(out, characters, "Consonant"));

            // Start both threads
            vowelThread.start();
            consonantThread.start();

            // Wait for both threads to finish
            try {
                vowelThread.join();
                consonantThread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        } else {
            out.println("Invalid input");
        }
    }

    // Simulate encryption logic (permutation)
    private void processEncryption(PrintWriter out, char[] characters, String type) {
        // Implement your encryption logic here
    	 if (type.equals("Vowel")) {
    	        encryptVowelStart(out, characters);
    	    } else if (type.equals("Consonant")) {
    	        encryptConsonantStart(out, characters);
    	    } else {
    	        out.println("Invalid encryption type");
    	    }

        // Send encrypted strings to the client
        for (int i = 1; i <= 5; i++) {
            out.println(type + " Encrypted String " + i + ": " + encrypt(characters, i) + "<br>");
        }
    }

    private void encryptVowelStart(PrintWriter out, char[] characters) {
        // Simple permutation for words starting with a vowel
        char firstChar = characters[0];
        if (isVowel(firstChar)) {
            for (int i = 1; i <= 5; i++) {
                out.println("Vowel Encrypted String " + i + ": " + encrypt(characters, i) + "<br>");
            }
        } else {
            out.println("Invalid encryption type");
        }
    }

    private void encryptConsonantStart(PrintWriter out, char[] characters) {
        // Simple permutation for words starting with a consonant
        char firstChar = characters[0];
        if (!isVowel(firstChar)) {
            for (int i = 1; i <= 5; i++) {
                out.println("Consonant Encrypted String " + i + ": " + encrypt(characters, i) + "<br>");
            }
        } else {
            out.println("Invalid encryption type");
        }
    }

    private boolean isVowel(char c) {
        // Simple check for vowels
        return "aeiouAEIOU".indexOf(c) != -1;
    }

    private String encrypt(char[] characters, int iteration) {
        // Implement your encryption logic here
        // This is a simplified example
        return new String(characters) + iteration;
    }
}
