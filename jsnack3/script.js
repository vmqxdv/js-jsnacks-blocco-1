/**
 * 
 * Il software deve chiedere per 10 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * 
 * 
 */

let total = 0;
for (let i = 0; i <= 10; i++) {
  const numToAdd = Number(prompt('Inserisci un numero casuale'));
  total += numToAdd;
};

alert(`La somma di tutti i numeri inseriti è: ${total}`);