/*
  06
  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
    { id: 1, name: 'Dark Souls III', price: 95.03 },
    { id: 2, name: 'Shadow of the Tomb Raider', price: 101.19 },
    { id: 3, name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { id: 4, name: 'Resident Evil 2', price: 119.90 },
    { id: 5, name: 'Death Stranding', price: 149.99 }
]

const formatCart = cart.map(function(item){
    return `Jogo ${item.id}, Nome: ${item.name}`
})

console.log(formatCart)