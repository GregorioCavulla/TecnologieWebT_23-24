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
	if (request.getParameter("termina") != null) {
		serverData.removeLiveSession(serverData.getSessionById(request.getParameter("termina")));
	}
	%>
	<main>
		<table>
			<tr>
				<th>Sessione</th>
				<th>Termina</th>
			</tr>
			<%
			for (HttpSession s : serverData.getLiveSessions()) {
			%>
			<tr>

				<td><%=s.getId()%></td>
				<td>
					<form action="">
						<input type="submit" name="termina" value="<%=s.getId()%>" />
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