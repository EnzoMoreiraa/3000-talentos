/* Exercicio 07
Atividade 1: Crie 3 variáveis que guardem números
Para cada pergunta crie uma variável que armazena a
condição e imprima na tela a pergunta e condição:
1. O primeiro número é idêntico ao segundo e o primeiro número é maior que o terceiro?
2. O primeiro número é diferente do segundo ou o primeiro número é menor igual do que o terceiro?
3. O tercwiro número é maior que o segundo, e o terceiro número é menor que o primeiro? */

const a = 10;
const b = 20;
const c = 30;
 console.log (`O ${a} é idêntico ao ${b} e o ${a} é maior que o ${c}?\n R: ${(a===b) && (a>c)}`            );

 console.log (`O ${a} é diferente ao ${b} ou o ${a} é menor igual do que o ${c}?\n R: ${(a!==b) || (a<=c)}`);

 console.log (`O ${c} é maior que o ${b} e o ${c} é menor que o ${a}?\n R:${(a>b) && (a<c)}`               );