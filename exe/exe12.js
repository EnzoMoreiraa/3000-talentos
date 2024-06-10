//Exercício 12
//Atividade 01
//Crie um programa que peça ao usuário inserir seu nome e cor favorita e imprima isto
//utilizando templates strings e conctaneção

const readlineSync = require("readline-sync")

// const nome = readlineSync.question("Qual o seu nome? ")
// const cor = readlineSync.question("Qual sua cor favortita? ")
// const frase = "A cor favorita de " + nome + " é " + cor

// console.log(`A cor favorita de ${nome} é ${cor}`)
// console.log(frase)

//Atividade 02
//Crie array com 5 raças de cachorros
//Peça ao usuário para inserir número de 1 a 4

// const racas = ["Pastor-Alemão", "Lulu da Pomerânia", "Buldogue", "Poodle", "Golden"]
// const pref = readlineSync.question("Insira um numero de 0 a 4: ")

// console.log(`Você escolheu o ${racas[pref]}`)

//Crie um array com 1, 2, 3, 4, 5, e 6
//1. Determine o tamanho do array
//2. Remova o último número do array
//3. Adiciome o número 7
//4. Verifique se possui o número 6
//5. Remova os números 4 e 5
//6. Determine o valor do array

const letras = [1, 2, 3, 4, 5, 6]
console.log(`A quantidade de números em seu array é de ${letras.length} números`)
letras.pop()
letras.push(7)

if(typeof letras.includes(6) === true){
    console.log("O array possui o número 6")
} else {
    console.log("O array não possui 6")
}
letras.splice(3, 2)
console.log(`Agora sua nova sequência de números é [${letras}]\nA nova quantidade de números em sua sequência é de ${letras.length} números`)

//shorturl.at/bnpz5
