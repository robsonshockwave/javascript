//Object.preventExtensions
//não vai permitir adicionar novos atributos no objeto, poderá excluir atributos e alterar
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) //.isExtensible está perguntando se é extensível, vai retornar false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //n vai acontecer nada, pois n pode criar mais atributos
delete produto.tag
console.log(produto)

//Object.seal
//vai selar um objeto, n consegue adiocionar atributos e nem excluir, mas consegue alterar
const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa) //selou o objeto
console.log('Selado:', Object.isSealed(pessoa)) //.isSelead está perguntando se está selado, vai retornar true

pessoa.sobrenome = 'Silva' //n vai acontecer nada, pois n pode criar mais atributos
delete pessoa.nome //n vai acontecer nada, pois n pode deletar atributos
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes (n podem ser modificados)