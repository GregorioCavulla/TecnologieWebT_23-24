<%@page errorPage="./error.jsp"%>

<%@page session="true"%>

<%@page import="beans.Utente"%>
<%@page import="beans.Gruppo"%>
<%@page import="beans.ServerData"%>


<!DOCTYPE html>
<html lang="it">

<head>
<meta charset="UTF-8">
<meta name="author" content="Ghigo">
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<title>BasicHtmlPage</title>
<link type="text/css" href="../styles/default.css" rel="stylesheet">
</head>

<!-- Insert external js scripts -->
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>

	<main>
		<table>
			<tr>
				<th>Group name</th>
				<th>Numero biglietti</th>
				<th>Forza Completamento</th>
				<th>Resetta Carrello</th>
			</tr>
			<%
			ServerData serverData = ServerData.getServerData();
			for (Gruppo g : serverData.getGruppi()) {
			%>
			<tr>

				<td><%=g.getName()%></td>
				<td><%=g.getTotaleBiglietti() %></td>
				<td>
					<form class="login-form" action="../acquisto" method="post">
						<input type="hidden" name="groupId" value="<%=g.getName()%>" />
						<button type="submit" name="action" value="Completa"
							class="button">Completa</button>
					</form>
				</td>
				<td>
					<form class="login-form" action="../acquisto" method="post">
						<input type="hidden" name="groupId" value="<%=g.getName()%>" />
						<button type="submit" name="action" value="Resetta" class="button">Resetta</button>
					</form>
				</td>
			</tr>
			<%
			}
			%>
		</table>

	</main>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>

	<!-- Insert external js scripts -->

</body>

</html>