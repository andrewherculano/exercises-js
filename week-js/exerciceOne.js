//Gere um novo array com apenas os números ímpares do array abaixo e exiba o novo array no console.

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const numbersOdds = randomNumbers.filter(function(item){
    if(item % 2 != 0){
        return item
    }
})

console.log(numbersOdds)