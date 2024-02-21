package beans;

import java.util.ArrayList;

public class LiveUser {
	
	private ArrayList<User> utenti;
	
	
	public LiveUser() {
		this.utenti = new ArrayList<>();
		
	}


	public ArrayList<User> getUtenti() {
		return utenti;
	}


	public void setUtenti(ArrayList<User> utenti) {
		this.utenti = utenti;
	}

	public void addUtenti(User utente) {
		this.utenti.add(utente);
	}
	
	public boolean contains(User utente) {
		for(User a : this.utenti){
			if (utente.getUserName().equals(a.getUserName()))
				return true;
		}
		return false;
	}
}
