var CSV = "jose daniel,24,true,25.99,02/04/1999";

var itensDoCsv = CSV.split(",");

var nome = itensDoCsv[0];

var primeiroNome = nome.split(" ")[0];
var primeiroNomeComLetraMaiuscula = primeiroNome[0].toUpperCase() + primeiroNome.substring(1);

var sobrenome = nome.split(" ")[1];
var sobrenomeComLetraMaiuscula = sobrenome[0].toUpperCase() + sobrenome.substring(1);

itensDoCsv[0] = `${primeiroNomeComLetraMaiuscula} ${sobrenomeComLetraMaiuscula}`;

var resultado = itensDoCsv.join(",");

console.info(resultado)