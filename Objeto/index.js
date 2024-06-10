//OBJETOS

{} //Objeto Vazio

const professor = {
    nome: `Jean`,
    idade: 29,
    endereço: "Rua XXXX-XXXX",
    contato: "(51) 9999-9999",
    cadAtv: true,
    materias: ["Algoritimos", "Front-End", "Back-End"],
    contarPiada: function() {
        console.log("Chocolate branco ou preto?")
    }
}

//Objestos dentro de objetos

const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
        nome: "Sun",
        tipoPet: "Cat",
        raça: "Vira-Lata",
        idade: 5,
        vacinas: {
            vac1: "XXX",
            vac2: "XXX",
            vac3: "XXX",
        }
    }
}

console.log(donoDoPet.pet.vacinas.vac2) //XXX

//Array de Objetos

const professores = [
    {nome: "Andrei", módulo: 1},
    {nome: "Vitor", módulo: 2},
    {noem: "Mina", módulo: 3}
];

professores[2].nome

//Adicionando Propiedades

const curso = {
    nome: "Front-end",
    linguagens: ["JS", "CSS", "HTML"],
}

curso.numEstudantes = 20
console.log(curso)

//Espalhamento e Spread

const novoCurso = {
    ...curso,
    nome: "Diurno Front-End"
}

console.log(novoCurso)

//Copiando arrays

const profes = ["Prof 1", "Prof 2", "Prof 3"]

const copiaProfes = [...profes]

console.log(copiaProfes)