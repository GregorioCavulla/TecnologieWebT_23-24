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
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<form class="login-form" action="../acquisto" method="post">
			<label for="numeroBiglietti">Inserisci numero biglietti:</label> <input
				type="number" id="numeroBiglietti" name="numeroBiglietti">
			<button type="submit" name="action" value="Aggiungi" class="button">Aggiungi
				al carrello</button>
			<button type="submit" name="action" value="Conferma" class="button">Conferma
				acquisto</button>
		</form>
	</div>

	<div id="carrello-container">
		<h2>Carrello</h2>
		<c:if test="${param.carrello eq 'true'}">
			<p>${sessionScope.carrello}</p>
		</c:if>
	</div>

	<div id="error-container">
		<h2>Attenzione</h2>
		<c:if test="${param.error eq 'true'}">
			<p>${sessionScope.error}</p>
		</c:if>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->

</body>
</html>