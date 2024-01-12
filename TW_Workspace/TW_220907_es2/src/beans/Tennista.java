package beans;

import java.io.Serializable;

/**
 * Rappresenta un utente dell'applicazione.
 */
public class Tennista implements Serializable {

	private static final long serialVersionUID = -4284484858124618478L;

	private String cognome;
	private String rankingATP;
	private String titoliVinti;
	private String partiteVinte;
	private String partitePerse;
	private int id;
	
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getRankingATP() {
		return rankingATP;
	}
	public void setRankingATP(String rankingATP) {
		this.rankingATP = rankingATP;
	}
	public String getTitoliVinti() {
		return titoliVinti;
	}
	public void setTitoliVinti(String titoliVinti) {
		this.titoliVinti = titoliVinti;
	}
	public String getPartiteVinte() {
		return partiteVinte;
	}
	public void setPartiteVinte(String partiteVinte) {
		this.partiteVinte = partiteVinte;
	}
	public String getPartitePerse() {
		return partitePerse;
	}
	public void setPartitePerse(String partitePerse) {
		this.partitePerse = partitePerse;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	
}
