const firstName = 'Will'
const lastName = 'Smith'
const year = 20

//usando concatenação
const messageOne = 'O ' + firstName + ' ' + lastName + ' tem ' + year + ' anos de idade.' 
console.log(messageOne)

//usando template strings
const messageTwo = `O ${firstName} ${lastName} tem ${year} anos de idade.`
console.log(messageTwo)

//criando template html
const html = `
<h1>${firstName}</h1>
<h2>${lastName}</h2>
<span>${year}</span>
`
console.log(html)