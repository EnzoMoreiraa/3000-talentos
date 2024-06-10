//Exercicio 04

//Atividade 1: Crie um program que peça ao usuário para inserir o seu nome e cor

let nome = 'Moreira'
let cor = 'Vermelho'

console.log(`A cor favorita de ${nome} é ${cor}`)
 
//Atividade 2:Crie uma variável com uma frase e imprima no console a frase alterada, com:
//Letra maiusculas; "i" por "o"; O tamanho da frase

let frase = "Olá, meu nome é Moreira"
console.log(`Sua frase em caixa alta é: ${frase.toUpperCase()}`)
console.log(`Sua frase em língua do I é: ${frase.replaceAll("o", "i")}`)
console.log(`Quantidade de caractéres é: ${frase.length}`)