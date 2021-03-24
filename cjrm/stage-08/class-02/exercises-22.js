/*
  01
  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ["Caio", "André", "Dário"];

const copyNames = names.map(name => name)
copyNames.sort()

console.log(copyNames)

/*
  02
  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: "Simba" },
  { id: 02, name: "Nala" },
  { id: 01, name: "Scar" },
  { id: 04, name: "Mufasa" },
];

const orderById = characters.map(character => ({id: character.id, name: character.name}))

orderById.sort((item2, item1) => item2.id - item1.id)

console.log(orderById, characters)

/*
  03
  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291];

const copyNumbers = numbers.map(number => number)

copyNumbers.sort((item2, item1) => item2 - item1)

console.log(copyNumbers)

/*
  04
  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 52, 70, 55];

const firstNumberGreaterThan50 = randomNumbers.find(number => number > 50)
console.log(firstNumberGreaterThan50)

/*
  05
  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ["Cauã", "Alfredo", "Bruno"];

const copyPeople = people.map(name => name)
copyPeople.sort().reverse()

console.log(copyPeople)

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ["vinho", "tomate", "cebola", "cogumelo"];

const message = ingredients.reduce((acc, ingredient, index, array) => {
    correctWordGender = ingredient[ingredient.length -1] === 'o' ? 'cozido' : 'cozida'

    if (index === array.length -1) {
        return acc + `${ingredient} ${correctWordGender}`
    }

    return acc + `${ingredient} ${correctWordGender}, `
}, '')

console.log(message)

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilmovies = [
  {
    title: "Vingadores: Ultimato",
    peopleAmount: 19686119,
    distributedBy: "Disney",
  },
  {
    title: "Titanic",
    peopleAmount: 17050000,
    distributedBy: "Paramount / 20th Century",
  },
  { title: "O Rei Leão", peopleAmount: 16267649, distributedBy: "Disney" },
  {
    title: "Vingadores: Guerra Infinita",
    peopleAmount: 14572181,
    distributedBy: "Disney",
  },
  { title: "Tubarão", peopleAmount: 13035000, distributedBy: "Universal" },
  {
    title: "Nada a Perder",
    peopleAmount: 11944985,
    distributedBy: "Paris Filmes",
  },
  {
    title: "Os Dez Mandamentos",
    peopleAmount: 11259536,
    distributedBy: "Paris / Downtown Filmes",
  },
  { title: "Tropa de Elite 2", peopleAmount: 11204815, distributedBy: "Zazen" },
  { title: "Os Vingadores", peopleAmount: 10968065, distributedBy: "Disney" },
  {
    title: "Dona Flor e Seus Dois Maridos",
    peopleAmount: 10735524,
    distributedBy: "Embrafilme",
  },
];

const counterDisneyViews = topBrazilmovies.filter(movie => movie.distributedBy === 'Disney')
.reduce((accumulator, item) => {
    return accumulator + item.peopleAmount
}, 0)

console.log(counterDisneyViews)

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: "Boris", age: 4, gender: "Male", type: "Dog" },
  { name: "Jimmy", age: 1, gender: "Male", type: "Cat" },
  { name: "Pérola", age: 2, gender: "Female", type: "Dog" },
  { name: "Lucy", age: 5, gender: "Female", type: "Cat" },
  { name: "Cristal", age: 3, gender: "Female", type: "Dog" },
  { name: "Chico", age: 6, gender: "Male", type: "Dog" },
];

const dogs = pets.filter(pet => pet.type === 'Dog')
.map(pet => ({
    name: pet.name,
    age: pet.age*7,
    gender: pet.gender,
    type: pet.type
}))

console.log(dogs)

/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/
const ul = document.querySelector('.list-group')

const moviesNames = topBrazilmovies
    .map(movie => `<li>${movie.title}</li>`)
    .join('')

ul.innerHTML = moviesNames

/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/
