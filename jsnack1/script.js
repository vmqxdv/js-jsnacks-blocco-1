/**
 * 
 * L’utente inserisce due numeri in successione, con due prompt.
 * Il software stampa il maggiore.
 * 
 * 
 */

const firstNum = Number(prompt('Scrivi un numero casuale'));
const SecondNum = Number(prompt('Scrivi un altro numero casuale'));

let biggestNum = firstNum > SecondNum ? firstNum : SecondNum;

alert(`Il numero più grande è: ${biggestNum}`);