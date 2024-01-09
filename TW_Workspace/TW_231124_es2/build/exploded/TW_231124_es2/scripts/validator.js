function login(){
    var dd = document.getElementById('log');
    var dd1 = document.getElementById('reg');
    var status = dd.style.display;
    if ( status == 'none' ) {
        dd.style.display = 'block';
        dd1.style.display = 'none';
    }
    else
        dd.style.display = 'none';
    
}
function registra(){
    var dd = document.getElementById('reg');
    var dd1 = document.getElementById('log');
    var status = dd.style.display;
    if ( status == 'none' ) {
        dd.style.display = 'block';
        dd1.style.display = 'none';
    }
    else
        dd.style.display = 'none';
}

function nonBlank(myField) {
	// Check for non-blank field
    	var result = true;
	if ( myField.value == "") {
		alert("Inserisci un valore valido per il campo " + myField);
		myField.focus();
		result = false;
	}
	return result;
}

function validEmail(myField) {
	// Check for "valid" email: not empty, has "@" sign and "."
	var result = false;
	if ( nonBlank(myField) ) {
		var tempstr = new String(myField.value);
		var aindex = tempstr.indexOf("@");
		if (aindex > 0 ) {
			var pindex = tempstr.indexOf(".",aindex);
		        if ( (pindex > aindex+1) && (tempstr.length > pindex+1) ) {
				result = true;
			} else {
				result = false;
			}
		}
	}
	if (!result) {
		alert("Inserisci una mail valida: yourname@yourdomain.com");
		myField.focus();
	}
	return result;
}