// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)
console.log(typeof nome)
console.log(nome)

const { nome: n, idade: i} = pessoa
console.log(n, i) //criou variaveis a atribuiu a elas o valor de nome e idade

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/*const { conta: { ag, num } } = pessoa
console.log(ag, num) vai dar erro, o dado pode estar undefined, mas o filho desse dado undefined n pode estar undefined*/ 