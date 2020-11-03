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

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // returna um objeto AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
