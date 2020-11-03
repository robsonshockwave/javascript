// com promise
const http = require('http') //poderia usar o axios, mas ele é baseado em promises

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => { //res é uma função callback
            let resultado = ''

            res.on('data', dados => { //cada um dos dados que vai chegando irá concatenando, pois n vem todos os dados de uma vez
                resultado += dados
            })

            res.on('end', () => { //quando todos os dados tiverem chegados irá converter pra objeto
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

/*
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/

//vai chamar todas as promises de uma vez
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) //irá concatenar os 3 arrays
    .then(alunos => alunos.map(aluno => aluno.nome)) //vai filtar apenas os alunos
    .then(nomes => console.log(nomes)) //vai imprimir o array com o nome dos alunos
    .catch(e => console.log(e.message)) //se der erro exibe uma mensagem de erro
