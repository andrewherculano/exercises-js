//Arrays
let heroes = ['Batman', 'Mulher Maravilha', 'Aquamen']

heroes[3] = 'Spider-man'
console.log(heroes)

ages = [10, 20, 50, 70]
console.log(ages[3])

const randomHeroes = ['Diana', 'Parker', 1, 5]
console.log(randomHeroes)

//Métodos arrays
const joinHeroes = heroes.join(' | ')
console.log(joinHeroes)

//Example two
const indexOf25 = ages.indexOf(50)
console.log(`A posição é: ${indexOf25}`)

//Example three
const concatHeroes = heroes.concat('Visão', 'Flash')
console.log(concatHeroes)

//Example four
const pushHeroes = heroes.push('Hulk')
console.log(pushHeroes)
console.log(heroes)

//Example five
const popHeroes = heroes.pop()
console.log(popHeroes)
console.log(heroes)
