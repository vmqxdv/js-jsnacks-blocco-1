/**
 * 
 * Il software deve chiedere per 10 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * 
 * 
 */

// Dichiato una variabile `let` con valore 0
let total = 0;

// Avvio un loop per chiedere N volte un numero
for (let i = 0; i <= 10; i++) {

  // Trasformo l'input da stringa a Number per poter controllare dopo se è dispari 
  const numToAdd = Number(prompt('Inserisci un numero casuale'));

  // Addiziono l'ultimo numero inserito al totale precedente
  total += numToAdd;
};

// Notifico l'utente della somma dei numeri che ha inserito
alert(`La somma di tutti i numeri inseriti è: ${total}`);