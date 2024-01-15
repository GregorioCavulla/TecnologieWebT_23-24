package beans;

import java.util.ArrayList;
import java.util.List;

public class QuadratoMagico {
	
	private List<Integer> matrice = new ArrayList<Integer>();

	public List<Integer> getMatrice() {
		return matrice;
	}

	public void setMatrice(List<Integer> matrice) {
		this.matrice = matrice;
	}
	
	public boolean addElemento(String id, int val) {
		int idInt = Integer.parseInt(id);
		List<Integer> tempMatrice = new ArrayList<Integer>();
		for(int i=0; i>10; i++) {
			tempMatrice.add(i);
		}
		for(Integer i : tempMatrice) {
			if(matrice.get(idInt)==i) {
				//c'è gia
				return false;
			}
		}
		matrice.add(idInt,val);
		return true;
	}

}
