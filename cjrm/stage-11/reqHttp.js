const getPokemon = (url) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    if (isRequestNotOk) {
      reject("Não foi possivel obter os dados da API", null)
    }
  })

  request.open("GET", url)
  request.send()
})

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then((bulbasaur) => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then((charmander) => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then((squirtle) => console.log(squirtle))
  .catch((error) => console.log(error))
  
//







// const getData = () => {
//   return new Promise((resolve, reject) => {
//     // resolve('dados aqui')
//     reject('Erro aqui')
//   })
// }

// getData()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))


// ____________________________________________________________________



// getPokemon('../json/todos-0.json', (error, data) => {
//   console.log(data);
//   getPokemon('../json/todos-1.json', (error, data) => {
//     console.log(data)
//     getPokemon('../json/todos-2.json', (error, data) => {
//       console.log(data)
//     })
//   })
// });