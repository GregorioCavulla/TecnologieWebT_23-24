<%@page import="beans.Utente"%>
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
	margin-top: 20px;
	margin-bottom: 20px;
  }
  
  #logout-button{
	position: relative;
	float: right;
	margin-right: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
  }
</style>		
<!-- Insert next updated stylesheets -->		
<link rel="stylesheet" href="../styles/buttons.css"></link>

</head>

<body onload="">
  <%
  // Questo perché nella ServletAuth:71 o :85 session.setAttribute("utente", u);
  Utente utente = (Utente) session.getAttribute("utente");
  %>
  <div id="welcome-message">
    <h1>
      Welcome,
      <%=utente.getUsername()%>!<br />
    </h1>
  </div>
  <div id="logout-button">
    <a class="button log-button" href="./login.jsp">logout</a>
  </div>
</body>
</html>



