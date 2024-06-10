//Insira o comando npm install readline-sync

//Importando o módulo
const readlineSync = require("readline-sync")

//Solicitando ao usuário seu nome e idade
const nome = readlineSync.question("Qual o seu nome? ")
const age = readlineSync.question("Qual sua idade? ")

//Exibindo a frase
console.log(`Olá ${nome}, você tem ${age} anos`)