package beans;

import java.io.Serializable;

/**
 * Rappresenta i dati del server, inclusa una lista di utenti.
 */
public class ServerData implements Serializable {

	private static final long serialVersionUID = 1936094822314768887L;

	private static ServerData s = new ServerData(); // Istanza condivisa della classe

	private int numeroDiDownloads;

	/**
	 * Restituisce un'istanza condivisa di ServerData (singleton).
	 *
	 * @return L'istanza condivisa di ServerData.
	 */
	public synchronized static ServerData getServerData() {
		return s;
	}

	public int getNumeroDiDownloads() {
		return numeroDiDownloads;
	}

	public void setNumeroDiDownloads(int numeroDiDownloads) {
		this.numeroDiDownloads = numeroDiDownloads;
	}

}
