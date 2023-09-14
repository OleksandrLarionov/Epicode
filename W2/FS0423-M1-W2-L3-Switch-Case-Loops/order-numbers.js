// const numeriInOrdineCasuale = [1, 10, 5, 22, 8, 5]
// function numeriInOrdine (a, b) {
// return a - b
// }
// numeriInOrdineCasuale.sort(numeriInOrdine)
// console.log(numeriInOrdineCasuale)
// let ultimoElemento = numeriInOrdineCasuale.length - 1
// console.log(ultimoElemento)
// console.log(numeriInOrdineCasuale[ultimoElemento])




// Ciclo while
let count = 5
while (count < 10) {  //nel ciclo while va messa solo una condizione
  console.log('minore di 10 è ', count)

 count++              // per uscire dal ciclo altrimenti si ripeterà all'infinito
}
console.log('il valore è ', count)




//Ciclo FOR
let count2 = 5
for (count2 = 5 ; count2 < 10; count2++) {
  console.log('Count è minore di 10 è ', count2)
}
console.log('Count è  ', count2)



//inserisco il ciclo for all'interno del mio array iniziale per calcolare la somma di tuttu gli elementi dell'array
const numeriInOrdineCasuale = [1, 10, 5, 22, 8, 5]
let somma = 0
for (let i = 0; i < numeriInOrdineCasuale.length; i++) {
  somma += numeriInOrdineCasuale[i]
  // console.log(somma) in questo caso mi stampa nella console la somma di ciascun elemento del mio indice
}
console.log('Il risultato dinale della mia somma di numeri casuali è ' ,somma)  // qui ho la somma finale


//For inverso 


for (let i = 10; i > 0; i--) {
  console.log('ciao', i)
}



