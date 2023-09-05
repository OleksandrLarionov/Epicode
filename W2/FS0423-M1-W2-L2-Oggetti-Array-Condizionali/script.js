// OGGETTI IN JS  
// UN OGGETTO è UNA "COLLEZZIONE"di proprietà appartenenti alla stessa entià, ovvero un insieme di proprietà
// che ha senso racchiudere in un solo "corpo", perchè fanno parte della stessa "cosa"
// se diversi valori fanno parte di una stessa entità, ha senso raggrupparli in un oggetto!

const obj = {}
// questo è un oggetto vuoto

const comedian = {
  // un oggetto è una lista potenzialmente infinita di coppie chiave/valore
  firstName: 'Giovanni',
  lastName: 'Storli',
  age: 66,
  gender: 'male',
  partOfOriginalDuo: true,
  location: {
    city: 'Milano',
    region:'Lombardia',
  },
  'name-of-the-trio': 'Aldo, Giovanni e Giacomo'
}

// una singola coppia chiave/valore di un oggetto è detta PROPRIETà

//  come si può accedere ad una proprietà di comidian?
// 2 metodi

// 1) DOT NOTATION
console.log(comedian.age) // 66
console.log(comedian.lastName) // 'Storti'
let comedianString = 
comedian.firstName +
 ' ' + 
 comedian.lastName + 
 ' ' +
 'ha' + 
 ' ' +
 comedian.age + 
 ' ' +
 'anni e vive a' +
 ' ' +
  comedian.location.city

console.log(comedianString)

// 2) SQUARE BRAKETS NOTATION
// console.log(comedian.name-og-the-trio) // non funziona
console.log(comedian['name-of-the-trio']) // Aldo , Giovanni e Giacomo
console.log(comedian['gender'])

//MODIFICA PROPRIETà 
comedian.firstName = 'Giacomo'
comedian.lastName = 'Poretti'
comedian.age = 67
comedian.partOfOriginalDuo = false

//NUOVA PROPRIETà DOPO LA CREAZIONE DELL'OGGETTO
comedian.mostPopularCharacter = 'Tafazzi'

// ELIMINARE UNA PROPRIETà DOPO LA CREAZIONE DELL'OGGETTO
delete comedian.gender // eliminata la proprietà

console.log(comedian) // ora ha 67 anni 