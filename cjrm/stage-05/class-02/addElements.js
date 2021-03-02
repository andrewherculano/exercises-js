//Example One
paragraph = document.querySelector('p')
// paragraph.innerText += ', Insert Message'

// console.log(paragraph)

//Example two
paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph, index) => {
    paragraph.innerText = `${index + 1}: ${paragraph.innerText}`
})

//Modificando o HTML
const div = document.querySelector('.content')

div.innerHTML += '<h2>New Text</h2>'

//Example two
const peoples = ['Will', 'Carlton', 'Hilary']

peoples.forEach((people) => {
    div.innerHTML += `<p>${people}</p>`
})
