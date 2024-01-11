<%@page import="beans.Articolo"%>
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
	<%
	// Questo perché nella ServletAuth:71 o :85 session.setAttribute("utente", u);
	HttpSession s = request.getSession();
	Articolo articolo = (Articolo) s.getAttribute("articolo");
	String nome = articolo.getNomeArticolo();
	String contenuto = articolo.getContenuto();
	String permesso = (String) s.getAttribute("permesso");
	
	%>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<h1 style="color: #444;">
			<%=nome%><br />
		</h1>
		<form class="login-form" id="myForm" action="../articolo"
			method="post">
			<textarea <%=permesso%> name="contenuto"><%=contenuto%></textarea>
			<input type="hidden" name="nomeArticolo" value="<%=nome%>" />
			<%if(permesso.equals("readonly")){ %>
			<input type="submit" class="btn" name="action" value="Richiedi Permesso" />
			<%}else if(permesso.equals("")){ %>
			<input type="submit" class="btn" name="action" value="Revoca Permesso" />
			<%} %>
		</form>

	</div>
	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>