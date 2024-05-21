//creo l'Array di oggetti con gli animali e le loro caratteristiche

'use strict';



const listaAnimali = [
    
{animale: 'Gatto',
zampe: '4',
tipo: 'mammifero',},

{animale: 'Cane',
zampe: '4',
tipo: 'mammifero',},

{animale: 'Pinguino',
zampe: '2',
tipo: ' non mammifero',},

{animale: 'Gallo',
zampe: '2',
tipo: ' non mammifero',},

{animale: 'Gatto',
zampe: '4',
tipo: 'non mammifero',},

{animale: 'tartaruga',
zampe: '4',
tipo: 'mammifero',},

{animale: 'elefante',
zampe: '4',
tipo: 'mammifero',},

{animale: 'delfino',
tipo: 'mammifero',},
]

//array dove andrano gli animali mammiferi
const animaliMammiferi = [];
const altri = [];


//console.log(listaAnimali)


//creo ciclo 

for(let i = 0; i < listaAnimali.length; i++){

const Animals = listaAnimali[i];

if (Animals.tipo === 'mammifero'){

    animaliMammiferi.push (Animals)
}else {
    altri.push (Animals)
}
}

console.log('è un animale mammifero:' , animaliMammiferi);
console.log('non è un animale mammifero:', altri) 

