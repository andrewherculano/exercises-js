//Example one
const numbers = ["1", "2", "3"];

const doubleNumbers = numbers.map((item) => item * 2);
// console.log(doubleNumbers);

//Example two
const prices = ["100", "30", "45", "57", "143", "4"];

const salePrices = prices.map((price) => price / 2);
console.log(salePrices)

//Example three
const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const saleProducts = products.map((product) => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 };
  }

  return product;
});

 console.log(saleProducts);
// console.log(products);
