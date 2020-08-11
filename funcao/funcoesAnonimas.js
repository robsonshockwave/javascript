const soma = function (x, y){ //função anônima é simplesmente uma função sem nome
    return x + y
}

const subtracao = function (x, y){
    return y - x
}

const imprimirResultado = function (a, b, operacao = soma) { //o parametro operação recebeu a função soma
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, subtracao) //poderia passar outra função
//imprimirResultado(3, 4, 6) //daria erro
imprimirResultado(3, 4, function (x, y) { //poderia criar uma função anonima dentro para enviar
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //poderia criar uma função arrow function tbm, o arrow SEMPRE VAI SER UMA FUNÇÃO ANONIMA

//pode criar uma função anonima dentro de um objeto tbm
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()

