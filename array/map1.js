//map serve pra transformar um array em outro
//exemplos: devolver o dobro dos elementos em outro array,  pega um objeto e transforma em um numero etc...
//se tem 6 elementos no array o outro valor q será gerado tbm terá 6 elementos

const nums = [1, 2, 3, 4, 500]

//map() = VALOR, INDICE, ARRAY

//For com propósito
let resultado = nums.map(function(e) { //callback pra cada interação do array, passando o elemento e o indice do elemento
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //interpola a variavel, transforma em float //pra ter duas casas decimais //separa casas decimais por virgulas

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)