// tratamento de erro
function gerarNumerosEntre(min, max, numerosProibidos) { //numerosProibidos é um array
    if(min > max) {
        [max, min] = [min, max]
    }
    //tratamento de erro na promise = resolve, reject
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)) { //se o numero sorteado estiver no aeeay numerosProibidos
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

// tratamento de erro no async = try, catch(e) (dentro desse tem o throw)
async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let __ of Array(qtdeNumeros).fill()) { //fill irá inclementar valores undefineds no aeeay
            numeros.push(await gerarNumerosEntre(1, 60, numeros)) //await fica na função que retorna uma promise
          }
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15).then(console.log).catch(console.log)
