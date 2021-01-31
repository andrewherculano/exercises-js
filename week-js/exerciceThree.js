//Gere um novo array com cada um dos números abaixo elevados ao quadrado e exiba o novo array no console.

const numbers = [5, 7, 3]

const numberSquared = numbers.map(function(item){
    return item * item
})

console.log(numbers)
console.log(numberSquared)