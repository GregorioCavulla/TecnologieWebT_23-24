<%@page import="beans.Utente"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>
<%@ page import="com.google.gson.Gson"%>
<%@page import="beans.JsonInput"%>

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
		<h1>Inserisci una sequenza di numeri</h1>

		<input type="text" placeholder="termina con $$" id="textInput"
			oninput="checkSequenza('$$')" />
		<form id="myForm" action="./J1.jsp" method="post">
			<input type="hidden" id="jsonData" name="jsonData" value="">
		</form>

		<%
		String outputFinale = "ciao, manda i numeri";
		if ((boolean) session.getAttribute("final")) {
			String jsonData = (String) session.getAttribute("jsonData");
			Gson gson = new Gson();

			JsonInput jsonInput = gson.fromJson(jsonData, JsonInput.class);

			outputFinale = jsonInput.getStringaNumeri();
		}
		%>

		<div id="final enhancement">
			<textarea rows="" cols=""><%=outputFinale%></textarea>
		</div>

	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>