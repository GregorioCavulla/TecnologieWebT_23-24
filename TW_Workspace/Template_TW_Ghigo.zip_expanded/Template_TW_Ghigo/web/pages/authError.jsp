<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>AUTENTIFICAZIONE ERRORE SERVLET</title>
		<link type="text/css" href="styles/default.css" rel="stylesheet"></link>
	</head>
<body>
		
	<%	
		String type = (String)session.getAttribute("error");
		if(type.equals("gia_registrato")){
			session.invalidate();
			%>
			<h1>Utente già registrato!</h1>
			<a href="../Template_WithLogin/pages/home.html">Torna in home.</a>
			<%
		}
		else if(type.equals("login_errato")){
			session.invalidate();
			%>
			<h1>Username o Password errati!</h1>
			<a href="../Template_WithLogin/pages/home.html">Torna in home.</a>
			<%
		}
		else if(type.equals("errore_critico")){
			session.invalidate();
			%>
			<h1>Errore critico!</h1>
			<a href="../Template_WithLogin/pages/home.html">Torna in home.</a>
			<%
		}
	%>
</body>
