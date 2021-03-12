const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', () => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNamesPopup = ['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClosePopups = classNamesPopup.some(className => className === classNameOfClickedElement)

    if (shouldClosePopups) {
        popup.style.display = 'none'
    }
})