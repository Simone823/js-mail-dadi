// Recupero dal dom il pulsante del player 1
const btnPlayer1 = document.querySelector(".btn_player1");
console.log(btnPlayer1);

// Creo una variabile di numeri random da 1 a 6 player 1 
const numbersRandomPlayer1 = Math.floor(Math.random()* 6 + 1);
console.log("numero generato", numbersRandomPlayer1);


// Al clic del bottone compare la sezione con il numero generato
btnPlayer1.addEventListener("click", function(){

    // Seleziono il paragrafo numbers player 1 dal DOM
    const numbersPlayer1 = document.querySelector(".numbers_player1");
    console.log(numbersPlayer1);

    // Stampo il numero generato nel dom
    numbersPlayer1.innerHTML = numbersRandomPlayer1;

    // Recupero dal dom la sezione in display none
    const generatorResults = document.querySelector(".generated_number_player1");
   
    // Aggiungo la classe active a generatorResults
    generatorResults.classList.add("active");
    console.log(generatorResults);
})


// Recupero dal dom il pulsante del player 2 
const btnPlayer2 = document.querySelector(".btn_player2");
console.log(btnPlayer2);

 // Creo una variabile di numeri random da 1 a 6 player2
 const numbersRandomPlayer2 = Math.floor(Math.random()* 6 + 1);
 console.log("numero generato", numbersRandomPlayer2);

// Al clic del pulsante player 2 compare la sezione con il numero generato
btnPlayer2.addEventListener("click", function() {
       
        // Seleziono il paragrafo numbers player 2 dal DOM
        const numbersPlayer2 = document.querySelector(".numbers_player2");
        console.log(numbersPlayer2);
    
        // Stampo il numero generato nel dom
        numbersPlayer2.innerHTML = numbersRandomPlayer2;
    
        // Recupero dal dom la sezione in display none
        const generatorResults = document.querySelector(".generated_number_player2");
       
        // Aggiungo la classe active a generatorResults
        generatorResults.classList.add("active");
        console.log(generatorResults);
})


// Recupero dal dom il paragrafo dove stampare la vincita o la perdita
const result = document.querySelector(".win_or_lose");
console.log(result);

// Recupero il pulsante risultati dal dom
const btnResult = document.querySelector(".btn_result");
console.log(btnResult);

// Al clic del pulsante risultati apro la sezione con il risultato
btnResult.addEventListener("click", function() {
    result.classList.add("active");
    if (numbersRandomPlayer1 === numbersRandomPlayer2){
        console.log("Pareggio");
        result.innerHTML = "Pareggio";
       } else if (numbersRandomPlayer1 > numbersRandomPlayer2){
           console.log("Vince il player 1");
           result.innerHTML = "Vince il player 1";
       } else {
           console.log("Vince il player 2");
           result.innerHTML = "Vince il player 2";
    }
})

