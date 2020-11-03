function funcionarOunao(valor, chanceErro) {
    return new Promise ((resolve, reject) => {
        try {
            cons.log('Teste') //vai cair no primeiro tratamento de erro que achar na chamada da função lá embaixo
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOunao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)) //o segundo parâmetro do then serve pra especificar um erro só dele
    .then(() => console.log('Quase fim!'))
    //.then(v => consol.log(v)
    .catch(err => console.log(`Erro: ${err}`)) //qualquer erro, como o de cima irá cair nesse .catch
    .then(() => console.log('Fim!'))
