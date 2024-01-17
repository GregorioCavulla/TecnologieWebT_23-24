<%@page import="beans.Utente"%>
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
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<input type="text" id="00" name="00" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="01" name="01" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="02" name="02" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="03" name="03" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="04" name="04" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="05" name="05" size="1" value="" oninput="checkNumerici(this)">
		</br>
		<input type="text" id="10" name="10" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="11" name="11" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="12" name="12" size="1" value=""  oninput="checkNumerici(this)">
		<input type="text" id="13" name="13" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="14" name="14" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="15" name="15" size="1" value="" oninput="checkNumerici(this)">
		</br>
		<input type="text" id="20" name="20" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="21" name="21" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="22" name="22" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="23" name="23" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="24" name="24" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="25" name="25" size="1" value="" oninput="checkNumerici(this)">
		</br>
		<input type="text" id="30" name="30" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="31" name="31" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="32" name="32" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="33" name="33" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="34" name="34" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="35" name="35" size="1" value="" oninput="checkNumerici(this)">
		</br>
		<input type="text" id="40" name="40" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="41" name="41" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="42" name="42" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="43" name="43" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="44" name="44" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="45" name="45" size="1" value="" oninput="checkNumerici(this)">
		</br>
		<input type="text" id="50" name="50" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="51" name="51" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="52" name="52" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="53" name="53" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="54" name="54" size="1" value="" oninput="checkNumerici(this)">
		<input type="text" id="55" name="55" size="1" value="" oninput="checkNumerici(this)">
		</br>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>