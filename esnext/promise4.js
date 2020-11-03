function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() { //esse Promise.all irá esperar pegar todos os resultados da Promise anterior pra executar o .then lá embaixo
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise') //pode ignora esse console.time, ele é só pra ver o tempo q levou pra executar

gerarVariosNumeros().then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })
