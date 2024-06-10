//Atividade 01
const readlineSync = require("readline-sync")
//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

/*  const nomeDoUsuario = readlineSync.question("Insira seu nome: ")
 const emailDoUsuario = readlineSync.question("Insira seu email ")

 console.log(`O email ${emailDoUsuario.toLowerCase()} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}`) */

//Atividade 02
// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima no console o array completo
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

/* const favFood = ["Pizza", "Sushi", "Carbonara", "Ovo frito", "Croissant"];

console.log(`Estas são suas novas comidas favoritas: \n${favFood[0]},\n${favFood[1]}\n${favFood[2]}\n${favFood[3]}\n${favFood[4]} `);

const frase = readlineSync.question("Digite uma nova comida favorita: ");

favFood.splice(1, 1, frase)
console.log(`Estas são suas novas comidas favoritas: ${favFood}`) */

//Atividade 03
// 3. Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array no console
// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array no console

let chorArray = []

const chor1 = readlineSync.question("Isiria sua primeira tarefa: ")
const chor2 = readlineSync.question("Isiria sua segunda tarefa: ")
const chor3 = readlineSync.question("Isiria sua terceira tarefa: ")

chorArray.push(chor1, chor2, chor3)
console.log(chorArray)

const chorConcluida = readlineSync.question("Insira a tarefa concluida (0, 1, 2): ")

chorArray.splice(chorConcluida,1)

console.log(`Sua nova lista de tarefas é ${chorArray}`)