//Exercicio 13
//Atividade 01: Crie uma função que imprima olá mundo

function olaMundo() {
  console.log(`Olá Mundo!`);
}
olaMundo();

//Atividade 02: Crie uma função que faça a soma de dois números
function soma(num1, num2) {
  console.log(`Sua soma é ${num1 + num2}`);
}
const num1 = 7;
const num2 = 8;
soma(7, 8);
//OU
soma(num1, num2);

//Atividade 03: Usando readline, insira os números que desejam ser soma
const readlineSync = require("readline-sync");
let numb1 = Number(readlineSync.question("Insira seu primeiro número: "))
let numb2 = Number(readlineSync.question("Insira seu segundo número: "))

function soma(numb1, numb2){
    console.log(`Sua soma é ${numb1 + numb2}`)
}
soma(numb1, numb2)

function subt(numb1, numb2){
    console.log(`Sua subtração é ${numb1 - numb2}`)
}

subt(numb1, numb2)

//Atividade 04: Crie uma funçao que receba seu nome e idade através de readline. Dentro dela, crie uma variavel frase, que receba o seguinte: "Olá "fulano", você tem "tantos" anos!" Retorne a frase, Imprima a frase usando console.log na chamada da função
function dados(nome, age) {
  let frase = `Olá ${nome}, você tem ${age} anos de idade!`;
  return frase;
}
let myName = readlineSync.question("Insira seu nome: ");
let myAge = Number(readlineSync.question("Insira sua idade: "));
console.log(dados(myName, myAge));

//Atividade 05: Crie uma função que receba, como parâmetro, um array de números. Retorne o último número do array, acessando via indice mostre ele, usando um console.log na chamada função

function lista (array = [1, 2, 3, 4, 5]) {
    return array[array.length - 1]
}
console.log(`O último elemento do seu array é: ${lista()}`)