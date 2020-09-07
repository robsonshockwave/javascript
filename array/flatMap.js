const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Ana',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //Essa função recebe um aluno e retorna apenas a sua nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) //Essa função recebe uma turma e chama um map no array de alunos retirando apenas suas notas.

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

//aqui nós criamos dentro de array uma função chamada flatmap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
/*A função apply aplica um contexto (this) e um array de argumentos à chamada de uma função. Ou seja, no código acima estamos 
chamando o concat onde o this será um array vazio e função map será um de seus argumentos.*/

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)