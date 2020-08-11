const prod1 = { //aqui já tem uma instancia de uma objeto, ou seja, um objeto criado
    nome: '...',
    preco: 45
}

const prod2 = { //aqui já tem uma instancia de uma objeto, ou seja, um objeto criado
    nome: '.....',
    preco: 1234
}

//funcao factory
//factory é um função que no final retorna um objeto
function criarProduto() {
    return {
        nome: 'Pão',
        preco: 2
    }
}

console.log(criarProduto()) //está criando novos objetos a partir da chamada da função
console.log(typeof criarProduto) //vai ser uma function

const teste = new criarProduto
console.log(teste)
console.log(typeof teste) //agr vai ser object kkkk