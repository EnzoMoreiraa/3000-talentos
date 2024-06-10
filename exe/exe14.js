//Exercicio 14
//Atividade 01: Crie a tabuada de um número com while
const readlineSync = require("readline-sync")
let i = 1
const num = Number(readlineSync.question(`Insira o número para ser multiplicado: `))
const tabuada = Number(readlineSync.question(`Insira o número desejado para ser seu limite da tabuada: `))
while (i <= tabuada) {
    console.log(`A multiplicação de ${i} por ${num} é ${num*i}`)
    i++
}
//Atividade 02: Escreva um laço que percorre um array e devolva qual o maior dentro dele

/* let higNum = findHig(insArray())
let array = []
console.log(`O maior número de seu array é o ${higNum}`)
function insArray(array) {
    let numArray
      for (i = 0; i < 10; i++) {
        const numArray = Number(readlineSync.question("Insira os valores para seu array: "))
      }
      return numArray
}
console.log(insArray(numArray))
console.log(`Seu array é ${array.push(numArray)}`)

function findHig(numArray) {
    let hig = numArray[0]
    for (let i = 1; i < array.length; i++) {
        if (numArray[i] > hig) {
            hig = numArray[i]
        }
    }
    return hig
} */

