//First example
const numbers = [10, 20, 30, 40, 50, 60]

const numbersGreatherThan30 = numbers.filter(function(item){
    return item > 30;
})

console.log(numbersGreatherThan30, numbers)

//Second example
const users = [
    { name: 'Anna', premium: true },
    { name: 'Emma', premium: true },
    { name: 'Steve', premium: false },
    { name: 'Will', premium: false },
    { name: 'Robert', premium: false },
    { name: 'Andrew', premium: true }
]

const usersPremium = users.filter(function(user){
    return user.premium
})

console.log(usersPremium)