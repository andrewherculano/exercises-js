const myFunc = function (name, lastName) {
    console.log(`Hello, ${name} ${lastName}`)
}

myFunc('Will', 'Smith')

//Example two
const myFuncTwo = function (name = 'Harry', lastName = 'Potter') {
    console.log(`Hi, ${name} ${lastName}`)
}

myFuncTwo()