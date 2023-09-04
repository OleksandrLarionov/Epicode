console.log("Ciao, FS0423");

// Il mestiere del software developer si incentra sulla risoluzione di problemi, ovvero sulla scrittura di ALGORITMI!
// Un algoritmo è una serie di passaggi, ordinati, che porta alla risoluzione di un problema.
// Un algoritmo, se il problema è sempre lo stesso, vi porterà sempre alla stessa soluzione.

// Cosa ci serve sapere per sviluppare un algoritmo? Un concetto fondamentale, è quello delle VARIABILI.
// Una variabile la possiamo immaginare come una SCATOLA, con un contenuto, oppure come una bacinella che contiene
// un ingrediente, al fine di ottenere una ricetta.
// A livello di HW, computer, una variabile è un'allocazione di memoria fatta a contenere un valore.

// VaARIABILI
// In JS, le variabili tipicamente si dichiarano con la parola chiave (keyword) --> "let"
let dog; // creazione della variabile chiamata "dog"
// ho creato una variabile chiamata "dog". Al momento questa variabile (questa scatola) è VUOTA (è stata dichiarata,
// ma non ha un contenuto all momento)
dog = "FIDO"; //sto RIEMPIENDO la scatola, con in questo caso la stringa "Fido"
console.log("dog"); //esempio di undefind
// è possibile anche fare questi due passaggi in unico colpo:

let cat = "Tom"; // in unica riga!

let favoriteNumber = 7; // il valore in questo caso è un numero!  camel case
favoriteNumber = 15; // va bennissimo!
// favoriteNumber = 'Stefano' // è  un errore! NON dobbiamo abituarci a cambiare i TIPI delle variabili!

// Una variabile è una scatola di contenuto "variabili!!" Va benissimo dichiarare la variabile con un valore,
// e poi per sigenze di sviluppo, di programmazione o risoluzione del problema cambiarne il valore.
// Una cosa da NON fare pero è cambiare il TIPO di dato in una variabile: se favoriteNumber nasce per ospitare dei numeri,
// assegnatele SEMPRE dei valori numerici! Se dovete improvvisamente salvare una stringa, create un'altra variabile
// (ovvero fate una nuova scatola che ospiterà valori stringa...)

// let cat = 'Silvestro' non posso dichiarare 2 variabili con lo stesso nome
// let comleteSolutionForMyInitialProblem // es. estremo di nomenclatura camelCase, teoricamente è corretto!

cat = "X";

// qui, alla riga 38 quanto vale il mio favoriteNumber?
console.log(favoriteNumber);

//TIPI DI VALORI POSSIBILI PER UNA VARIABILE:
// STRING ES. "mARIO", "Rossi" `Stefano
// numbers es. true, false  valore booleano
// boolean es. true, false
// undefined ---> quando dichiariamo una variabile senza un valore
//  --> rappresenta l'assenza vera di un valore

// un valore booleano rappresenta la semplice varietà o falsità di un'affermazione
let canYouDrive = true;
let areYouItalian = false;

canYouDrive = false;

// e. di null
let bruno = null;
bruno = 50



// una variabile si DICHIARA una volta sola!
// ma il suo valore può venire ri-assegnato infinite volte

// ESEMPI DI VARIABILI NUMERICHE
let number1 = 15
let number2 = 20
let number3 = number1

// quanto vale number3
console.log( "valore di number3", number3)

let number4 = number2 + number3
// quanto vale number4?
console.log('number4', number4) // "number4" è il titolo , number4 senza le virgolette stampera il valore della variabile

let number5 = number2 - number1 // 5

console.log(3 * 5) //15
console.log(20 / 4)//5
console.log(22 % 5) // questo si chiama operatore "modulo", calcola il resto della divisione!--> 2
// il modulo serve per vedere se il numero è perfettamente divisibile pe un altro---
//  si usa spesso per insegnare a JS i numeri pari/dispari se (number1 %2) dasse 0, number1 sarebbe pari
console.log(6 % 3)

// 
let falseNumber1 = '15'
console.log(falseNumber1)
let falseNumber2 = '20'
let falseNumber3 = falseNumber1 + falseNumber2
console.log(falseNumber3)


console.log('Stefano '+ 'Casasola')


let firstName = 'Stefano'
let secondName = 'Casasola'

console.log(firstName + ' ' + secondName)

// un altro modo per dichiarare una variabile: la parola "const"
// stiamo dichiarando una constant variable , una scatola in cui il valore iniziale non potra piu essere cambiato 

const teacherName = 'Stefano'
console.log('teacherName è', teacherName)
// teacherName = 'Giovanni' // non si può fare!

const epicodeURL = 'http://www.epicode.com'





const myLocation = 'FVG'
console.log('Io mi chiamo'+' '+teacherName +', abito in '+ myLocation)