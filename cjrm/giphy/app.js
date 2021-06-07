const form = document.querySelector('form')
const gifContainer = document.querySelector('.insert-image')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.search.value
  const APIKey = 'yM2LRtlDRz6tp4O6S5evwJZriF1FNRaf'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${inputValue}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const gifData = await response.json()
    const downsizedGifUrl = gifData.data[0].images.downsized.url
    const img = document.createElement('img')

    img.setAttribute('src', downsizedGifUrl)
    img.setAttribute('alt', gifData.data[0].title)

    gifContainer.insertAdjacentElement('afterbegin', img)
    event.target.reset()

  } catch (error) {
    alert(`Erro: ${error}`)
  }
})