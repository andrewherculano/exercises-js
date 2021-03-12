// *********Event copy*********
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('texto copiado')
})

// *********Event mouse move*********
const div = document.querySelector('div')

div.addEventListener('mousemove', (event) => {
    div.textContent `X: ${event.offsetX} | Y: ${offsetY}`
})

// *********Event wheel*********
document.addEventListener('wheel', (event) => {
    console.log(event.pageX, event.pageY)
})
