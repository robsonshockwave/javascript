//pode passar parametro numa função factory

function criarProduto(nome, preco) {
    return {
        nome, //tbm poderia ser nome: nome
        preco,
        desconto: 0.1 //desconto fixo, n precisou passar o valor por parametro
    } //pode ter uma factory que pode retornar várias funções agrupadas, que quer agrupar dentro do objeto
}

console.log(criarProduto('Notebook', 5000.99))
console.log(criarProduto('Celular', 2000.59))