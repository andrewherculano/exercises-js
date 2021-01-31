//Exiba no console quantos números abaixo de 501 o array abaixo possui.

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersLessThen500 = crazyNumbers.filter(function(item){
    return item < 501
})

console.log(numbersLessThen500.length)