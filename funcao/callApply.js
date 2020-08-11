function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getPreco //como ja tem um metodo com esse nome, se colocar assim vai criar um atributo getPreco e vai associar a função getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 99999, desc: 0.1 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//a diferenção entre call e apply é a forma que passa os parametros
/* CALL: Este é o primeiro método de funções capaz de alterar o valor this. O primeiro parâmetro que recebe é o 
valor de this que que será atribuído à função. Os demais parâmetros são os parâmetros da função que invoca o método Call.*/
console.log(getPreco.call(carro, 0.17, "$")) //NO CALL: primeiro passa o contexto, dps todos os parametros q vai passar pra função
console.log(getPreco.apply(carro, [0.17, '$'])) //NO APPLY: primeiro passa o contexto, dps dentro de um array os parametros

console.log(getPreco.apply(global, [0.17, '$']))

//o bind meio que vai criar outra função dentro de um objeto