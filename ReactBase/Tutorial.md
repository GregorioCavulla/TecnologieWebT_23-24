# README

## Creazione della repository

Per iniziare a lavorare con l'applicazione, seguire questi passaggi:

1. Installare le dipendenze:

   ```bash
   npm install
   ```

2. Creare la repository dell'applicazione utilizzando il comando:

   ```bash
   npx create-react-app <nome-app>
   ```

## Struttura della repository

La repository contiene la seguente struttura:

- La cartella `src` è destinata a contenere tutti i componenti e i file CSS di `Index` e `App`. In questa cartella è possibile organizzare il codice in modo logico, ad esempio separando i componenti in sottocartelle.

- La cartella `public` contiene il file `index.html`, che è il punto di ingresso dell'applicazione React. Assicurarsi che `index.html` contenga i collegamenti agli script dei vari componenti, ad esempio:

  ```html
  <script src="./react-components/App.js" type="text/babel"></script>
  ```

  In questa cartella, è possibile gestire anche risorse statiche come immagini o file di configurazione.

Assicurarsi di rispettare la struttura di base di una applicazione React creata con `create-react-app`, poiché modificare i nomi dei file predefiniti potrebbe causare problemi.

## Esecuzione dell'applicazione

Per visualizzare l'applicazione nel browser, eseguire il seguente comando:

```bash
npm start
```

Verrà restituito un URL locale (di solito `http://localhost:3000`) che permette di visualizzare l'applicazione in tempo reale mentre si apportano modifiche.

Buon lavoro!
