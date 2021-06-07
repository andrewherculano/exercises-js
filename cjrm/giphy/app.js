const form = document.querySelector('form')
const gifContainer = document.querySelector('.insert-image')

const APIKey = 'yM2LRtlDRz6tp4O6S5evwJZriF1FNRaf'

const getGiphyApiUrl = (GifName) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=${GifName}`
}

const generateGifImg = (downsizedGifUrl, gifData) => {
  const img = document.createElement('img')

  img.setAttribute('src', downsizedGifUrl)
  img.setAttribute('alt', gifData.data[0].title)

  return img
}

const fetchGif = async (inputValue) => {
  try {
    const giphyApiUrl = getGiphyApiUrl(inputValue)
    const response = await fetch(giphyApiUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch (error) {
    alert(`Erro: ${error}`)
  }
}

const insertGifIntoDom = async (inputValue) => {
  const gifData = await fetchGif(inputValue)

  if (gifData) {
    const downsizedGifUrl = gifData.data[0].images.downsized.url
    const img = generateGifImg(downsizedGifUrl, gifData)

    gifContainer.insertAdjacentElement('afterbegin', img)
    form.reset()
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = event.target.search.value

  insertGifIntoDom(inputValue)
})