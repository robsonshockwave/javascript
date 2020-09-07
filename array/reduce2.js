const alunos = [
    { nome: 'Robson', nota: 10, bolsista: false },
    { nome: 'Maria', nota: 8, bolsista: false },
    { nome: 'Felisbeu', nota: 7.5, bolsista: true },
    { nome: 'Felisbina', nota: 7.5, bolsista: true },
]

//Desafio 1: Todos os alunos são bolsistas? reduce/map
const arrayBolsistasOuNao = e => e.bolsista
const saoBolsistas = (resultado, bolsista) => bolsista && resultado //vai retorna se os dois são true ou false

console.log(alunos.map(arrayBolsistasOuNao).reduce(saoBolsistas))

//Desafio 2: Algum aluno é bolsista? reduce/map
const algumEhBolsista = (resultado, bolsista) => bolsista || resultado
console.log(alunos.map(arrayBolsistasOuNao).reduce(algumEhBolsista))