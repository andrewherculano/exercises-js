const form = document.querySelector('form')

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
    console.log(GIFData)

  } catch (error) {
    alert(`Erro: ${error.message}`)
  }
})