//Assim se crisa ums função
function calArea(base, altura) {
  const area = base * altura;
  console.log(`\nSua área é ${area}`);
}
calArea(2, 5);
calArea(10, 15);
calArea(6, 3);
calArea(9, 7);
calArea(5, 8);
calArea(3, 4);

function sentence(nome) {
  console.log(`Olá ${nome}, tudo bem com você? `);
}
sentence(`Leonardo`);
sentence(`Maria`);
sentence(`Ana`);
sentence(`Moreira`);
sentence(`Beckman`);

function fraseSemNome() {
  console.log(`Olá pessoal, tudo bem? `);
}

fraseSemNome();

function soma (num1,num2) {
    let soma = num1 + num2
    return soma
}

const resultado = soma(5,9)

console.log(`Seu resultado é ${resultado}`)

//RETORNO

function calArea(altura, largura) {
  const area = altura * largura
  return area
}

const area = calArea(2,3)
console.log(`Sua área é: ${area}`)