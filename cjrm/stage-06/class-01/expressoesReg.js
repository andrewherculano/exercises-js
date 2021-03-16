const form = document.querySelector('.signup-form')
const inputUsername = document.querySelector('#username')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = event.target.username.value

    console.log(username)
})

//Padrões Regex
const userName = 'andrew'
const pattern = /^[a-z]{6,}$/
const isAMatch = pattern.test(userName)

if (isAMatch) {
    console.log('O teste do regex passou :)')
} else {
    console.log('O teste do regex não passou :(')
}

