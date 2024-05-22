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

const userWord = prompt('Inserisci qui la tua parola').toLowerCase();

const parolaInvertita = invertiParola(userWord);

if (userWord === parolaInvertita) {
    alert('La parola inserita è palindroma');
} else {
    alert('La parola inserita non è palindroma');
}

function invertiParola(str) {
    const strInversa = str.split('').reverse().join(''); //non mi funziona il toLowerCase!!
    return strInversa;
}
