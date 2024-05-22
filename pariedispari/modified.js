'use strict';
//SECONDO PROGRAMMA

// FASE INIZIALE

// Funzione che restituisce un numero random da 1 a 5
function getRandomNumber () {
    return Math.floor(Math.random() * 5) + 1;
}   

//Funzione che determina se un numero è pari
function isEven(result) {
    return ((result % 2) == 0);
}

// Valori iniziali
const randomNumber = getRandomNumber();

//Valori che vengono dall'utente
const userChoice = prompt("Scrivi 'pari' o 'dispari'").toLowerCase();
const userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));

// Validazione
const isNumberValid = isNaN(userNumber) || userNumber < 1 || userNumber > 5;
const isChoiceValid = userChoice != "pari" && userChoice != "dispari";

if (isNumberValid || isChoiceValid) {
    alert("Uno o più campi errati");
} else {

    //Sommiamo i due numeri
    const numberSum = userNumber + randomNumber;
    console.log(numberSum);
    
    const isResultEven = isEven(numberSum);
    const rightAnswer = isResultEven ? 'pari' : 'dispari';
    
    // const alertText = userChoice === rightAnswer ? 'Hai vinto' : 'Hai perso'
    
    let alertText = 'Hai perso';
    if(userChoice === rightAnswer) alertText = 'Hai vinto';
    
    
    alert(alertText)
}
