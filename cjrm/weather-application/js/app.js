const APIKey = 'QoA8unKe3EVJT3uApvZfwGIoU9tJJQC2'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWheaterUrl = ({ Key }) => 
  `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

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

const getCityWheater = async cityName => {
  const [ cityData ] = await getCityData(cityName)

  return fetchData(getWheaterUrl(cityData))
}

getCityWheater('São Paulo')
  .then(console.log)
