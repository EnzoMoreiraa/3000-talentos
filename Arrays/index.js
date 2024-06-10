//Arrays

const { promptLoop } = require("readline-sync");

const listaDeCompras = ["batata", "alface", "queijo"];
const listaDeNumeroMega = [2, 13, 26, 35, 41, 60];

const segundoItem = listaDeCompras[0]; // "batata"

//Lenght diz a quantidade de itens num Array

const pokemon = ["Bulbasauro", "Squirtle", "Charmander"];
console.log(pokemon.length); //3

//Includes() determina se uma array contém determinado elemento, retornado true or false

const seriesBoas = ["Breaking Bad", "Friends"];

seriesBoas.includes("Friends");
seriesBoas.includes("Casa do medo");

//push() adiciona um ou mais elementos finais ao array

const nums = [1, 2, 3];

nums.push(4);
console.log(nums);

nums.push(5, 6, 7);
console.log(nums);

//pop() remove o último elemento

const meusPeixes = ["palhaço", "mandarim", "esturjão"];

meusPeixes.pop();
console.log(meusPeixes); // ["palhaço", "mandarim"]

//splice(i, n) remove n elementos á partir da posição i do array

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
// indices (i)   0    1    2    3    4    5    6    7

letras.splice(2, 1);
// letras = ["A", "B", "D", "E" "F" "G" "H"]

letras.splice(3, 2);
// letras = ["A", "B", "D", "G", "H"]

console.log(letras);
