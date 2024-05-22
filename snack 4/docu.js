'use strict'

// Oggetti
const persone = [
    { Nome: 'Edoardo', Cognome: 'Squillaci', eta: 20 },
    { Nome: 'Federico', Cognome: 'Nicosia', eta: 19 },
    { Nome: 'Samuele', Cognome: 'Canella', eta: 19 },
    { Nome: 'Desirè', Cognome: 'Mirenna', eta: 15 },
    { Nome: 'Luca', Cognome: 'Porto', eta: 17 }
];

// Array di destinazione
const listaPersone = [];



// Iterazione sull'array delle persone

for (let i = 0; i < persone.length ; i++){


//variabile che corrisponde all'array con gli oggetti    
const people = persone[i];

if (people.eta >= 18){

// per i maggiori, aggiungo a people la info e quindi pusho tutto all'interno di lista persone    
people.info = 'può guidare';
listaPersone.push(people)

}else{

    //medesima cosa qui
    people.info = 'non può guiare'
    listaPersone.push(people)
}

}

console.log(listaPersone)