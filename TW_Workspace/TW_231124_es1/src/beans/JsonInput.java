package beans;

import java.util.ArrayList;
import java.util.List;

public class JsonInput {

	private String stringaNumeri;
	private List<Double> numeri;

	public String getStringaNumeri() {
		return stringaNumeri;
	}

	public void setStringaNumeri(String stringaNumeri) {
		this.stringaNumeri = stringaNumeri;
	}

	public List<Double> getNumeri() {
		return numeri;
	}

	public void setNumeri(List<Double> numeri) {
		this.numeri = numeri;
	}

	public void makeArrayList() {
		// Verifica se la stringa dei numeri non è vuota o nulla
		if (stringaNumeri != null && !stringaNumeri.isEmpty()) {
			// Dividi la stringa in un array di stringhe utilizzando la virgola come
			// delimitatore
			String[] numeriArray = stringaNumeri.split("");

			// Crea la lista di interi
			List<Double> numeriList = new ArrayList<>();

			// Itera attraverso l'array di stringhe e converte ciascuna in un intero
			for (String numero : numeriArray) {
				try {
					numeriList.add((double) Integer.parseInt(numero.trim()));
				} catch (NumberFormatException e) {
					// Gestisci l'eccezione se la conversione non è riuscita
					System.out.println("Errore durante la conversione del numero: " + numero);
					e.printStackTrace();
					// Puoi aggiungere ulteriori log o azioni in base alle tue esigenze
				}
			}

			// Imposta la lista di numeri nella proprietà numeri
			setNumeri(numeriList);
		}
	}
}
