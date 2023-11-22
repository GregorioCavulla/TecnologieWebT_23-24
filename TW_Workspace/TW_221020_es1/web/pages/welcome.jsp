<%@page import="beans.Utente"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>
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
<body onload="getDrinks()">
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<%
		String tavolo = (String) session.getAttribute("tavolo");
		Utente utenteCheck = (Utente) session.getAttribute("utente");
		%>

		<%if(utenteCheck.getRole().equals("3")){
			%>
			<!-- render degli elementi utili all'admin -->
			<h1>amministratore</h1>
			<!-- tabella dei tavoli con i drink ordinati, tasto di chiusura forzata con logica simile a AjaxGetContoServlet -->
		<%}else if(utenteCheck.getRole().equals("2")){
			%>
			<!-- render degli elementi per il cameriere -->
			<h1>cameriere</h1>
			<!-- tabella dei tavoli con i drink ordinati, con tasto di switch dello stato per ognuno -->
		<%} else {%>

		<div id="data-info">
			<h3>Tavolo</h3>
			<h3 id="num-tavolo"><%=tavolo%></h3>
		</div>

		<button class="button" id="btn">Chiedi il conto</button>

		<div id="conto-info"></div>


		<script src="../scripts/AjaxGet.js"></script>

		<form class="login-form" action="../ordina" method="post">
			<label for="drink">Drink:</label> <input type="text" id="drink"
				name="drink" required>
			<button type="submit" name="action" value="Ordina" class="button">Ordina</button>
		</form>
	</div>
	<%}%>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->

</body>
</html>