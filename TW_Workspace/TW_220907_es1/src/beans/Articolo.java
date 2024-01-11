package beans;

public class Articolo {

	private String nomeArticolo;
	private String contenuto;
	private Utente utenteAttivo;
	
	public Articolo() {
		this.contenuto="";
		this.utenteAttivo = null;
	}

	public String getNomeArticolo() {
		return nomeArticolo;
	}

	public void setNomeArticolo(String nomeArticolo) {
		this.nomeArticolo = nomeArticolo;
	}

	public String getContenuto() {
		return contenuto;
	}

	public void setContenuto(String contenuto) {
		this.contenuto = contenuto;
	}

	public Utente getUtenteAttivo() {
		return utenteAttivo;
	}

	public void setUtenteAttivo(Utente utenteAttivo) {
		this.utenteAttivo = utenteAttivo;
	}
	
	public void rimuoviUtenteAttivo() {
		this.utenteAttivo = null;
	}
}
