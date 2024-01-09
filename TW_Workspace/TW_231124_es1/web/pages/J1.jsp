<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*"%>
<%@ page import="javax.servlet.*,javax.servlet.http.*"%>
<%@ page import="com.google.gson.Gson"%>
<%@page import="beans.JsonInput"%>

<%
System.out.println("Sono nella servlet J1");

String jsonData = request.getParameter("jsonData");

// Converte il JSON in un oggetto Java utilizzando Gson
Gson gson = new Gson();

JsonInput jsonInput = gson.fromJson(jsonData, JsonInput.class);

jsonInput.makeArrayList();

List<Double> numeri = jsonInput.getNumeri();

List<Double> outputList = new ArrayList<>();

for (int i = 0; i < numeri.size(); i += 3) {

	int somma = 0;
	int conteggio = 0;

	for (int j = i; j < i + 3 && j < numeri.size(); j++) {
		somma += numeri.get(j);
		outputList.add(numeri.get(j));
		conteggio++;
	}

	double media = 0.0;
	if (conteggio > 0) {
		media = (double) somma / conteggio;
	}

	media = Math.round(media * 10.0) / 10.0;

	outputList.add(media);
}
// Imposta il messaggio come attributo della richiesta
request.setAttribute("message", outputList.toString());

jsonInput.setNumeri(outputList);
jsonInput.setStringaNumeri(outputList.toString());

String jsonString = gson.toJson(jsonInput);
System.out.println("JSON: " + jsonString);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP J1</title>
</head>
<body>
	<h2>Processed Data, first Stage</h2>
	<p><%=request.getAttribute("message")%></p>

	<input type="text" id="arrayInput" oninput="checkSequenza('$$')"
		value="<%=request.getAttribute("message")%>" />
	<form id="myForm" action="../s1" method="post">
		<input type="text" id="jsonData" name="jsonData" value='<%=jsonString%>'
			onmousemove="submit()" />
	</form>
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>
