//Conta Parole
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const percorsoFile = "";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); //impost il tiop di contenuto che voglio restituire al client;

  let html =
    "<!DOCTYPE html>" +
    "<html>" +
    " <head>" +
    ' <meta charset="utf-8" />' +
    " <title>Esercizio 1: conteggio numero di parole di un file </title>" +
    " </head>" +
    " <body>";

  fs.readFile(percorsoFile, function (error, dataBuffer) {
    if (error) {
      console.log("Errore nella lettura del file");
    } else {
      console.log(percorsoFile + " contents:", dataBuffer.toString());
      let lines = dataBuffer.toString().split("\n");
      let word_counter = 0;
      lines.forEach((x) => {
        let words = x.split(" ");
        for (var i in words) {
          if (words[i].length > 0) {
            word_counter += 1;
          }
        }
      });
      console.log("Ho contato...." + word_counter + " parole");
      html +=
        '<label for="html">Numero di parole incontrate nel file: </label>' +
        '<input type="text" id="html" value="' +
        word_counter +
        '" readonly>';
    }
    html += " </body>" + "</html>";
    res.write(html);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
