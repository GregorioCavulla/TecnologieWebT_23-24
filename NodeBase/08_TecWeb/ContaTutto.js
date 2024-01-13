//Conta Parole
const http = require("http");
const fs = require("fs");
const readline = require("readline");

const hostname = "127.0.0.1";
const port = 3000;

const percorsoFile = "myFile.txt";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); //impost il tiop di contenuto che voglio restituire al client;

  let html =
    "<!DOCTYPE html>" +
    "<html>" +
    " <head>" +
    ' <meta charset="utf-8" />' +
    " <title>Esercizio 1: conteggio numero di parole di un file </title>" +
    " </head>";

  let line_counter = 0;
  let word_counter = 0;
  let max_count = 0;
  let longest_line = "";

  const rl = readline.createInterface({
    input: fs.createReadStream(percorsoFile),
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", function (line) {
    line_counter++;
    let words = line.trim().split(" ");
    word_counter += words.length;

    if (words.length > max_count) {
      max_count = words.length;
      longest_line = line;
      rl.output.write("max count: " + max_count + " " + longest_line + "\n");
    }

    html +=
      '<label for="line' +
      line_counter +
      '">Numero di parole incontrate nella riga ' +
      line_counter +
      " : </label>" +
      '<input type="text" id="line' +
      line_counter +
      '" value="' +
      words.length +
      '" readonly> </br>';
  });

  rl.on("close", function () {
    html +=
      '<label for="lines">Numero di righe complessive incontrate nel file: </label>' +
      '<input type="text" id="lines" value="' +
      line_counter +
      '" readonly> </br>';
    html +=
      '<label for="words">Numero di righe complessive incontrate nel file: </label>' +
      '<input type="text" id="words" value="' +
      word_counter +
      '" readonly> </br>';
    html +=
      '<label for="longestLine">Numero di righe complessive incontrate nel file: </label>' +
      '<input type="text" id="longestLine" value="' +
      longest_line +
      '" readonly> </br>';
    res.write(html);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
