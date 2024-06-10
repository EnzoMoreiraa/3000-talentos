//Atividade 01
//Indique o que o código abaixo irá executar

let array
console.log('a. ', array)
//O console irá imprimir "a. undefined" pois o valor de array não foi indicado

array = null
console.log('b. ', array)
//O console irá imprimir "b. 0" pois o valor de array é 0, sendo 0 = null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//O console irá imprimir "c. 11" pois irá contar a quantidade de valores dentro do array

let i = 0
console.log('d. ', array[i])
//O console irá imprimir "d. 3", ou seja, irá imprimir o valor correspondente ao indice indicado, no caso indice 0, primeira posição, ou seja, 3

array[i+1] = 19
console.log('e. ', array)
//O console irá imprimir "e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]", pois o valor no indice 1, no caso o número 4, será substituido pelo número 19.

const valor = array[i+6]
console.log('f. ', valor)
//O console irá imprimir "f. 9", pois o valor correspondente ao indice 6, (i+6), é 9
//-----------------------------------------------------------------------------------------//

//Atividade 02
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//O valor será: SUBI NUM ÔNIBUS EM MIRROCOS  25
//O valor será este pois substituirá o A por I, será em maiscúlo pelo uso do toUpperCase, e o número 25 se refere ao número de caractéres

