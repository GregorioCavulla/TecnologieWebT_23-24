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
<link type="text/css" href="../styles/default.css" rel="stylesheet"></link>
<style>
  /* Stile per il messaggio di benvenuto */
  #welcome-message {
    text-align: left;
    float: left;
    margin-left: 20px;
  }

	/* Stile per il tasto di logout */
    #logout-button {
    text-align: right;
    float: right;
    margin-right: 20px;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 auto; /* Aggiunto per centrare il pulsante */
    display: block; /* Aggiunto per centrare il pulsante */
    }

	#logout-button[type="submit"]:hover {
    background-color: #0056b3;
	}
	
	#log-ref{
		color: #fff;
		}
</style>

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
    <a id="log-ref" href="./login.html">logout</a>
  </div>
</body>
</html>



