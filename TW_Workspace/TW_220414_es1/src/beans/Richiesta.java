package beans;

import java.time.LocalDateTime;

public class Richiesta {

	private LocalDateTime time;
	public Richiesta() {
		time = LocalDateTime.now();
	}

	public LocalDateTime getNow() {
		return time;
	}

	public void setNow(LocalDateTime now) {
		this.time = now;
	}
	
	public boolean isOld() {
		LocalDateTime now = LocalDateTime.now();
		if(this.time.isBefore(now.minusHours(1))) {
			return true;
		}
		return false;
	}
	
}
