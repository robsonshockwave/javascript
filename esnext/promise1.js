let p = new Promise(function(resolve) { //promise sempre irá receber uma função como parametro
    resolve(['Ana', 'Bia', 'Roberval']) //aqui só pode passar um único valor
})

function primeiroElemento(array) {
    return array[0]
}

const primeiraLetra = string => string[0]

p.then(primeiroElemento) //no .then sempre irá receber uma função
    .then(primeiraLetra) //o resultado de um then sempre é passado pro próximo then
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula)) //aqui poderia colocar só .then(console.log)
