//Fisrt example
const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(function(item){
    return item * 3
})

console.log(doubleNumbers)

//Second example
const prices = [20, 30, 50, 220, 48]

const halfPrice = prices.map(function(item){
    return item / 2
})

console.log(halfPrice)

//Third example
const products = [
    { name: 'Mouse', price: 30 },
    { name: 'Pen Drive', price: 27 },
    { name: 'Cartucho de Tinta', price: 40 },
    { name: 'Repetidor de Wi-fi', price: 185 },
    { name: 'Teclado', price: 25 }
]

const saleProducts = products.map(function(product){
    if (product.price >= 40){
        return {name: product.name, price: product.price / 2}
    }
    else {
        return{name: product.name, price: product.price}
    }   
})

console.log(saleProducts)