// Creare un array popolato di cognomi
// Chiedere all'utente il cognome
// Inserire il cognome dell'utente nella lista dell'array
// stampa la lista ordinata alfabeticamente(convertendo il cognome dell'utente in lowercase)
// scrivere la posizione umana in cui si trova




// creo un array popolato di cognomi
var cognomi = ["mazzoni", "bianchi", "rossi"];

// inserisco il cognome utente nell'array
var cognomeUtente = prompt("inserisci il tuo cognome");
var cognomeUtenteMinuscolo = cognomeUtente.toLowerCase();
cognomi.push(cognomeUtenteMinuscolo);

// ordino i cognomi alfabeticamente
cognomi.sort();
console.log(cognomi);

// posizione del cognome utente
var posizione = cognomi.indexOf(cognomeUtenteMinuscolo);
console.log(posizione);
