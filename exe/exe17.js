//Exercício 17
//Atividade 04: Crie uma função que receba um objeto de pessoa (Atividade 02 Exercíco 16) e crie um novo objeto mantendo as propriedades originais e acresentando:
/*Uma propriedade com a lista de suas comidas favoritas
  Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo dessa pessoa
  
  Ainda na função, imprima no console as propriedades desse objeto seguindo o modelo abaixo:
  "O nome da pessoa é____e suas comidas favoritas são____,_____e______. Seu melhor amigo se chama__ e tem ___anos"*/
const ppl = {
  nome: "Enzo Moreira",
  idade: 15,
  musicalGender: "pop",
};

function newPeople(people) {
  const newPpl = {
    ...ppl,
    favFood: ["Pizza", "Lasanha", "Strogonoff"],
    bff: {
      nome: "Erick",
      idade: 15,
    },
  };

  return newPpl;
}

const newPpl = newPeople(ppl);

console.log(
  `\nO nome da pessoa é ${ppl.nome}, suas comidas preferidas são ${newPpl.favFood.join(", ")}. Seu melhor amigo se chama ${newPpl.bff.nome} e tem ${newPpl.bff.idade} anos.`
);