/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("Inserisci un'altra parola");

//console.log(typeof firstWord, typeof secondWord);

if(firstWord.length > secondWord.length){
    console.log(secondWord,firstWord);
}
else if(secondWord.length > firstWord.length){
    console.log(firstWord,secondWord);
}
else{
    console.log("Hai scelto due parole di lunghezza uguale");
}