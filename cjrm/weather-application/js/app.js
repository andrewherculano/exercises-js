const apiKey = 'QoA8unKe3EVJT3uApvZfwGIoU9tJJQC2'

const getCityUrl = (cityName) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

const getCityData = async (cityName) => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityData] = await response.json()
    return cityData

  } catch ({
    name,
    message
  }) {
    alert(`${name}: ${message}`)
  }
}

const getCityWeatherData = async (cityName) => {
  try {
    const { Key } = await getCityData(cityName)
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${apiKey}`
    const response = await fetch(cityWeatherUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityWeatherData] = await response.json()
    debugger
    return cityWeatherData

  } catch ({
    name,
    message
  }) {
    alert(`${name}: ${message}`)
  }
}

getCityWeatherData('Minas Gerais')