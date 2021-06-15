var output = document.getElementById('text')
var output2 = document.getElementById('text2')


/*PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a 
schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
*/

var studente = {     //ASSEGNAZIONE OBJECT,
    Name : 'Chuck',   // KEY(PROPERTY NAME) : VALUE(PROPERTY VALUE)
    Surname: 'Norris',
    Age: 17
}

for (var k in studente){    // CON VAR k RICHIEDO LA KEY DELL'OBJECT CHE SI TROVA NELL'OBJECT(studente)
    output.innerHTML += k + ' ' + studente[k] + '<br>'   //STAMPO la key dell'object (esempio Name) + il valore della key
}

/*
PARTE 2
creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, 
nome e cognome.  Ricordatevi, è un array, quindi? for.
*/

var ArrayStudenti = [{
    Name : 'Elon',   
    Surname: 'Musk',
    Age: 20
},
{
    Name : 'Snopp',   
    Surname: 'Dogg',
    Age: 16
},

{
    Name : 'Bernie',   
    Surname: 'Sanders',
    Age: 19
}
]



for(var x = 0; ArrayStudenti.length > x; x++){
    console.log(k, ArrayStudenti[x])
    delete ArrayStudenti[x].Age;
for(var k in ArrayStudenti[x]){
    console.log(k, ArrayStudenti[x][k])
    output.innerHTML += k + ' ' + ArrayStudenti[x][k] + '<br>'
}
}


/*
PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere 
UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


