// Creare un array popolato di cognomi
// Chiedere all'utente il cognome
// Inserire il cognome dell'utente nella lista dell'array
// stampa la lista ordinata alfabeticamente
// scrivere la posizione umana in cui si trova

var cognomi = ["mazzoni", "bianchi", "rossi"];

var cognomeUtente = prompt("inserisci il tuo cognome");
var cognomeUtenteMinuscolo = cognomeUtente.toLowerCase();
cognomi.push(cognomeUtenteMinuscolo);

cognomi.sort();
console.log(cognomi);
var a = cognomi.indexOf(cognomeUtenteMinuscolo);
console.log(a);
