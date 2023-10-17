package beans;

import java.io.Serializable;

public class Utente implements Serializable{

	private static final long serialVersionUID = -3003346784392538226L;

	private String username;
	private String password;
	//add whatever could be useful for the application
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}	
	
}
