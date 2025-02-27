/**
 * 
 * Crea un array vuoto.
 * Chiedi per 6 volte all’utente di inserire un numero,
 * se è dispari inseriscilo nell’array
 * 
 * 
 */

const oddNums = [];
for (let i = 0; i <= 6; i++) {
  const num = Number(prompt('Inserisci un numero casuale'));
  if (num % 2) oddNums.push(num);
};

alert(`I numeri dispari che hai inserito erano: ${oddNums.join(', ')}`);