/**
 * 
 * L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 * 
 * 
 */

const firstWord = prompt('Scrivi una parola casuale');
const SecondWord= prompt('Scrivi un\'altra parola casuale');

let biggestWord = firstWord.length > SecondWord.length ? firstWord : SecondWord;

alert(`la parola più lunga è: ${biggestWord} (${biggestWord.length})`);