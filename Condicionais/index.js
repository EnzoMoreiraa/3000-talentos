// if/else
/* const num1 = 1
const num2 = 10
const cond1 = num1 === num2;

if (cond1) {
  console.log(`\nSeus números são idênticos`);
} else {
  console.log(`\nSeus números não são idênticos`);
} 
*/
//if + else

/* const num3 = 1
const num4 = 10
const cond2 = num3 === num4;

if (cond2) {
  console.log(`\n${num3} e ${num4} são idênticos`);
} else {
  console.log(`\n${num3} e ${num4} não são idênticos`);
}
 */
//else if

if (1 === 2) {
  console.log(`Estou no bloco if`);
} else if (1 === 1) {
  console.log(`Estou no bloco else if`);
} else {
  console.log(`Estou no bloco else`);
}

//Switch Case

let nacionalidade = "brasil".toUpperCase;
switch (nacionalidade) {
  case `Brasil`.toUpperCase:
    console.log(`Você é Brasileiro!`);
    break;
  case `EUA`.toUpperCase:
    console.log(`Você é Norte Americano!`);
    break;
  case `Itália`.toUpperCase:
    console.log(`Você é Italiano!`);
    break;
  case `Argentina`.toUpperCase:
    console.log(`Você é Argentino!`);
    break;
  default:
    console.log(`Nacionalidade não encontrada!`);
    break;
}

