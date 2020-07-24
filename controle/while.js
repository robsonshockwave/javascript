function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // O Math.randon cria um número entre 0 e 1, ex: 0.5152988406908281
    return Math.floor(valor)
}

let opcao = 0 //se colocar -1 não vai entrar ali

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')