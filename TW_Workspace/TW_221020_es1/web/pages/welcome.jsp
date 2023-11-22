<%@page import="beans.Utente"%>
<%@page import="beans.ServerData"%>
<%@page import="beans.Tavolo"%>
<%@page import="beans.Drink"%>

<%@page import="java.util.*"%>
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
		ServerData serverData = ServerData.getServerData();
		List<Tavolo> tavoli = serverData.getTavoli();
		Utente utenteCheck = (Utente) session.getAttribute("utente");
		
		%>

		<%
		if (utenteCheck.getRole().equals("3")) {
		%>
		<!-- render degli elementi utili all'admin -->
		<h1>amministratore</h1>
		<button class="button" id="btn-chiusura" onClick="chiudiLocale()">Chiudi il locale</button>
		<%
		for (Tavolo t : tavoli) {
		%>
		<tr>
			<th><%=t.getNome()%></th>
		</tr>
		<tr>
			<td>
				<p>
					conto totale:
					<%=t.getCostoTavolo()%></p>
			</td>
		</tr>
		<tr>
			<td>
				<ul style="list-style-type: none; padding: 0;" class="hidden">
					<%
					for (Drink d : t.getDrinks()) {
						if (d.getStato()) {
					%>
					<li><%=d.getName()%>, <%=d.getCost()%></li>
					<%
						}
					}
					%>
				</ul>
			</td>
		</tr>
		<%
		}
		%>
		<!-- tabella dei tavoli con i drink ordinati, tasto di chiusura forzata con logica simile a AjaxGetContoServlet -->
		<%
		} else if (utenteCheck.getRole().equals("2")) {
		%>
		<!-- render degli elementi per il cameriere -->
		<h1>cameriere</h1>
		<!-- tabella dei tavoli con i drink ordinati, con tasto di switch dello stato per ognuno -->
		<%} else if(!serverData.isChiuso()) {%>

		<div id="data-info">
			<h3>Tavolo</h3>
			<h3 id="num-tavolo"><%=tavolo%></h3>
		</div>

		<button class="button" id="btn">Chiedi il conto</button>

		<div id="conto-info"></div>


		

		<form class="login-form" action="../ordina" method="post">
			<label for="drink">Drink:</label> <input type="text" id="drink"
				name="drink" required>
			<button type="submit" name="action" value="Ordina" class="button">Ordina</button>
		</form>
	</div>
	<script src="../scripts/AjaxGet.js"></script>
	<%} else {%>
		<h1>Mi dispiace, il locale è chiuso</h1>
	<%} %>
	
	<script src="../scripts/ChiudiLocale.js"></script>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->

</body>
</html>