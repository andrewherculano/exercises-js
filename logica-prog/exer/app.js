// 1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

const calculateAreaAndPerimeterOfRectangle = (base, height) => {
  const area = base * height
  const perimeter = 2 * (base + height)
  const result = `ÁREA: ${area} | PERÍMETRO: ${perimeter}`

  return result
}

console.log(calculateAreaAndPerimeterOfRectangle(7, 3))

// 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

const calculateAreaAndPerimeterOfSquare = (side) => {
  const area = side * side
  const perimeter = 4 * side
  const result = `ÁREA: ${area} | PERÍMETRO: ${perimeter}`

  return result
}

console.log(calculateAreaAndPerimeterOfSquare(5))

// 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

const calculateAreaAndPerimeterOfCircle = (radius) => {
  const pi = 3.14
  const area = Math.pow(radius, 2) * pi 
  const perimeter = 2 * pi * radius
  const result = `ÁREA: ${area.toFixed(2)} | PERÍMETRO: ${perimeter.toFixed(2)}`

  return result
}

console.log(calculateAreaAndPerimeterOfCircle(20))

// 4. Dado os três lados de um triângulo determinar o perímetro do mesmo. 

const calculateTrianglePerimeter = (x, y, z) => {
  const perimeter = x + y + z
  result = `PERÍMETRO: ${perimeter}`
  return result
}

console.log(calculateTrianglePerimeter(3, 5, 7))

// 5. Ler um número inteiro e exibir o seu sucessor.

const showSucessorNumber = (number) => {
  const sucessorNumber = number + 1
  return `Sucessor de ${number}: ${sucessorNumber}`
}

console.log(showSucessorNumber(8))

// 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles

const showResultOfDivision = (number, dividend) => {
  const division = number / dividend
  const rest = number % dividend
  const result = `Quociente: ${division.toFixed(2)} | Resto: ${rest}`

  return result
}

console.log(showResultOfDivision(100, 11))

// 7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius.

const convertFahrenheitforCelsius = (fahrenheit) => {
  const celcius = (fahrenheit - 32) / 1.8
  return `${celcius}°C`
}

console.log(convertFahrenheitforCelsius(50))

//...