// UN Array in JS
// un arrey è una collezione (lista) di valori

const name = ['stefano','domenico', 'genueffa','isurro']
const numbers = [5, 35, 66, 44, 44,]
const booleans = ['true', 'false', 'false', 'true']

const mixed = [20, 'ciao', 'true']

const people = [
{
  name: 'Stefano'
},
{
  name: 'Laura',
  skills: ['HTML','CSS']
},
{
  name: 'Cristina'
}
]

// per accedere ad un elemento di un array l'unico "appiglio" che abbiamo è la sua POSIZIONE all'interno dell'arrey
// gli arrey in JS sono zero-indexed (si parte a contare da ZERO)

//"srefano" è il primo elemento dell'array [0]


// per accedere ad una notazione array di utilizza la notazione nomeAarray [indice]
numbers[2] // 100
people[1].name // Laura 
people[1].skills[1] // CSS // people[1]['skills][1]

//LUNGHEZZA (lengh)
//ogni array ha una lunghezza, ovvero un numero che è pari al numero di elementi contenuti
people.length // 3
names.length // 4

//per accedere al rimo elemento di un array si cerca sempra la posizione 0
numbers[0] // 5 è il primo elemento di numbers

//per accedere all'ultimo elemento di un array possimo asfruttare la sua lunghezza, in quanto l'ultimo indice valido
// sarà length -1
numbers[numbers.length -1]

//aggiungiamo un elemento in cosa all'array

const fruits = ['banana', 'apple', 'peach']

fruits.push('watermelon')

console.log(fruits)
console.log(fruits[4])

//rimovere l'ULTIMO elemento di un array

fruits.pop()
console.log(fruits)


//rimuovere un elemento da una specifica posizione
delete fruits[0] // non accorcia l'arrey dopo l'eliminazione

fruits.splice(0, 1) // due valori per splice: uno punto di partenza e il secondo il numero di elementi da cancellare