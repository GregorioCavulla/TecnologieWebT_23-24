# README

## Creazione della repository

Per creare la repository dell'applicazione, utilizzare il comando:

```
npx create-react-app <nome app>
```

## Contenuto della repository

All'interno di questa repository saranno presenti i seguenti elementi:

- La cartella `src` in cui inserire tutti i componenti e i file CSS di `Index` e `App`. Se si dispone di un solo file CSS, sovrascrivere entrambi con il proprio CSS. Non modificare i nomi dei file che potrebbe causare problemi.

- La cartella `public` in cui inserire `index.html`.

Assicurarsi che `index.html` contenga i collegamenti agli script dei vari componenti, ad esempio:

```html
<script src="./react-components/App.js" type="text/babel"></script>
```

## Esecuzione dell'applicazione

Per lanciare l'applicazione e visualizzarla nel browser utilizzare il comando:

```
npm start
```

Verrà restituito un URL (locale) che permetterà di visualizzare l'applicazione.
