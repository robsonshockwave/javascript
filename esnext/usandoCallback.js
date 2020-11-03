// sem promise... usando callback aninhada
const http = require('http') //poderia usar o axios, mas ele é baseado em promises

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { //res é uma função callback
        let resultado = ''

        res.on('data', dados => { //cada um dos dados que vai chegando irá concatenando, pois n vem todos os dados de uma vez
            resultado += dados
        })

        res.on('end', () => { //quando todos os dados tiverem chegados irá converter pra objeto
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
