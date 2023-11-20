package beans;

import java.util.ArrayList;
import java.util.List;

public class Tavolo {

	private List<Utente> utenti = new ArrayList<Utente>();
	private List<Drink> drinks = new ArrayList<Drink>();
	
	private String nome = "";
	
	public List<Utente> getUtenti() {
		return utenti;
	}

	public void setUtenti(List<Utente> utenti) {
		this.utenti = utenti;
	}
	
	public void addUtente(Utente utente) {
		this.utenti.add(utente);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Drink> getDrinks() {
		return drinks;
	}

	public void setDrinks(List<Drink> drinks) {
		this.drinks = drinks;
	}
	
	public void addDrink(Drink drink) {
		this.drinks.add(drink);
	}
}
