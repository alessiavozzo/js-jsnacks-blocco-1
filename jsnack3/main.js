/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let numbers = [];
let sum = 0
for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("Inserisci il numero"));
    numbers.push(userNumber);
    sum += numbers[i];
}
console.log(sum);

let numbers2 = [];
let i = 0
let sum2 = 0;
while (i < 10) {
    const userNumber2 = Number(prompt("Inserisci il numero"));
    numbers2.push(userNumber2);
    sum2+= numbers2[i]
    i++
}
console.log(sum2);