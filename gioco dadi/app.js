// Recupero dal dom il pulsante del player 1
const btnPlayer1 = document.querySelector(".btn_player1");
console.log(btnPlayer1);


// Al clic del bottone compare la sezione con il numero generato
btnPlayer1.addEventListener("click", function(){


    // Creo una variabile di numeri random da 1 a 6
    const numbersRandomPlayer1 = Math.floor(Math.random()* 6 + 1);
    console.log("numero generato", numbersRandomPlayer1);

    // Seleziono il paragrafo numbers player 1 dal DOM
    const numbersPlayer1 = document.querySelector(".numbers");
    console.log(numbersPlayer1);

    // Stampo il numero generato nel dom
    numbersPlayer1.innerHTML = numbersRandomPlayer1;

    // Recupero dal dom la sezione in display none
    const generatorResults = document.querySelector(".generated_number");
   
    // Aggiungo la classe active a generatorResults
    generatorResults.classList.add("active");
    console.log(generatorResults);

})
