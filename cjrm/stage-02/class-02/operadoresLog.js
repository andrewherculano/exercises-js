//Operadores logicos "OU - ||" e "E - &&"
const password = '1abca'

if (password.length > 12 && password.includes('1')) {
    console.log('Senha muito forte')
} else if (password.length >= 8 && password.includes('1')) {
    console.log('Senha forte')
} else if (password.length >= 6 || password.includes('1') && password.length > 4) {
    console.log('Senha fraca')
} else {
    console.log('Senha invalida')
}