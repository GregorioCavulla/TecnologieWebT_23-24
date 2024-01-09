package beans;

public class Conteggio {

	private int occorrenze = 0;
	private boolean finito=false;
	

	public Conteggio() {
		super();
		this.occorrenze=0;
	}
	public int getOccorrenze() {
		return occorrenze;
	}

	public void setOccorrenze(int occorrenze) {
		this.occorrenze = occorrenze;
	}
	public boolean isFinito() {
		return finito;
	}
	public void setFinito(boolean finito) {
		this.finito = finito;
	}	
}
