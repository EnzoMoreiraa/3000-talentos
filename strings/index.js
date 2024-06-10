//TEMPALTE STRIG

let nome = "Moreira";
let age = 15;

console.log(`Olá, meu nome é ${nome} e tenho ${age} anos `);

//PROTOTIPOS DE STRINGS

//METODOS

console.log(nome.toUpperCase());

//PROPRIEDADES

//LENGHT

console.log(nome.length);

let numChar;

//toLowerCase()

const pll = "OieEEEEEEEe!";

console.log(pll.toLowerCase());
let = fraseMin = pll.toLowerCase();

//toUpperCase

console.log(pll.toUpperCase());
const fraseMaiuscula = pll.toUpperCase();

//trim
const email = "     senac@senacrs.com.br    ";

const emailFormatado = email.trim();

console.log(emailFormatado);

//includes = true or false

const frase = "Hoje eu comi cenoura";

frase.includes("cenoura"); //true
frase.includes("batata"); //false

console.log(frase.includes("cenoura"));

console.log(frase.includes("batata"));

console.log(frase.includes("a"));

//replaceAll

console.log(frase.replaceAll("cenoura", "batata"));

console.log(frase.replaceAll("a", "x"));

console.log(frase.replaceAll("cenoura", "xxxxxxx"));
