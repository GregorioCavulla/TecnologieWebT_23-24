<%@page import="beans.*"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>
<%@ page import="utils.*"%>
<%@ page import="com.google.gson.Gson"%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta name="author" content="Ghigo">
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<title>Welcome Page</title>

<!-- Insert external js scripts -->
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

<!-- custom stylesheet -->
<link type="text/css" href="../styles/default.css" rel="stylesheet"></link>

<%
HttpSession s = request.getSession();
// Recupera i dati inviati dal modulo HTML
String json = (String) s.getAttribute("jsonData");
String contenuto = "";
int conteggio = 0;
System.out.println("dalla welcome:" + json);
if(json!=null){
Gson gson = new Gson();

JsonData jd = gson.fromJson(json, JsonData.class);
contenuto = jd.getContenuto();
conteggio = jd.getNumeroMaiuscole();
}

%>

</head>
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->	
	<div id="content">
		<form id="myForm" action="../s1" method="post">
		<label for="nomeFile">Inserisci nome file</label>
			<input type="text" id="nomeFile" name="nomeFile" onInput="checkSequenza(' ')"
				placeholder="inserisci nome file, termina con spazio..." required/>
			<input type="submit"/>
		</form>
	</div>
	<%if(json!=null){ %>
		<div>
			<label for="contenuto">conteunto:</label>
			<input type="text" id="contenuto" readonly value=<%= contenuto%>/>
			<label for="contenuto">numeo maiuscole:</label>
			<input type="text" id="contenuto" readonly value=<%= conteggio%>/>
		</div>
	<%} %>
	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>