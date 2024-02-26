/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa */

const invitedList = ["Mario","Gesù","Piero","Martino","Pio","Alessia"];

const userName = prompt("Inserisci il tuo nome")

let partyAccess = false
let returnMessage;

for (let i = 0; i<invitedList.length; i++){
    if(userName === invitedList[i]){
        partyAccess = true  
    }
}

if(partyAccess === true){
    returnMessage = "You can come in"
    console.log(returnMessage);
}
else{
    returnMessage = "NO."
    console.log(returnMessage);
}