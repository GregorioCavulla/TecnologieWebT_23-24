<%@page import="beans.Utente"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>

<%@page session="true"%>

<%@page import="utils.FileUtility"%>
<%@page import="beans.JsonData"%>
<%@page import="java.io.PrintWriter" %>
<%@page import="com.google.gson.Gson"%>
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



</head>
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<form class="login-form" action="../s1" method="post">
			<label for="nomeFile">Inserisci nomeFile:</label> <input type="text"
				id="nomeFile" name="nomeFile"
				placeholder="(solo caratteri alfanumerici)"
				onInput="checkAlfaNumerici()" required> <label
				for="charInput">Inserisci carattere da eliminare:</label>
				<input type="text"
				id="charInput" name="charInput"
				placeholder="(un carattere alfanumerico minuscolo)"
				onInput="submit()" required>
		</form>

		<%
		HttpSession s = request.getSession();
		if((boolean) s.getAttribute("finale")){
		String jsonText = (String) s.getAttribute("jsonData");
		Gson gson = new Gson();
        JsonData jsonData = gson.fromJson(jsonText, JsonData.class);
        String testo = jsonData.getTesto();
        int conteggio = jsonData.getConteggio();
		%>
		
		<div id="risultati">
			<p><%=testo %></p>
			<p><%=conteggio %></p>
		</div>
		<%} %>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>