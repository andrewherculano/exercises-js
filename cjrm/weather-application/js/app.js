const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWheaterContainer = document.querySelector('[data-js="city-wheater"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

let timeImg = document.querySelector('[data-js="time"]')

const showCityCard = () => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

const showInfoCityWeather = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWheater(Key)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  IsDayTime ? timeImg.src = './src/day.svg' : timeImg.src = './src/night.svg'
  timeIconContainer.innerHTML = timeIcon 
  cityNameContainer.textContent = LocalizedName
  cityWheaterContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

const showLocalStorageCity = () => {
  const key = localStorage.getItem('key')

  if (key) {
    showCityCard()
    showInfoCityWeather(key)
  }
}

cityForm.addEventListener('submit', event => {
  event.preventDefault()
  
  const inputValue = event.target.city.value
  
  showInfoCityWeather(inputValue)
  showCityCard()
  localStorage.setItem('key', inputValue)
  cityForm.reset()
})

showLocalStorageCity()




