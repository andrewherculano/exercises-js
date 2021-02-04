//Booleans
console.log(true, false, 'true', 'false')

//Example one
const email = 'emai@email.com.br'
const includes = email.includes('@')

console.log(includes)

//Example two
const names = ['Will', 'Carlton', 'Hilary']
const includesNames = names.includes('Will')

console.log(includesNames)

//Operadores de comparação
const age = 10

/*
console.log(age != 31)
console.log(age == 10)
console.log(age > 10)
console.log(age < 10)
console.log(age >= 10)
console.log(age <= 10)
*/

//Example two
const nameHero = 'Hulk'

console.log(nameHero == 'Hulk')
console.log(nameHero == 'SpiderMan')
console.log(nameHero > 'hulk') //letras minusculas são maiores que maiusculas.
console.log(nameHero > 'Abc')

//Igualdade estrita
const year = 2021

console.log(year === '2021')
console.log(year === 2021)

console.log(year !== '2021')
console.log(year !== 2021)

