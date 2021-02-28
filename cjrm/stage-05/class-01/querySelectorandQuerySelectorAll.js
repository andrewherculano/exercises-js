//Example QuerySelector one
const paragraph = document.querySelector('p')

//console.log(paragraph)

//Example QuerySelector two
const errorDiv = document.querySelector('div.error')

//console.log(errorDiv)

//Example QuerySelector three
const title = document.querySelector('body > h1')

//console.log(title)

//Example QuerySelectorAll one
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph) => {
    console.log(paragraph)
})

//Example QuerySelectorAll two
const errors = document.querySelectorAll('.error')

console.log(errors)
