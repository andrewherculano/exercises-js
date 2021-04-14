const present = new Date();

//Tipo
console.log(typeof present, present);

//Ano
console.log("getFullYear:", present.getFullYear());

//Mês *=> A função GETMONTH é inicia no numero zero. <=*
console.log("getMonth:", present.getMonth() + 1);

//Date *=> Dia do mes <=*
console.log("getDate:", present.getDate());

//Day *=> Dia da semana, inicia no numero zero <=*
console.log("getDay:", present.getDay() + 1);

//Hours
console.log("getHours:", present.getHours());

//Minutes
console.log("getMinutes:", present.getMinutes());

//Seconds
console.log("getSeconds:", present.getSeconds());

//Timestamp *=> 1970 <=*
console.log("timestamp:", present.getTime());

//Date String
console.log("toDateString:", present.toDateString());

//Time String
console.log("toTimeString:", present.toTimeString());

//Locale String
console.log("toLocaleString:", present.toLocaleString());
