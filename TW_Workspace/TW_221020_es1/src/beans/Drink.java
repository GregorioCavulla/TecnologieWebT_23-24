package beans;

public class Drink {
	private String name;
	private Double cost;
	private Boolean stato;
	
	public Drink () {
		stato = false;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getCost() {
		return cost;
	}
	public void setCost(Double cost) {
		this.cost = cost;
	}
	public Boolean getStato() {
		return stato;
	}
	public void setStato(Boolean stato) {
		this.stato = stato;
	}
	public void switchStato() {
		this.stato=!stato;
	}
	
}
