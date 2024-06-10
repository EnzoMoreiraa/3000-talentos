//Exercicio 15
const readlineSync = require("readline-sync");
//Atividade 01: Crie uma função que receba um nome e imprima o nome com uma mensagem de bom dia

function nome(mensagem) {
  const nome1 = readlineSync.question("Insira seu nome: ");
  console.log(`Olá ${nome1}, bom dia!`);
}
nome();

//Atividade 02: Crie uma função que receba por parâmetro nome, sobrenome e idade e imprima no console a mensagem: {
//    `O cliente fulano de tal tem x anos`
//Invoque esta função 3 vezes passando 3 argumnetos diferentes

function data(nome, sobrenome, idade) {
  for (let i = 1; i < 3; i++) {
    const nomeGuest = readlineSync.question(`Insira o nome do ${i}o cliente: `);
    const sobrenomeGuest = readlineSync.question(`Insira o sobrenome do ${i}o cliente: `);
    const idadeGuest = Number(readlineSync.question(`Insira a idade do ${i}o cliente: `));
    console.log(`O cliente ${nomeGuest + " " + sobrenomeGuest} tem ${idadeGuest} anos\n`);
  }
}
data();
