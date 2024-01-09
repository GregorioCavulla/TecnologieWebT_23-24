package utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

public class FileUtility {

    private String contenutoFile;

    /**
     * Legge il contenuto da un file e lo memorizza nel campo contenutoFile.
     *
     * @param percorsoFile Il percorso del file da cui leggere il contenuto.
     */
    public void leggiDaFile(String percorsoFile) {
        StringBuilder contenuto = new StringBuilder();

        try (BufferedReader reader = new BufferedReader(new FileReader(percorsoFile))) {
            String riga;
            while ((riga = reader.readLine()) != null) {
                contenuto.append(riga).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        contenutoFile = contenuto.toString();
    }

    /**
     * Imposta il contenuto da una stringa nel campo contenutoFile.
     *
     * @param contenutoStringa La stringa da impostare come contenuto.
     */
    public void leggiDaStringa(String contenutoStringa) {
        contenutoFile = contenutoStringa;
    }

    /**
     * Conta le occorrenze di una certa lettera in contenutoFile.
     *
     * @param lettera La lettera da cercare.
     * @return Il numero di occorrenze della lettera.
     */
    public int contaOccorrenze(char lettera) {
        int conteggio = 0;
        for (char carattere : contenutoFile.toCharArray()) {
            if (carattere == lettera) {
                conteggio++;
            }
        }
        return conteggio;
    }

    /**
     * Conta le occorrenze di una parola in contenutoFile.
     *
     * @param parola La parola da cercare.
     * @return Il numero di occorrenze della parola.
     */
    public int contaOccorrenzeParola(String parola) {
        int conteggio = 0;
        int lunghezzaParola = parola.length();
        int indice = 0;

        while ((indice = contenutoFile.indexOf(parola, indice)) != -1) {
            conteggio++;
            indice += lunghezzaParola;
        }

        return conteggio;
    }

    /**
     * Sostituisce le minuscole con le maiuscole e viceversa in contenutoFile.
     *
     * @return La stringa con il case invertito.
     */
    public String cambiaCase() {
        StringBuilder risultato = new StringBuilder();

        for (char carattere : contenutoFile.toCharArray()) {
            if (Character.isUpperCase(carattere)) {
            	System.out.println("CIAOciao");
                risultato.append(Character.toLowerCase(carattere));
            } else if (Character.isLowerCase(carattere)) {
            	System.out.println("ciaoCIAO");
                risultato.append(Character.toUpperCase(carattere));
            } else {
                risultato.append(carattere);
            }
        }

        return risultato.toString();
    }

    /**
     * Imposta tutto il contenuto a maiuscolo.
     */
    public void impostaMaiuscolo() {
        contenutoFile = contenutoFile.toUpperCase();
    }

    /**
     * Imposta tutto il contenuto a minuscolo.
     */
    public void impostaMinuscolo() {
        contenutoFile = contenutoFile.toLowerCase();
    }
    
    public void downloadFile(String fileUrl) throws IOException {
        StringBuilder content = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(new URL(fileUrl).openStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }
        }
        this.contenutoFile = content.toString();
    }
    
    public String getContenuto() {
    	return this.contenutoFile;
    }
}
