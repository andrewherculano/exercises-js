class User {
  constructor (name, email) {
    this.name = name,
    this.email = email,
    this.points = 0
  }

  login () {
    console.log(`${this.name} logou`)
    return this
  }

  logout () {
    return `${this.name} deslogou`
  }

  addPoints () {
    this.points++
    return `${this.name} possui ${this.points} ${this.points > 1 ? 'pontos' : 'ponto'}`
  }
}

const user1 = new User('Harry', 'harrypotter@email.com')
const user2 = new User('Hermione', 'hermione@email.com')
const user3 = new User('Andrew', 'andrewherculano@email.com')

user1.login().addPoints()
user1.login().addPoints()
user1.login().addPoints()
console.log(user1)