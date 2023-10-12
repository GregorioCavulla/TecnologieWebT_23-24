package it.tecnologieweb.app;

public class Main {

	// creare un oggetto helloworld e assegnare il primo argomento in input alla sua proprieta' nome
	// stampare su console la frase che restituisce
	
	public static void main(String[] args) throws Exception {

		HelloWorld ciao = new HelloWorld();
		if(args.length==1) {
			ciao.setName(args[0]);
		}else {
			throw new Exception("input error");
		}
		String out = ciao.sayIt();
		System.out.println(out);
	}
}
