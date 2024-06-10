//Atividade 01
const readlineSync = require("readline-sync");
const num1 = 10;
const num2 = 20;
//Soma de Números Positivos: Crie um programa que imprima o resultado da soma de dois números, apenas se os dois números forem positivos.
if (typeof num1 === "number" || num2 === "number") {
  if (num1 > 0 && num2 > 0) {
    console.log(`A soma de ${num1} e ${num2} é ${num1 + num2}\n`);
  } else {
    console.log(`Os valores inseridos não são positivos`);
  }
} else {
  console.log(`O valor digitado não é do tipo number`);
}

//Multiplicação com Número Par: Crie um programa que imprima o resultado da multiplicação de dois números, apenas se pelo menos um dos números for par.
if (typeof num1 === "number" || num2 === "number") {
  if (num1 % 2 == 0 || num2 % 2 == 0) {
    console.log(`A multiplicação de ${num1} e ${num2} é ${num1 * num2}\n`);
  } else {
    console.log(`Nenhum dos valores digitados é par`);
  }
} else {
  console.log(`O valor digitado não é do tipo number`);
}

//Divisão por Não Zero: Crie um programa que imprima o resultado da divisão de dois números, apenas se o divisor não for zero.
if (typeof num1 === "number" || num2 === "number") {
  if (num2 != 0) {
    console.log(`A divisão de ${num1} e ${num2} é ${num1 / num2}\n`);
  } else {
    console.log(`O divisor é zero`);
  }
} else {
  console.log(`O valor digitado não é do tipo number`);
}

//Array em Ordem Inversa: Escreva um programa que imprima um array em ordem inversa.
const fruitArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(fruitArray.reverse());

//Array sem o Primeiro e Último Elemento: Escreva um programa que imprima um array com todos os elementos de um array original, exceto o primeiro e o último.

fruitArray.pop();
fruitArray.shift();

console.log(`Seu novo array é: [${fruitArray}]`);

//Último Número de um Array: Escreva um programa que imprima o último número de um array, apenas se o array tiver pelo menos dois elementos.
const array = [];
function fora() {
  for (i = 0; i < 5; i++) {
    const numArray = Number(
      readlineSync.question("Insira os valores para seu array: ")
    );
  }
}
fora().find(array[i])
console.log(`Seu array é: ${fora()}`);
