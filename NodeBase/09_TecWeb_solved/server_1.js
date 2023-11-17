//node js conta parole da file

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  let html = '<!DOCTYPE html>'+
    '<html>'+
    ' <head>'+
    ' <meta charset="utf-8" />'+
    ' <title>Esercizio 1: conteggio numero di parole di un file </title>'+
    ' </head>'+
    ' <body>';
  html+=' </body>'+
      '</html>';

  
  fs.readFile("myFile.txt", function(error, dataBuffer){
	// convenzione Node per callback: primo argomento è oggetto
	// js di errore
  
	  if (error) {
		console.log("errore nella lettura del File!!");	
	  } else {
    	 	console.log("myFile.txt contents", dataBuffer.toString());
	        let lines = dataBuffer.toString().split("\n");
                lines.forEach ( (x,index) => {lines[index] = lines[index].trim();} );
		//lines.forEach ( (x) => {console.log(x+"....\n");} );
		let word_counter = 0;
		lines.forEach( x => { 
				let words = x.split(" ");  
				for (var i in words){
					words[i].length > 0 && (word_counter += 1);
				}
		});

		console.log("Ho contato...."+word_counter+" parole");
  		html += '<label for="html">Numero di parole incontrate nel file: </label>'+
			'<input type="text" id="html" value="'+word_counter+'" readonly>';
	  }
  
	html+=' </body>'+
	       '</html>';

	res.write(html);
	res.end();

  }); 

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
