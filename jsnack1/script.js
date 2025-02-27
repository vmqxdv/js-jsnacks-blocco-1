/**
 * 
 * L’utente inserisce due numeri in successione, con due prompt.
 * Il software stampa il maggiore.
 * 
 * 
 */

// Chiedo all'utente un primo numero casuale
const firstNum = Number(prompt('Scrivi un numero casuale'));

// Chiedo all'utente un secondo numero casuale
const SecondNum = Number(prompt('Scrivi un altro numero casuale'));

// Controllo quale dei 2 numeri è più grande
const biggestNum = firstNum > SecondNum ? firstNum : SecondNum;

// Notifico l'utente quali dei 2 numeri inserito è più grande
alert(`Il numero più grande è: ${biggestNum}`);