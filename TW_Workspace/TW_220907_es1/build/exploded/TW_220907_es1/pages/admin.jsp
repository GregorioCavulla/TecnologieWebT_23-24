<%@page errorPage="./error.jsp"%>

<%@page session="true"%>

<%@page import="java.util.*"%>
<%@page import="beans.ServerData"%>
<%@page import="beans.Articolo"%>
<%@page import="beans.Utente"%>


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

	<%
	ServerData serverData = ServerData.getServerData();
	List<Articolo> attivi = new ArrayList<>();
	for (Articolo a : serverData.getArticoli()) {
		if (a.getUtenteAttivo() != null) {
			attivi.add(a);
			session.setAttribute("attivi", attivi);
		}
	}
	session.setAttribute("attivi", attivi);
	%>
	<main>
		<table>
			<tr>
				<th>Articolo</th>
				<th>Revoca permesso</th>
			</tr>
			<%
			for (Articolo a : attivi) {
				String nome = a.getNomeArticolo();
			%>
			<tr>
				<td><%=nome %></td>
				<td>
					<form class="login-form" id="myForm" action="../articolo"
						method="post">
						<input type="hidden" name="nomeArticolo" value="<%=nome%>" />
						<input type="submit" class="btn" name="action"
							value="Froza Revoca" />
					</form>
				</td>
			</tr>
			<%
			}
			%>
		</table>

	</main>


	<!-- Insert external js scripts -->

</body>

</html>