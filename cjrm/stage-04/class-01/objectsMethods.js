let user = {
    name: 'Will Smith',
    age: 19,
    email: 'willsmith@gmail.com',
    city: 'São Paulo',
    movies: ['Um Maluco No Pedaço', 'À Procura da Felicidade', 'Homens de Preto'],
    login: function () {
        console.log('Usuario Logado')
    },
    logout: function () {
        console.log('Usuario Deslogado')
    }
}

user.login()
user.logout()

