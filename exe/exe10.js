//Exercício 10:
//Atividade 01: Crie 2 variáveis (chamaremos de num1 e num2)
//Crie uma condicional que compare esse números, voltando se esse número é {maior/menor/igual}

const num1 = 20;
const num2 = 10;

console.log(typeof num1 === "number" && typeof num2 === "number"); //??
if (typeof num1 === "number" && typeof num2 === "number") {
  if (num1 > num2) {
    console.log(`O número ${num1} é maior que o número ${num2}`);
  } else if (num1 < num2) {
    console.log(`O número ${num1} é menor que o número ${num2}`);
  } else {
    console.log(`O número ${num1} é igual ao número ${num2}`);
  }
} else {
  console.log(`Os valores precisam ser do tipo number`);
}
// Apenas para entender a lógica de *typeof*

if (num1 > num2) {
  console.log(`O número ${num1} é maior que o número ${num2}`);
} else if (num1 < num2) {
  console.log(`O número ${num1} é menor que o número ${num2}`);
} else {
  console.log(`O número ${num1} é igual ao número ${num2}`);
}

//Atividade 02: Crie uma variável que receba um número
// Crie uma condicional que compare esse número, dizendo se ele é positivo, negativo ou neutro

const num3 = -10;

if (typeof num3 === "number") {
  if (num3 > 0) {
    console.log(`O número ${num3} é maior que zero`);
  } else if (num3 < 0) {
    console.log(`O número ${num3} é menor que zero`);
  } else {
    console.log(`O número ${num3} é nulo`);
  }
} else {
  console.log("Os valores precisam ser do tipo number");
}
