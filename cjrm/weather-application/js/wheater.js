const APIKey = 'QoA8unKe3EVJT3uApvZfwGIoU9tJJQC2'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWheaterUrl = cityKey => 
  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da API')
    }

    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => 
  fetchData(getCityUrl(cityName))

const getCityWheater = async cityKey =>
  fetchData(getWheaterUrl(cityKey))


