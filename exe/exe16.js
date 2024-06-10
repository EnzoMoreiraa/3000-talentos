//Exercício 14
//Atividade 01: Fazer um objeto do aluno

const aluno = {
    nome: `Enzo Moreira`,
    age: 15,
    endereço: "Perto da estação",
    contato: "(51) 9995-1133",
    cadAtv: true,
    materiasFav: [`Informática`, `Ed. Fisíca`],
    contarAlgo: function() {
        console.log("Chocolate branco ou preto?")
    }
}

console.log(aluno.age)
console.log(aluno.contarAlgo())
console.log(aluno.materiasFav[1])

//Atividade 02: Crie um objeto que representa um filme. Ele deve ter dados da Filme, o nome, o anode lançamento, uma lista completa de elenco e uma propriedade que diga se voc\~e já viu ou não. 
//Acesse ou imprima no console cada uma delas


const ddsFilme = {
    nome: "Gente Grande",
    anoDeLançamento: 2010,
    elenco: ["Adan Sandler", "Kevin James", "David Space", "Chris Rock"],
    visto: true,
}

console.log(ddsFilme.nome)
console.log(ddsFilme.anoDeLançamento)
console.log(ddsFilme.elenco)
console.log(ddsFilme.visto)

//Atividaed 03: Crie um objeto que representa uma pessoa. Essa pessoa precisa ter nome, idade, gênero musical preferido
//Imprima a frases abaixo, "O nome da pessoa é ___, ela tem ___ anos e gosta muito de ___."

const people = {
    nome: "Maria Clara Fries Schwingel",
    idade: 15,
    gênero: "Feminino",
    aniversário: "09/01/2009",
    musicalGen: "Pop"
}

console.log(`O nome dela é ${people.nome}, ela tem ${people.idade} anos, nasceu em ${people.aniversário}, gosta muito de ${people.musicalGen}\n`)

//Atividade 04: Adicione ao objeto do exercíco 1 uma lista com os nomes dos personagens dos filme.  
//Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem.
//Altere a primeira pessoa do elenco por "Xuxa"
//Imprima no console todas as proriedades do objeto

ddsFilme.personagens = ["Lenny Feder", "Eric Lamonsoff", "Marcus Higgins", "Kurt McKenzie"]

for (let i = 0; i < ddsFilme.elenco.length; i++) {
    console.log(`O personagem ${ddsFilme.personagens[i]} foi interpretado por ${ddsFilme.elenco[i]}`)
}

ddsFilme.elenco[0] = "Xuxa"

console.log(`Seu novo elenco é ${ddsFilme.elenco}`)

console.log(ddsFilme)