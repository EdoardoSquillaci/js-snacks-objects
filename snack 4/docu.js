'use strict'

//oggetti

const Persone=[

{
Nome: 'Edoardo',
Cognome: 'Squillaci',
Età: '20',

},



{
 Nome: 'Federio',
 Cognome: 'Nicosia',
 Età: '19',
 
},

{
Nome: 'Samuele',
Cognome: 'Canella',
Età: '19',

},


{
Nome: 'Desirè',
Cognome: 'Mirenna',
Età: '15',

},


{
Nome: 'Luca',
Cognome: 'Porto',
Età: '17',

},
]

//Array Distinti
const Guidatori =[];
const nonGuidatori=[]


//console.log(Persone)

for(let i = 0 ; i < Persone.length; i++){

const People = Persone[i];

if(People.Età>= 18 ){

    Guidatori.push(People)
    
    

}else{
    nonGuidatori.push(People)
    
    
}

}


console.log(Guidatori);
console.log(nonGuidatori);