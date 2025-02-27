/**
 * 
 * Crea un array vuoto.
 * Chiedi per 6 volte all’utente di inserire un numero,
 * se è dispari inseriscilo nell’array
 * 
 * 
 */


// Creo un array vuoto dove salvare eventuali numeri dispari
const oddNums = [];

// Avvio un loop per chiedere N volte un numero
for (let i = 0; i <= 6; i++) {
  
  // Trasformo l'input da stringa a Number per poter controllare dopo se è dispari 
  const num = Number(prompt('Inserisci un numero casuale'));

  // Controllo se il numero è dispari, se si lo aggiungo all'array creato precedentemente
  if (num % 2) oddNums.push(num);
};

// Notifico l'utente quali numeri dispari ha inserito
alert(`I numeri dispari che hai inserito erano: ${oddNums.join(', ')}`);