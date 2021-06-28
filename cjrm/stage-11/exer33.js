/*
  01
  - Ao descomentar o código abaixo, um erro será lançado;
  - Solucione esse problema sem declarar uma constante "book".
*/

const book = 'Harry Potter'
console.log(book)

/*
  02
  - Implemente uma função que, ao ser invocada, recebe um array com 3 itens;
  - A função deve retornar um novo array em que:
    - O 1º item é o 3º item do array recebido por argumento;
    - O 2º item é o 1º item do array recebido por argumento;
  - Implemente a função da forma mais concisa que você conseguir.
*/

let numbers = [10, 20, 30]

const reverseArrayNumbers = ([number1, number2, number3]) => {
  return [number2, number3, number1]
}

console.log(reverseArrayNumbers(numbers))

/*
  03
  - Em uma declaração, faça o destructuring apenas da propriedade 'name' do 
    objeto com o id 3.
*/

const topics = [
  { id: 1, name: 'Artes & cultura'},
  { id: 2, name: 'Negócios & finanças'},
  { id: 3, name: 'Carreiras'}
]

const [, , name] = topics

/*
  04
  - O 2º item do array abaixo contém as cores RGB;
  - Em uma declaração, faça o destructuring dos valores desse item em 3 consts: 
    'red', 'green' e 'blue'.
*/

const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF']

const [, [red, green, blue], ] = colors
console.log(red, green, blue)

/*
  05
  - Descomente o código abaixo e implemente a função greet;
  - Observe que ela recebe 2 argumentos, um objeto e uma string;
  - Dentro da declaração da função:
    - Faça um destructuring no objeto recebido no 1º argumento;
    - No destructuring, nomeie de forma dinâmica a const que você está 
      declarando, usando o 2º argumento que a invocação da função recebeu.
      Você já conhece a sintaxe que nomeia de forma dinâmica;
    - Atribua "desconhecido" como valor default da const do destructuring;
    - Faça a função retornar "Olá, meu nome é [NOME]!".
*/

const greet = (obj, dynamicName) => {
  const { [dynamicName]: name } = obj

  return `Olá, meu nome é ${name}!`
}

console.log(greet({ name: 'Andrew' }, 'name'))