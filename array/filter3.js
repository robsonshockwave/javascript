//filter com call

Array.prototype.filter2 = function(cb) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if(cb.call(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const isFragil = function() {
    return this.fragil == true
}

const frageis = produtos.filter2(isFragil)

console.log(frageis);