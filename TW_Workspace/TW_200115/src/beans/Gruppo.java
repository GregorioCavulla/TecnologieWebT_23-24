package beans;

import java.util.ArrayList;
import java.util.List;

public class Gruppo {

	private List<Utente> utenti = new ArrayList<Utente>();
	private String name;
	private boolean changePassword;
	private int changesLeft;

	public List<Utente> getUtenti() {
		return utenti;
	}

	public void setUtenti(List<Utente> utenti) {
		this.utenti = utenti;
	}

	public Utente getUtente(String utente) throws Exception {
		for (Utente u : utenti) {
			if (u.getUsername().equals(utente)) {
				return u;
			} else {
				throw new Exception("utente " + utente + "not in group");
			}
		}
		return null;
	}

	public void addUtente(Utente utente) {
		this.utenti.add(utente);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public boolean arePasswordOld() {
		int flag = 0;
		for(Utente u : utenti) {
			if(u.isPasswordOld()) {
				flag+=1;
			}
		}
		if(flag>2) {
			this.changePassword=true;
		}else if(flag==0){
			this.changePassword=false;
		}
		return this.changePassword;
	}
	
	public boolean isChangePassword() {
		return changePassword;
	}

	public void setChangePassword(boolean changePassword) {
		this.changePassword = changePassword;
	}

	public int getChangesLeft() {
		return changesLeft;
	}

	public void setChangesLeft(int changesLeft) {
		this.changesLeft = changesLeft;
	}
}
