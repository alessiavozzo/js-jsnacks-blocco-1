/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = Number(prompt("inserisci un numero"))
const secondNumber = Number(prompt("inserisci un altro numero"))

if(firstNumber > secondNumber){
    console.log(firstNumber);
}
else if(secondNumber > firstNumber){
    console.log(secondNumber);
}
else{
    console.log("hai scelto due numeri uguali");
}
