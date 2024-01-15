<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*"%>
<%@ page import="javax.servlet.*,javax.servlet.http.*"%>
<%@ page import = "utils.*" %>
<%@ page import = "beans.JsonData" %>
<%@ page import = "com.google.gson.Gson" %>

<%
	HttpSession s = request.getSession();
	FileUtility fu = (FileUtility) s.getAttribute("fu");
	String parola = (String) s.getAttribute("parola");
	
	int occorrenze = fu.contaOccorrenze(parola.toUpperCase());
	String testo = fu.getContenuto();
	JsonData jd = new JsonData();
	
	jd.setConteggio(occorrenze);
	jd.setTesto(testo);
	
	System.out.println("testo: "+testo+"parola: "+parola);
	
	Gson gson = new Gson();
	String jsonString = gson.toJson(jd);
	
	s.setAttribute("jsonString", jsonString);

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
