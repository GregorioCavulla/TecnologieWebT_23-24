<%@page import="com.fasterxml.jackson.databind.ObjectMapper"%>
<%@page import="beans.Utente"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Java Servlet JSON</title>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

<!-- custom stylesheet -->
<link href="styles/default.css" type="text/css" rel="stylesheet" />

<!-- custom scripts -->
<script src="./scripts/myfunctions.js"></script>


</head>
	<body onload="">
		<%
		//questo perchè nella ServletAuth:71 o :85 session.setAttribute("utente", u);
		Utente utente = (Utente) session.getAttribute("utente");
		%>
		<h1 style="text-align: center">
			Welcome,
			<%=utente.getUsername()%>!<br />
		</h1>
	
	
		<br />
		<a href="./pages/logout.jsp" style="text-align: right;">logout</a>
	
	</body>
</html>