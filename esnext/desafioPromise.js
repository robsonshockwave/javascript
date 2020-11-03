const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'esnext/dados.txt')

/*
const arquivoDados = arquivo => new Promise(function(resolve, reject) {
    fs.readFile(arquivo, (err, contents) => {
        if(err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

arquivoDados('./esnext/dados.txt').then(saida => console.log(String(saida)))
*/

function lerArquivo(caminho) {
    return new Promise (resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

lerArquivo(caminho).then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas[1]))

//.split('\n') coloca cada elemento em uma linha
// .join(',') coloca os elementos em uma linha só separado por virgula
