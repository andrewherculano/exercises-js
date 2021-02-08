//if eles
const password = 'abc1234556'

if (password.length >= 8) {
    //console.log(`Senha valida`)
}
else {
    //console.log(`Senha invalida, sua senha deve conter 8 ou mais caracters, senha atual: ${password.length}`)
}

//Example two
if (password.length <= 7) {
    console.log('Senha Fraca')
}else if (password.length === 8) {
    console.log('Senha forte')
}else {
    console.log('Senha muito forte')
}
