package utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Random;

/**
 * Classe utility per la gestione dei file e delle operazioni correlate.
 */
public class FileUtility {

    private String contenutoFile;

    /**
     * Legge il contenuto da un file e lo memorizza nel campo contenutoFile.
     *
     * @param percorsoFile Il percorso del file da cui leggere il contenuto.
     */
    public void leggiDaFile(String nomeFile) {
        StringBuilder contenuto = new StringBuilder();
        System.out.println("nomeFile:"+nomeFile);
        String percorsoFile = "/home/ghigo/Scrivania/files/"+nomeFile;
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
    
    public void rimuoviOccorrenze(char lettera) {
    	char lM = Character.toUpperCase(lettera);
    	char lm = Character.toLowerCase(lettera);
        contenutoFile = contenutoFile.replace(String.valueOf(lM), "");
        contenutoFile = contenutoFile.replace(String.valueOf(lm), "");
    }
   
    /**
     * Conta le occorrenze di una parola in contenutoFile.
     *
     * @param parola La parola da cercare.
     * @return Il numero di occorrenze della parola.
     */
    public int contaOccorrenze(String parola) {
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
    public void cambiaCase() {
        StringBuilder risultato = new StringBuilder();

        for (char carattere : contenutoFile.toCharArray()) {
            if (Character.isUpperCase(carattere)) {
                risultato.append(Character.toLowerCase(carattere));
            } else if (Character.isLowerCase(carattere)) {
                risultato.append(Character.toUpperCase(carattere));
            } else {
                risultato.append(carattere);
            }
        }

        this.contenutoFile = risultato.toString();
    }

    /**
     * Imposta tutto il contenuto a maiuscolo.
     */
    public void impostaMaiuscolo() {
        contenutoFile = contenutoFile.toUpperCase();
    }
    
    public int contaMaiuscole() {
    	int count =0;
    	for(char c : contenutoFile.toCharArray()) {
    		if(Character.isUpperCase(c)) {
    			count ++;
    		}
    	}
    	return count;
    }

    /**
     * Imposta tutto il contenuto a minuscolo.
     */
    public void impostaMinuscolo() {
        contenutoFile = contenutoFile.toLowerCase();
    }
    
    public int contaMinuscole() {
    	int count =0;
    	for(char c : contenutoFile.toCharArray()) {
    		if(Character.isLowerCase(c)) {
    			count ++;
    		}
    	}
    	return count;
    }


    /**
     * Scarica il contenuto di un file da una URL e lo memorizza nel campo contenutoFile.
     *
     * @param fileUrl URL del file da scaricare.
     * @throws IOException Se si verificano errori durante il download del file.
     */
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

    /**
     * Restituisce il contenuto del file.
     *
     * @return Il contenuto del file.
     */
    public String getContenuto() {
        return this.contenutoFile;
    }
    
    public char letteraCasuale() {
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Random random = new Random();
        int randomIndex = random.nextInt(alphabet.length());
        return alphabet.charAt(randomIndex);
    }
}
