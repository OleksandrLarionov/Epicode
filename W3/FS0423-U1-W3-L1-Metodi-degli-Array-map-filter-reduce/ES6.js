  const arr = [1, 2, 3 , 4, 5, 6, 7, 8, 9]
  let lastElement = arr.pop()

  arr.push(lastElement)
  
  console.log(arr);
// console.log(lastElement);


arr.forEach((elemento) => {
  console.log(elemento);
})


const newArray = arr.map((elemento) => {
  return elemento + 5 
})

console.log(newArray);


const numero = newArray.find((elemento) => elemento > 6)

console.log(numero);