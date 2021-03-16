const signupForm = document.querySelector('.signup-form')
// const inputSignupForm = document.querySelector('#username')

signupForm.addEventListener('submit', event => {
    event.preventDefault()

    // console.log(signupForm.username.value)
    console.log(event.target.username.value)
})