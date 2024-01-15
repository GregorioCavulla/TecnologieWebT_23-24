<%@page errorPage="./error.jsp"%>

<%@page session="true"%>

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

	<%
	ServerData serverData = ServerData.getServerData();
	int contaAmministratore = serverData.getContaAmministratore();
	int contaRichieste = serverData.getRichieste().size();
	%>

	<main>
		<table>

			<tr>
				<td>richieste admin</td>
				<td><%=contaAmministratore%></td>
			</tr>
			<tr>
				<td>richieste Utenti</td>
				<td><%=contaRichieste%></td>
			</tr>
		</table>

	</main>


	<!-- Insert external js scripts -->

</body>

</html>