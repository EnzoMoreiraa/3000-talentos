//Exercicio 14
//Atividade 01: Crie a tabuada de um número com while
const readlineSync = require("readline-sync")
/* let i = 1
const num = Number(readlineSync.question(`Insira o número para ser multiplicado: `))
const tabuada = Number(readlineSync.question(`Insira o número desejado para ser seu limite da tabuada: `))
while (i <= tabuada) {
    console.log(`A multiplicação de ${i} por ${num} é ${num*i}`)
    i++
} */
//Atividade 02: Escreva um laço que percorre um array e devolva qual o maior dentro dele
let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let higNum = findHig(numsArray)

const array = [];
function insArray(array) {
    let numArray
      for (i = 0; i < 10; i++) {
        const numArray = Number(
          readlineSync.question("Insira os valores para seu array: ")
        )
        return numArray
      }
}
console.log(insArray(array))
console.log(`Seu array é ${array}`)

function findHig(array) {
    let hig = numsArray[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > hig) {
            hig = array[i]
        }
    }
    return hig
}
console.log(`O maior número de seu array é o ${higNum}`)