// Gere um novo array que contém apenas os nomes das séries abaixo. Exiba o novo array no console

const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D.', releaseYear: 2004 },
    { name: 'Watchmen', releaseYear: 2019 }
]

const nameSeries = tvShows.map(function(series){
    return series.name
})

console.log(nameSeries)