const peso1 = 1.5

const peso2 = Number('2.0') //passou um valor string convertendo pra number

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) //pra saber se um valor inteiro ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1+peso2)

console.log(media)
console.log(media.toFixed(2)) //a quantidade de casas decimais depois do ponto que quer imprimir

console.log(media.toString()) //converte para string no print
console.log(media.toString(2)) //converte para valor binário
console.log(typeof media)
console.log(typeof Number) //vai mostrar que o Number é uma função