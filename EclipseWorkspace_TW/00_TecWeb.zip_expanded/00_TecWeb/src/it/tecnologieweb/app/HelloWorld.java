package it.tecnologieweb.app;

public class HelloWorld {

	public static final String GREETING = "Hello World, ";
	
	private String name;

	public HelloWorld() {
	}

	public HelloWorld(String nome) {
		this.name = nome;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String sayIt() {
		return GREETING + name;
	}
}
