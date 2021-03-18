const signupForm = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

signupForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const username = event.target.username.value
    const usernameRegex = /^[a-zA-Z]{6,11}$/
    const isAValidUsername = usernameRegex.test(username)

    if (isAValidUsername) {
        feedback.textContent = 'Username Valido =)'
    } else {
        feedback.textContent = 'Usuario invalido. O usuario deve conter de 6 a 11 caracteres'
    }
})