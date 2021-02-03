//First example
const numbers = [3, 5, 6, 9, 22, 55]

const sumNumbers = numbers.reduce(function(accumulator, item){
    return accumulator + item
},0)

console.log(sumNumbers)

//Second example
const scorePlayers = [
    { name: 'Andrew H.', score: 155 },
    { name: 'Emma', score: 453 },
    { name: 'Jessye', score: 432 },
    { name: 'Anna', score: 122 },
    { name: 'Steve', score: 334 },
    { name: 'Mary', score: 342 },
    { name: 'Andrew H.', score: 234 },
    { name: 'Anna', score: 554 },
    { name: 'Mary', score: 123 },
    { name: 'Emma', score: 348 },
    { name: 'Jessye', score: 555 },
    { name: 'Steve', score: 331 }
]

const onePlayerScore = scorePlayers.reduce((accumulator, scorePlayers) => {
    if(scorePlayers.name === 'Andrew H.'){
        accumulator += scorePlayers.score
    }
    return accumulator
},0)

console.log(onePlayerScore)