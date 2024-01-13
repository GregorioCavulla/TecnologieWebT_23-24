<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*"%>
<%@ page import="javax.servlet.*,javax.servlet.http.*"%>
<%@ page import="beans.*"%>
<%@ page import="utils.*"%>
<%@ page import="com.google.gson.Gson" %>
<%
	HttpSession s = request.getSession();
    // Recupera i dati inviati dal modulo HTML
    String contenuto = (String) s.getAttribute("contenuto");

    System.out.println("dalla jsp:" + contenuto);
    FileUtility fu = new FileUtility();
    fu.leggiDaStringa(contenuto);
    
    fu.rimuoviOccorrenze(fu.letteraCasuale());
    
    int numeroMaiuscole = fu.contaMaiuscole();
    String contenutoElab = fu.getContenuto();
    
    JsonData jd = new JsonData();
    
    jd.setContenuto(contenutoElab);
    jd.setNumeroMaiuscole(numeroMaiuscole);
    
    Gson gson = new Gson();
    String json = gson.toJson(jd);
    System.out.println("JSON: " + json);
    
    s.setAttribute("jsonData", json);
    response.sendRedirect("./welcome.jsp");
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
