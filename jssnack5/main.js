/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const numbersArray = [];

for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt("inserisci numero"));
    
    if (userNumber % 2 === 0){
        console.log("numero pari");
    }
    else{
        console.log("numero dispari");
        numbersArray.push(userNumber);
    }
}
console.log(numbersArray);

const numbersArray2 = [];
let i = 0;
while(i < 6){
    const userNumber2 = Number(prompt("inserisci numero"));
    userNumber2 % 2 === 0 ? console.log("numero pari") : numbersArray2.push(userNumber2);

    i++
}
console.log(numbersArray2);

