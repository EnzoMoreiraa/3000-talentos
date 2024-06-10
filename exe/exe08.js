/* Exercício 08:
Atividade 01: 
    1. Crie um algoritimo que receba 03 números em variáveis e a partir deles
crie uma condicional e a partir deles crie uma condicional que retorne true caso 2 desses números sejam idênticos
    2. Crie um algoritimo que receba 03 números em variáveis e a partir deles
crie uma condicional e a partir deles crie uma condicional que retorne true caso o primeiro número seja
o maior dos 3
    3. Crie um algoritimo que receba uma idade em variável e a partir dela crie uma condicional que retorne 
true caso seja maior de idade
    4. Crie um algoritimo que receba 1 número em uma variável e a partir dele crie uma 
condicional que retorne true caso o número seja par */

//1
const num1 = 5;
const num2 = 2;
const num3 = 2;
const cond1 = num1 === num2 || num1 === num3 || num2 === num3;

console.log(`Seu valor lógico será: ${cond1}`);

//2
const cond2 = num1 > num2 && num1 > num3;

console.log(`Seu valor lógico será: ${cond2}`);

//3
const age = 18;
const cond3 = age >= 18;

console.log(`O usuário é maior de idade? \n R: ${cond3}`);

//4
const number1 = 10;
const cond4 = (number1 % 2) == 0;

console.log(`O número é par? \n R: ${cond4}`);