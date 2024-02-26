/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */


const userNumber = Number(prompt("Inserisci un numero"))
let i = 0
while (i < userNumber) {
    i++
    console.log(i**3);
}


const userNumber2 = Number(prompt("Numero"))
for (let i = 0; i <= userNumber2; i++) {  

    console.log(i**3);
}