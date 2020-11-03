function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/*
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
    .then(esperarPor)
*/

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornaValorRapido() { //nessa caso, irá retornar o 20 dentro de uma promise, ele será retornado como se tivesse chamando o resolve automaticamente
    return 20
}

//por tras do async await tem q ter uma promise
async function executar() { //assync vai fazer a função esperar a anterior ser resolvida sem utilizar o método .then()
    let valor = await retornaValor()
    let valorRapido = await retornaValorRapido() //se não colocar o valor await estaria recebendo uma promise e não o valor 20

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valorRapido + 2}...`)

    return valor + 3
}

// aqui não pode armazenar o valor de retorno do executar em uma variável, só dá pra imprimir/pegar o valor com .then
// let v = executar()
// executar().then(console.log)

// outra forma de fazer seria assim a impressão ou pegar o valor
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
