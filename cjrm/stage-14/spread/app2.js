//Spread operator em funções
const getReversedString = string => {
  return [...string]
    .reverse()
    .join('')

}

console.log(getReversedString('123'))

//Outro Exemplo
const numbers = [1, 4, 6, 10, 1.1, 3]

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))