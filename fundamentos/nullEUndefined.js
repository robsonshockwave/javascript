let valor // não inicializada
console.log(valor) //vai imprimir undefined pq n atribuiu nada

valor = null //não está apontando pra nenhum endereço de memória que tenha um valor, o valor é nulo
console.log(valor)

//se estiver nulo não faça essas burradas
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco) //não existe preço como atributo no objeto produto, então dará undefined e não erro
console.log(produto) //objeto vazio

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evite usar isso, pelamor
console.log(!!produto.preco) //vai dar false
console.log(produto) //mostra que ainda terá o atributo preco porém com nada atribuido

delete produto.preco //para deletar um atributo
console.log(produto) //voltará a mostrar o objeto vazio

produto.preco = null //sem preço
console.log(!!produto.preco) //vai dar false
console.log(produto)