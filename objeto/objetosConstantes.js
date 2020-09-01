//pq quando cria um objeto e atribui pra uma constante e dps no codigo continua alterando os atributos dessa constante

// pessoa -> endereço de memoria 123 -> {...}
const pessoa = { nome: 'Robson' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } //aqui iria apontar pra outro endereço de memória e com isso daria erro

//está congelando o objeto pessoa
Object.freeze(pessoa)
//uma vez que ele congelado n consegue mais mexer no objeto
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome) //o objeto continua lá, mas n vai poder alterá-lo
console.log(pessoa)

//tbm poderia criar um objeto deste do começo com freeze, na qual nada poderia ser mudado nunca
const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)