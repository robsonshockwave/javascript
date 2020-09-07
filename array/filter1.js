const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

                                //callback é uma function, ou seja, essa function é uma callback
                                //na callback pode passar o valor do elemento, indice e o proprio array, o this é usado no callback para indicar o array
console.log(produtos.filter(function(p) { //está passando só o valor dos elementos do array
    return p.preco > 2400
}))

//no filter o array gerado é do mesmo tamanho se todos elementos forem true, e menor que o original se algum dos elementos for false

const maiorQueQuinhentos = produto => produto.preco > 500
const produtosFrageis = produto => produto.fragil === true

console.log(produtos.filter(maiorQueQuinhentos).filter(produtosFrageis))
