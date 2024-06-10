/*Exercício 09: 
    1. Crie um algotitimo que receba 3 números em vairiáveis e a partir deles crie uma estrutura condicional
    que retorne uma mensagem informando que existem dois ou mais números idênticos ou no caso de todos os números
    serem diferentes retorne uma mensagem informando que não há números idênticos
    2. Crie um algoritimo que receba uma idade em variável e a partir dela crie uma estrutura condicional que
    retorne uma mensagem informand se é maior ou menor de idade
    3. Crie um algoritimo que receba um número em uma variável e a partir dele crie uma estrutura condicional
    que retorne uma mensagem informando se ele é par ou ímpar*/

const num1 = 10;
const num2 = 20;
const num3 = 30;
const cond1 = num1 === num2 || num2 === num3 || num1 === num3;
//1
if (cond1) {
  console.log(`Há dois ou mais números idênticos`);
} else {
  console.log(`Não há números idênticos`);
}
//2
const age1 = 18;
if (age1 >= 18) {
  console.log(`O usuário é adulto, pois sua idade é maior que ${age1} de idade`);
} else {
  console.log(`O usuário não é um adulto, pois sua idade é menor que ${age1} de idade`);
}
const numb1 = 10;
//3
if (numb1 % 2 == 0) {
  console.log(`O número ${num1} é par`);
} else {
  console.log(`O número ${num1} é ímpar`);
}
