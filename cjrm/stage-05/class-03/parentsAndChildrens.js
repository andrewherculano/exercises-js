const article = document.querySelector('article')

//Transforma o HTMLCollection em um array
/* console.log(Array.from(article.children))

console.log(article.children) */

Array.from(article.children).forEach((element) => {
    element.classList.add('article-element')
})

//Parents
const title = document.querySelector('h2')
//console.log(title.parentElement)

//Siblings
const paragraph = document.querySelector('p')
console.log(paragraph.previousElementSibling)
console.log(paragraph.nextElementSibling)