/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */


const userNumber = prompt("Insert a 4 digits number")
let sum = 0

for (let i = 0; i < userNumber.length; i++) {
    const digit = Number(userNumber[i]);
    console.log(digit);
    sum += digit
}
console.log(sum);

