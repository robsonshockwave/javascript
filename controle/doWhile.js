function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // O Math.randon cria um número entre 0 e 1, ex: 0.5152988406908281
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima!')