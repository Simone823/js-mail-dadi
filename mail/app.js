// Chiedo all'utente la sua email
let userMail = prompt("Scrivi qui la tua email");
console.log(userMail);

// Creo una lista di email verificate
const verifiedEmails = [
    "gigi@gmail.com",
    "ciao123@outlook.it",
    "effetti@gmail.com"
];
console.log(verifiedEmails);

// Ciclo for indice verifiedEmails
for (let i = 0; i < verifiedEmails.length; i++){
    console.log(verifiedEmails[i]);

    var element = verifiedEmails[i];
    console.log(element);


    // Se la mail inserita dall'utente è inserita in lista verifiedEmail
    if (userMail == element){
        console.log("Email in lista");
        alert("Email in lista");
    }
    
}


// Se la mail inserita dall'utente non è in lista verfiedEmails
if(userMail !== element){
     console.log("email non in lista");
     alert("Email non in lista, non hai i permessi per accedere!");
}
