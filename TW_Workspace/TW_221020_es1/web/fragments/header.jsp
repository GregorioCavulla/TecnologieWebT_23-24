<%@page import="beans.Tennista"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta name="author" content="Ghigo">
<title>header</title>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

<!-- custom stylesheet -->
<style>
#welcome-message {
	position: relative;
	text-align: left;
	float: left;
	margin-left: 20px;
	margin-bottom: 19px;
	margin-top: 18px;
}
</style>
<!-- Insert next updated stylesheets -->
<link rel="stylesheet" href="../styles/buttons.css"></link>
<link rel="stylesheet" href="../styles/default.css"></link>

</head>

<body onload="">
	<%
	p

		// Questo perch� nella ServletAuth:71 o :85 session.setAttribute("utente", u);
		Tennista utente = (Tennista) session.getAttribute("utente");
	%>
	<div id="welcome-message">
		<h1 style="color: #fff;">
			Welcome,
			<%=utente.getUsername()%>!<br />
		</h1>
	</div>
	<div id="logout-button">
		<button onclick="logout()" class="button log-button">Logout</button>
	</div>
	
	<script src="../scripts/Logout.js"></script>
    
</body>
</html>



