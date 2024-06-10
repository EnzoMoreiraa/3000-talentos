//CONDIÇÂO

/* Comparadores:
            (===) Idênticos         */

//"1" === "2" //false, são diferentes
//"2" === "2" //true, são iguais
//2 === "2" //false, são diferentes

const condicao = 1 === 2;
console.log(`A condição é ${condicao}`);

// o valor que sai da comparação
//pode ser guardado em uma variável
// nesse caso, condição === false

/*          (==) Igual                 */

//"1" == "2" //false, são diferentes
//"2" == "2" //true, são idênticos
//2 == "2"   //true, são tipos iguais
const condicao2 = 1 == 2;
console.log(`A condição é ${condicao2}`);

// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condição == false

/*          (!==) Diferente             */

//"1" !== "2" //true, são diferentes
//"2" !== "2" //false, são idênticos
// 2 !== "2"   //false, são tipos iguais
const condicao3 = 1 !== 2;
console.log(`A condição é ${condicao3}`);

// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condição !== true

/*          (>/>=) maior ou maior Igual */

//"1" >= "2" //false, 1 é menor que 2
//"2" >= "2" //true, tem o mesmo valor
// 2  >= "2"  //false, são tipos diferentes

const condicao4 = 1 >= 2;
console.log(`A condição é ${condicao4}`);

// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condição >= false

/*          (</<=) menor ou menor igual */

//"1" <= "2" //true, 1 é menor que 2
//"2" <= "2" //true, tem o mesmo valor
// 2  <= "2"  //false, são tipos diferentes

const condicao5 = 1 <= 2;
console.log(`A condição é ${condicao5}\n`);

// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condição >= false

const aa = 1
const bb = 2
const cc = 3

const log1 = (aa > bb) && (aa > cc)
const log2 = (bb > aa) && (bb > cc)
const log3 = (cc > aa) && (cc > bb)
console.log(log1)
console.log(log2)
console.log(log3)