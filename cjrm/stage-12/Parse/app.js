const myArray = [{
    a: 1,
    b: 2
  },
  {
    c: 3,
    d: 4
  },
  {
    e: 5,
    f: 6
  }
]

localStorage.setItem('myArray', JSON.stringify(myArray))

const JSONFromLocalStorage = localStorage.getItem('myArray')
const convertedJSONFromJs = JSON.parse(JSONFromLocalStorage)
console.log(convertedJSONFromJs)