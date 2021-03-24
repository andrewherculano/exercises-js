//exemplo 1: ordenando strings
const names = ["Will Smith", "Rilary", "Andrew", "Bento"];

names.sort();
console.log(names);

//exemplo 2: ordenando numeros
const numbers = [91, 12, 3, 67, 22, 121];
numbers.sort((number1, number2) => number1 - number2);

console.log(numbers);

//exemplo 3: ordenando objetos
const theBigFamily = [
  { name: "Lineu", score: 20 },
  { name: "Nenê", score: 10 },
  { name: "Tuco", score: 50 },
  { name: "Bebel", score: 30 },
  { name: "Agostinho", score: 70 },
];

theBigFamily.sort((item1, item2) => item1.score - item2.score)

console.log(theBigFamily)