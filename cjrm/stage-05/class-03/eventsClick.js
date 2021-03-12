//Event button
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('Clicou no botao')
// })

//Event li
const lis = document.querySelectorAll('li')

lis.forEach((li) => {
    li.addEventListener('click', (event) => {
        const clickedElement = event.target

        clickedElement.style.textDecoration = 'line-through'
    })
})

//Event buton add lis
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo Item'
    //ul.append(li)
    ul.prepend(li)

    // ul.innerHTML += `<li>Novo Item</li>`
})