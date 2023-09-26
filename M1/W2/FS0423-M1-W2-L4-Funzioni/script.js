// function nameStudent (nome,cognome){
//   const student = {
//     nome: '',
//     cognome: ''
//   }
// return student
// }

// nomeStudente(Alex, POP)

// console.log (nomeStudente(nome, cognome
// ))


function studentName(){
  const student = {
    nome: 'Matteo',
    Cognome: 'Peppa'
  }
  const qualifica = student.nome + ' ' + student.Cognome + ' ' + 'è ' + 'Nullafacente'
  return qualifica
}

console.log(studentName())




// paramentri di una funzione

function addTwoNumbers(a, b){
  let result = a + b
  return result
}



console.log(addTwoNumbers(7,10))

const numero5 = parseInt(prompt('inserisci un numero'))
console.log(typeof numero5, numero5)