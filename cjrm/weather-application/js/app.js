const APIKey = 'QoA8unKe3EVJT3uApvZfwGIoU9tJJQC2'

const getCityUrl = (cityName) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da API')
    }

    const [ cityData ] = await response.json()
  
    return cityData

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityWheater = async cityName => {
  try {
    const { Key } = await getCityData(cityName)
    const cityWheaterUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`

    const response = await fetch(cityWheaterUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da API')
    }

    const [ cityWheaterData ] = await response.json()
    debugger

    return cityWheaterData

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

getCityWheater('São Paulo')