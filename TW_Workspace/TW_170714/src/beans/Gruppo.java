package beans;

import java.util.ArrayList;
import java.util.List;

public class Gruppo {
	
	private List<Utente> utenti = new ArrayList<Utente>();
	private String name;
	private int totaleBiglietti;
	private int bigliettiConfermati;
	private boolean ordineCompleto;

	public boolean isOrdineCompleto() {
		return ordineCompleto;
	}

	public void setOrdineCompleto(boolean ordineCompleto) {
		this.ordineCompleto = ordineCompleto;
	}

	public List<Utente> getUtenti() {
		return utenti;
	}

	public void setUtenti(List<Utente> utenti) {
		this.utenti = utenti;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getTotaleBiglietti() {
		return totaleBiglietti;
	}

	public void setTotaleBiglietti(int totaleBiglietti) {
		this.totaleBiglietti = totaleBiglietti;
	}
	
	public void addBiglietti(int biglietti) {
		this.totaleBiglietti+=biglietti;
	}

	public int getBigliettiConfermati() {
		return bigliettiConfermati;
	}

	public void setBigliettiConfermati(int bigliettiConfermati) {
		this.bigliettiConfermati = bigliettiConfermati;
	}
	
	public void addBigliettiConfermati(int bigliettiConfermati) {
		this.bigliettiConfermati+=bigliettiConfermati;
	}
	
	public void checkOrdineCompleto() {
		boolean flag = false;
		int i=0;
		for(Utente u : utenti) {
			
			System.out.println("sto checkando: "+u.getUsername()+" ha comprato:"+u.getBigliettiAcquistati()+" biglietti");
			if(u.getBigliettiAcquistati()>0) {
				i++;
				System.out.println("dentro l'if cosa succede? i vale: "+i);
			}
			System.out.println("i vale: "+i+" size di utenti: "+utenti.size());
			if(i==utenti.size()) {
				flag=true;
			}
		}
		if(totaleBiglietti<bigliettiConfermati&&flag) {
			System.out.println("successo! tutti gli utenti hanno confermato");
			this.setOrdineCompleto(true);
		}else {
			System.out.println("porca miseria! manca qualche utente!");
			this.setOrdineCompleto(false);
		}
	}
}
