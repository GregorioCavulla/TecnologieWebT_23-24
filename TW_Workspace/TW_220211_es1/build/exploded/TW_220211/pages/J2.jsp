<%@page errorPage="./error.jsp"%>

<%@page session="true"%>

<%@page import="utils.FileUtility"%>
<%@page import="beans.JsonData"%>
<%@page import="java.io.PrintWriter" %>
<%@page import="com.google.gson.Gson"%>

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
	HttpSession s = request.getSession();
	String testo = (String) s.getAttribute("fileTextS1");
	FileUtility fu = new FileUtility();
	fu.leggiDaStringa(testo);
	int conteggio = fu.contaMaiuscole();
	%>
	<main>
		<input type="hidden" id="testo" name="testo" value="<%=testo%>">
		<input type="hidden" id="conteggio" name="conteggio"
			value="<%=conteggio%>">
	</main>
	<%
	Gson gson = new Gson();
	String json = gson.toJson(JsonData.class);
	System.out.println("JSON: " + json);

	// Impostare il tipo di contenuto nella risposta come JSON
	response.setContentType("application/json");
	session.setAttribute("jsonData", json);
	session.setAttribute("finale",true);
	// Scrivere il JSON come risposta
	response.sendRedirect("./pages/welcome.jsp");
	%>

	<!-- Insert external js scripts -->
</body>

</html>