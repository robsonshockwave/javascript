const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1+1}`)

//função
const up = texto => texto.toUpperCase() //funão arraw na qual irá transformar as letras em maiúsculas
console.log(`Ei... ${up('cuidado')}!`)