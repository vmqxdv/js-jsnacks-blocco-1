/**
 * 
 * L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 * 
 * 
 */

// Chiedo all'utente una prima parola casuale
const firstWord = prompt('Scrivi una parola casuale');

// Chiedo all'utente una seconda parola casuale
const SecondWord= prompt('Scrivi un\'altra parola casuale');

// controllo quale delle 2 parole inserite è più lunga
const biggestWord = firstWord.length > SecondWord.length ? firstWord : SecondWord;

// Notifico l'utente quali delle 2 parole inserite è più lunga
alert(`la parola più lunga è: ${biggestWord} (${biggestWord.length})`);