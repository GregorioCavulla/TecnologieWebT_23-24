package beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Rappresenta i dati del server, inclusa una lista di utenti.
 */
public class ServerData implements Serializable {

	private static final long serialVersionUID = 1936094822314768887L;

	private static ServerData s = new ServerData(); // Istanza condivisa della classe
	
	private List<Tennista> tennisti = new ArrayList<>(); // Lista degli utenti registrati

	private List<Tennista> primoQuarto = new ArrayList<>();
	private List<Tennista> secondoQuarto = new ArrayList<>();
	private List<Tennista> terzoQuarto = new ArrayList<>();
	private List<Tennista> quartoQuarto = new ArrayList<>();

	/**
	 * Restituisce un'istanza condivisa di ServerData (singleton).
	 *
	 * @return L'istanza condivisa di ServerData.
	 */
	public synchronized static ServerData getServerData() {
		return s;
	}

	public List<Tennista> getTennisti() {
		return tennisti;
	}
	
	public void setTennisti(List<Tennista> tennisti) {
		this.tennisti = tennisti;
	}
	
	public Tennista getTennista(String cognome) {
		return tennisti.stream().filter(u -> u.getCognome().equals(cognome)).findFirst().orElse(null);
	}
	
	public List<Tennista> getQuartoTennista(String cognome) {
		for(Tennista t : primoQuarto) {
			if(t.getCognome().equals(cognome)) {
				return primoQuarto;
			}
		}
		for(Tennista t : secondoQuarto) {
			if(t.getCognome().equals(cognome)) {
				return secondoQuarto;
			}
		}
		for(Tennista t : terzoQuarto) {
			if(t.getCognome().equals(cognome)) {
				return terzoQuarto;
			}
		}
		for(Tennista t : quartoQuarto) {
			if(t.getCognome().equals(cognome)) {
				return quartoQuarto;
			}
		}
		return tennisti;
	}

	public void popolaQuarti() {
		for(int i=0; i<128; i++) {
			Tennista t = new Tennista();
			t.setCognome("cognome"+i);
			t.setPartitePerse("ciao"+i);
			t.setPartiteVinte("ciao"+i);
			t.setRankingATP("ciao"+i);
			t.setTitoliVinti("ciao"+i);
			t.setId(i);
			tennisti.add(t);
			if(i<32) {
				primoQuarto.add(t);
			}else if(i>=32 && i<64) {
				secondoQuarto.add(t);
			}else if(i>=64 && i<96) {
				terzoQuarto.add(t);
			}else if(i>=96 && i<128) {
				quartoQuarto.add(t);
			}
		}
	}

	public List<Tennista> getPrimoQuarto() {
		return primoQuarto;
	}

	public void setPrimoQuarto(List<Tennista> primoQuarto) {
		this.primoQuarto = primoQuarto;
	}

	public List<Tennista> getSecondoQuarto() {
		return secondoQuarto;
	}

	public void setSecondoQuarto(List<Tennista> secondoQuarto) {
		this.secondoQuarto = secondoQuarto;
	}

	public List<Tennista> getTerzoQuarto() {
		return terzoQuarto;
	}

	public void setTerzoQuarto(List<Tennista> terzoQuarto) {
		this.terzoQuarto = terzoQuarto;
	}

	public List<Tennista> getQuartoQuarto() {
		return quartoQuarto;
	}

	public void setQuartoQuarto(List<Tennista> quartoQuarto) {
		this.quartoQuarto = quartoQuarto;
	}



	
}
