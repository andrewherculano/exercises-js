const present = new Date();
console.log(present)

console.log("Ano atual:", present.getFullYear());
console.log("Mês atual:", present.getMonth()); //Zero based
console.log("Dia do mês", present.getDate());
console.log("Dia da semana", present.getDay()); //Zero based
console.log("Horas:", present.getHours());
console.log("Minutos: ", present.getMinutes());
console.log("Segundos:", present.getSeconds());

console.log("Timestamp:", present.getTime()); //Timestamp

console.log("ToDateString:", present.toDateString());
console.log("ToTimeString:", present.toTimeString());
console.log("ToLocaleString:", present.toLocaleString());