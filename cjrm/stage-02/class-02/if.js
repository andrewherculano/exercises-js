console.log(`IF's`)

//Example one
const age = 19

if (age < 20) {
    console.log('Sua idade é menor que 20 anos')
}

//Example two
const harryPotter = ['Harry', 'Ronald', 'Ermione', 'Dumbledore']

if (harryPotter.length <= 5) {
    console.log(`A serie possui: ${harryPotter.length} personagens`)
}

//Example three
const password = '123abc'

if (password.length < 8) {
    console.log(`A senha precisa ter pelo menos 8 caracteres, senha atual tem: ${password.length} caracteres`)
}