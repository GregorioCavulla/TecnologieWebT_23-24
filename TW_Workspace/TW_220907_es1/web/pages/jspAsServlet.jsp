<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*"%>
<%@ page import="javax.servlet.*,javax.servlet.http.*"%>

<%
    // Recupera i dati inviati dal modulo HTML
    String userName = request.getParameter("userName");

    // Elabora i dati (in questo caso, semplicemente restituisci il nome)
    String message = "Hello, " + userName + "!";

    // Imposta il messaggio come attributo della richiesta
    request.setAttribute("message", message);
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Processed Data</title>
</head>
<body>
    <h2>Processed Data</h2>
    <p><%= request.getAttribute("message") %></p>
</body>
</html>
