// Exercício 11
// Crie um programa para escolher um dos três:
// Bulbasauro(Planta e veneno); Charmander(Fogo); Squirtle(Água).

let pokemon = "Squirtle".toLowerCase();

switch (pokemon) {
  case "charmander":
    console.log(`Você escolheu o ${pokemon}(Fogo)!`);
    break;
  case "bulbasauro":
    console.log(`Você escolheu o ${pokemon}(Planta e Veneno)!`);
    break;
  case "squirtle":
    console.log(`Você escolheu o ${pokemon}(Água)!`);
    break;
  default:
    console.log(`${pokemon} não encontrado ou inválido`);
    break;
}
