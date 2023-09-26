// BLOCCO if: Logica condizionale

// un blocca if è composto da due parti: una condizione, e un "body"

// if(condizione) {
// codice da eseguire
// }

// Il codice tra graffe verrà eseguito SOLAMENTE se la condizione verrà valutata TRUE

const myName = 'Mario'
const examResult = 20

if (examResult >= 18) {
  console.log("Complimenti ha superato l'esame")
}

if (examResult >= 18 || myName === 'Mario') {
console.log("Complimenti ha superato l'esame")
}


//IF/ELSE
// il blocco "else" fornisce un blocco di codice alternatino da eseguire qualora la condizione del nostro if sia FALSA

const eyeColor = 'brown'

if (eyeColor === 'azure') {
  console.log('Chebelli gli occhi azzurri')
} else {
  console.log('Dai, ti si vuole bene lo stesso!')
}

// ELSE IF
// è possibile concatenare successive condizioni alla prima, in modo da meglio diramare i binari della nosta appkicazione,
// utilizzanfo un ulteriore if all'interno all'else

const myHeight = 172

if(myHeight > 180) {
  console.log('WOW, sei bello/a alta/a!')
} else if(myHeight > 170) {
  console.log('vabbè, non sei altissimo')
} else {
  console.log('il vino buono sta nella botte piccola!')
}

// TRURHU // FALSY

let firstName = 'Mario'

if (firstName) {
  console.log('Ciao')
}