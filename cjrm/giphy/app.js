const form = document.querySelector('form')
const GIFsContainer = document.querySelector('div')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.search.value
  const APIKey = 'yM2LRtlDRz6tp4O6S5evwJZriF1FNRaf'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${inputValue}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da API')
    }

    const GIFData = await response.json()
    const downSizedGIFUrl = GIFData.data[0].images.downsized.url
    const image = document.createElement('img')

    image.setAttribute('src', downSizedGIFUrl)
    image.setAttribute('alt', GIFData.data[0].title)

    GIFsContainer.insertAdjacentElement('afterbegin', image)
    event.target.reset()

  } catch (error) {
    alert(`Erro: ${error.message}`)
  }
})