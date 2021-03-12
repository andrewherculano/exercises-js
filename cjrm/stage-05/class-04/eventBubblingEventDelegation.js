const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo Item'
    ul.prepend(li)
})

// const lis = document.querySelectorAll('li')

// lis.forEach(li => {
//     li.addEventListener('click', event => {
//         const clickedElement = event.target
//         console.log('clicou na li')
//         event.stopPropagation()

//         clickedElement.remove()
//     })
// })

ul.addEventListener('click', (event) => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})