'use strict';

/* //Chiedere all’utente di inserire una parola
const userWord = prompt('Insersci qui la tua parola');
 console.log(userWord); 

//Quindi divido per ogni lettera la parola all'interno dell'array
let parolaDivisa = userWord.split('');
 console.log(parolaDivisa);  

//Dopodichè faccio il reverse della parola
parolaDivisa = parolaDivisa.reverse();
 console.log(parolaDivisa); 

//Adesso utilizzo il metodo "JOIN" per riavere la stringa
const parolaInvertita = parolaDivisa.join('');
 console.log(parolaInvertita); 

//A questo punto devo verificare se la Parola data dall'utente è palindroma
if (userWord === parolaInvertita) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palinroma');
} */


//IL PROGRAMMA FUNZIONA QUINDI ADESSO PROVO A COSTRUIRE LA FUNZIONE

//Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci qui la tua parola');

const parolaInvertita = invertiParola(userWord);

if (userWord === parolaInvertita) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}

function invertiParola(str) {
    const strInversa = str.toLowerCase().split('').reverse().join(''); //non mi funziona il toLowerCase!!
    return strInversa;
}


//SECONDO PROGRAMMA
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userChoice = prompt('Scrivi pari o dispari');
const userNumber = prompt('Scegli un numero da 1 a 5');

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

for (let i = 0; i < 1; i++) {
    const currentNumber = getRndIndecer(1,5);
    console.log(currentNumber);
}
function getRndIndecer (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Sommiamo i due numeri
