let user = {
    name: 'Will Smith',
    age: 19,
    email: 'willsmith@gmail.com',
    city: 'São Paulo',
    movies: ['Um Maluco No Pedaço', 'À Procura da Felicidade', 'Homens de Preto']
}

console.log(user.name)
console.log(user['name'])

console.log(user.age)

user.age = 20
console.log(user.age)

console.log(user.movies)

console.log(user)