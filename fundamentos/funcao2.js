// Armazenando uma funcao em uma variavel
//outro jeito de criar função
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazamento uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b // para funções com uma única linha de código, vc entendeu
console.log(subtracao(2, 3))

const numero = a => a
console.log(numero(4))

const testeImprimir = k => console.log(k)
testeImprimir('Legal!!!!')