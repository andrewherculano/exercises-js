const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWheaterContainer = document.querySelector('[data-js="city-wheater"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

let timeImg = document.querySelector('[data-js="time"]')

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWheater(Key)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }

  if (IsDayTime) {
    timeImg.src = './src/day.svg'
  } else {
    timeImg.src = './src/night.svg'
  }

  timeIconContainer.innerHTML = timeIcon 
  cityNameContainer.textContent = LocalizedName
  cityWheaterContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})