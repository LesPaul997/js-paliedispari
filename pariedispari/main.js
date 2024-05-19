'use strict';


//SECONDO PROGRAMMA
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userChoice = prompt("Scrivi 'pari' o 'dispari'");
const userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));

if (isNaN(userNumber) || userNumber < 1 || userNumber > 5 || (userChoice.toLowerCase() != "pari" && userChoice.toLowerCase() != "dispari")) {
    alert("Uno o più campi errati");
}

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomNumber () {
    return Math.floor(Math.random() * 5) + 1;
}   

//Sommiamo i due numeri

const numberSum = userNumber + randomNumber();
console.log(numberSum);


//Adesso creo la funzione per definire se il risultato è pari o dispari
function numberEven(result) {
    return ((result % 2) == 0);
}

//Adesso definisco i casi dove viene dichiarata la vittoria o la scoffita 
if ((numberEven(numberSum) && userChoice === "pari") || (!numberEven(numberSum) && userChoice === "dispari")) {
    alert('Hai Vinto');
} else {
    alert('Hai perso');
}

