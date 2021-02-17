const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['instragram', 'facebook', 'twitter', 'telegram']

let templateHtml = ''

socialNetworks.forEach((socialNetWork, index) => {
    templateHtml += `<li>${index + 1}: ${socialNetWork}</li>`
})

ul.innerHTML = templateHtml

