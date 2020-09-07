Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]) //this[i] = valor, i = indice, this = array
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const maiorQueQuinhentos = produto => produto.preco > 500
const produtosFrageis = produto => produto.fragil === true

console.log(produtos.filter2(maiorQueQuinhentos).filter2(produtosFrageis))