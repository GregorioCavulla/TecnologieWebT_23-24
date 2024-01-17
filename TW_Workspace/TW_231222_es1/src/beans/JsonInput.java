package beans;

public class JsonInput {

	private String numeri;

	public String getNumeriString() {
		return numeri;
	}

	public void setNumeriString(String numeriString) {
		this.numeri = numeriString;
	}

	public int[] toArray() {
		String[] stringArray = this.numeri.replace("&", "").split("");
		int[] intArray = new int[stringArray.length];
		for (int i = 0; i < stringArray.length; i++) {
			intArray[i] = Integer.parseInt(stringArray[i]);
		}
		System.out.println("intArray: ");

		return intArray;
	}

}
