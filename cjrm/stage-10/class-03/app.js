const present = new Date()

console.log(dateFns.isToday(present))
console.log(dateFns.format(present, 'MM'))
console.log(dateFns.format(present, 'dddd'))
console.log(dateFns.format(present, 'YYYY'))
console.log(dateFns.format(present, 'Mo'))
console.log(dateFns.format(present, 'D/MM/YYYY'))

const past = new Date('June 7 2020 7:47:00')

console.log(dateFns.distanceInWords(present, past, {addSuffix: true}))
