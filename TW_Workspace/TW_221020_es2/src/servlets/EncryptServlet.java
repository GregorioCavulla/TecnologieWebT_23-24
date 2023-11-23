package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/encrypt")
public class EncryptServlet extends HttpServlet {
	private static final long serialVersionUID = 3499534037264468965L;

	List<String> vowelArray = new ArrayList<String>();
	List<String> consonantArray = new ArrayList<String>();

	private static final int VOWEL_THREAD = 1;
	private static final int CONSONANT_THREAD = 2;

	private int firstThreadToFinish = 0;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("ciao sono nella servlet");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String word = request.getParameter("word");

		if (word != null && word.endsWith("%") && word.length() >= 5 && word.length() <= 20) {
			word = word.substring(0, word.length() - 1);
			System.out.println(word + "lenght: " + word.length());
			// Split the word into characters for encryption
			char[] characters = word.toCharArray();
			char[] copyVowels = Arrays.copyOf(characters, characters.length);
			char[] copyConsonants = Arrays.copyOf(characters, characters.length);

			// Create two threads for concurrent processing
			Thread vowelThread = new Thread(() -> processEncryption(out, copyVowels, "Vowel"));
			Thread consonantThread = new Thread(() -> processEncryption(out, copyConsonants, "Consonant"));

			// Start both threads
			consonantThread.start();
			vowelThread.start();

			// Wait for both threads to finish
			// Wait for any thread to finish
			try {
				vowelThread.join();
				firstThreadToFinish = VOWEL_THREAD;
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

			try {
				consonantThread.join();
				if (firstThreadToFinish == 0) {
					firstThreadToFinish = CONSONANT_THREAD;
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

			// Send the results of the first finishing thread to the client
			if (firstThreadToFinish == VOWEL_THREAD) {
				out.println("Vowel Array: " + vowelArray);
				out.println("Consonant Array: " + consonantArray);
				vowelArray.clear();
			} else if (firstThreadToFinish == CONSONANT_THREAD) {
				out.println("Consonant Array: " + consonantArray);
				out.println("Vowel Array: " + vowelArray);
				consonantArray.clear();
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
	}

	private void encryptVowelStart(PrintWriter out, char[] characters) {
		// Simple permutation for words starting with a vowel
		String permutation = encrypt(characters);
		int i = 0;
		for (int max = 50; max > 0 && i<5; max--) {
			for (i = 0; i < 5;) {
				System.out.println("Vowel Array: " + vowelArray);
				if (isVowel(permutation.charAt(0))) {
					vowelArray.add(permutation);
					i++;
				}
				permutation = encrypt(characters);
			}
		}
	}

	private void encryptConsonantStart(PrintWriter out, char[] characters) {
		// Simple permutation for words starting with a consonant
		String permutation = encrypt(characters);
		int i = 0;
		for (int max = 50; max > 0 && i<5; max--) {
			for (i = 0; i < 5;) {
				System.out.println("Consonant Array: " + consonantArray);
				if (!isVowel(permutation.charAt(0))) {
					consonantArray.add(permutation);
					i++;
				}
				permutation = encrypt(characters);
			}
		}
	}

	private boolean isVowel(char c) {
		// Simple check for vowels
		return "aeiouAEIOU".indexOf(c) != -1;
	}

	private String encrypt(char[] characters) {

		// Implement your encryption logic here
		for (int i = 0; i < characters.length - 1; i++) {
			// Scambia gli elementi correnti e successivi nella posizione 'i'
			char temp = characters[i];
			characters[i] = characters[i + 1];
			characters[i + 1] = temp;
		}
		return new String(characters);
	}
}
