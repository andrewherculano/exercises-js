const past = new Date('May 1 2020 7:47:00')
const present = new Date();

//achando firerenças entre datas
const difference = present.getTime() - past.getTime();
console.log(difference)

//Converter a diferença de timestamp em seconds
const seconds = Math.round(difference / 1000)
console.log({seconds})

//Converter em Minutes
const minutes = Math.round(seconds / 60)
console.log({minutes})

//Converter em horas
const hours = Math.round(minutes / 60)
console.log({hours})

//Converter em dias
const days = Math.round(hours / 24)
console.log({days})

console.log(`Postado há ${days} dias`)

const timestamp = 439283654234
console.log(new Date(timestamp)) 