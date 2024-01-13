//Conta Parole
const http = require("http");
const fs = require("fs");
const readline = require("readline");
const url = require("url");
const querystring = require("querystring");

const hostname = "127.0.0.1";
const port = 3000;

const percorsoFile = "myFile.txt";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); //impost il tiop di contenuto che voglio restituire al client;

  //https://www.example.com:8080/path/document.html?param1=value1&param2=value2#section1

  const parametri = querystring.parse(url.parse(req.url).query);

  const whichPage = url.parse(req.url).pathname;
  const percorsoFile = whichPage.substr(1, whichPage.length);

  const parola = parametri["parola"];

  let sentence = "";
  let toRead = false;

  if (!percorsoFile) {
    sentence = "please provide file by url";
    toRead = false;
  } else if (
    percorsoFile != "myFile.txt" &&
    percorsoFile != "MyFile2.txt" &&
    percorsoFile != "Sympathy_for_the_Devil.txt" &&
    percorsoFile != "The_Sound_of_Silence.txt"
  ) {
    sentence = "non è stato trovato nessun file con il nome " + percorsoFile;
    toRead = false;
  } else {
    sentence = "il file selezionato è " + percorsoFile;
    toRead = true;
  }

  //scopriremo dopo a cosa serve
  let maxLine = "";
  let maxCount = -1;
  //

  let html =
    "<!DOCTYPE html>" +
    "<html>" +
    " <head>" +
    ' <meta charset="utf-8" />' +
    " <title>Esercizio 1: conteggio numero di parole di un file </title>" +
    " </head>" +
    " <body>" +
    " <p>" +
    sentence +
    "</p><br>";

  let line_counter = 0;
  let word_counter = 0;
  let max_count = 0;
  let longest_line = "";

  if (toRead) {
    const myFileWriter = fs.createWriteStream("new_" + percorsoFile, {
      flags: "a", // 'a' means appending (old data will be preserved)
    });

    const rl = readline.createInterface({
      input: fs.createReadStream(percorsoFile),
      output: process.stdout,
      terminal: false,
    });

    //let line_counter = 0;

    rl.on("line", function (line) {
      line_counter++;
      let words = line.trim().split(" ");
      word_counter += words.length;

      if (words.length > max_count) {
        max_count = words.length;
        longest_line = line;
        rl.output.write("max count: " + max_count + " " + longest_line + "\n");
      }

      if (line.includes(" " + parola + " ")) {
        line = line.replace(parola, "");
      }

      myFileWriter.write(line + "\n");
    });

    rl.on("close", function () {
      myFileWriter.end();
      html +=
        '<label for="lines">Numero di righe complessive incontrate nel file: </label>' +
        '<input type="text" id="lines" value="' +
        line_counter +
        '" readonly> </br>';
      html +=
        '<label for="words">Numero di parole complessive incontrate nel file: </label>' +
        '<input type="text" id="words" value="' +
        word_counter +
        '" readonly> </br>';
      html +=
        '<label for="longestLine">La riga più lunga incontrata nel file: </label>' +
        '<input type="text" id="longestLine" value="' +
        longest_line +
        '" readonly> </br>';
      res.write(html);
      res.end();
    });
  } else {
    html += " matte</body>" + "</html>";

    res.write(html);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
