//DESAFIOS
//Atividade 01: Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

const readlineSync = require("readline-sync")
const frase = readlineSync.question("Insira uma frase: ")

console.log(`Seu array é [${frase.split(" ")}]`)

//Atividade 02: Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const fruitArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`O indice de ${fruitArray[2]} é ${fruitArray.indexOf("Abacaxi")}`)
console.log(`A quantidade de frutas em sua lista é: ${fruitArray.length}`)
