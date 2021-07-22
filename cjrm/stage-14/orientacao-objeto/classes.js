class User {
  constructor (name, email) {
    this.name = name,
    this.email = email
  }
}

const user1 = new User('Harry', 'harrypotter@email.com')
const user2 = new User('Hermione', 'hermione@email.com')
const user3 = new User('Andrew', 'andrewherculano@email.com')

console.log(user1, user2, user3)