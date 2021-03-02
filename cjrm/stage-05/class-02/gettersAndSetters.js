//Get and set
const link = document.querySelector('a')

//GET
console.log(link.getAttribute('href'))

//SET
link.setAttribute('href', 'https://twitter.com')
console.log(link)

link.innerText = 'Twitter'

//Example two
const message = document.querySelector('p')
console.log(message)

message.setAttribute('class', 'success')
message.setAttribute('style', 'color: green')
