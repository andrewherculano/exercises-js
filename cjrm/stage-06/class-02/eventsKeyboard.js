const signupForm = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testRegexUsername = username => /^[a-zA-Z]{6,11}$/.test(username)

signupForm.addEventListener('submit', event => {
    event.preventDefault()

    const isAValidUsername = testRegexUsername(event.target.value)

    if (isAValidUsername) {
        feedback.textContent = 'Username Valido =)'
    } else {
        feedback.textContent = 'Usuario invalido. O usuario deve conter de 6 a 11 caracteres'
    }
})

signupForm.username.addEventListener('keyup', event => {
    const isAValidUsername = testRegexUsername(event.target.value)

    if (isAValidUsername) {
        signupForm.username.setAttribute('class', 'success')

    } else {
        signupForm.username.setAttribute('class', 'error')
    }
})