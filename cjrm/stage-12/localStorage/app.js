//primeiro argumento: chave - segundo argumento: valor
localStorage.setItem('Nome', 'Andrew')
localStorage.setItem('Idade', 20)

let name = localStorage.getItem('Nome')
let age = localStorage.getItem('Idade')
let message = `Meu nome é ${name} e minha idade é ${age} anos`

console.log(message)

// modificando os valores do localStorage
localStorage.setItem('Nome', 'Zézinho')
localStorage.setItem('Idade', 56)

name = localStorage.getItem('Nome')
age = localStorage.getItem('Idade')
message = `Meu nome é ${name} e minha idade é ${age} anos`

console.log(message)
