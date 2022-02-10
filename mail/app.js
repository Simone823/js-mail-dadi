// Chiedo all'utente la sua email
let userMail = prompt("Scrivi qui la tua email");
console.log(userMail);

// Creo una lista di email verificate
const verifiedEmails = [
    "gigi@gmail.com",
    "ciao123@outlook.it",
    "effetti@gmail.com"
];

// Ciclo for indice verifiedEmails
for (let i = 0; i < verifiedEmails.length; i++){
    console.log(verifiedEmails[i]);

    if (userMail == verifiedEmails[i]){
        console.log("Email Verificata");
        alert("Email Verificata");
    }
    
}
