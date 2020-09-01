//objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object //pode criar um objeto a partir de uma const
produto.nome = 'Cadeira' //msm q n exista o .nome, assim ele irá criar esse atributo msm q n exita
produto['marca do produto'] = 'Generica' //tbm é possivel assim, mas só vai dar pra acessar com colchetes
produto.preco = 220

console.log(produto)
//excluindo atributos
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: '89000',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //pode ter um array de objetos
        nome: 'Robson',
        idade: 21
    }, {
        nome: 'Pelé',
        idade: 90
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
//tbm pode acessar assim
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //é legal quando quer fazer uma introspecção, quando tem os nomes dos atributos a partir de strings
//vai ver q mudou os valores                                    //quando o nome do atributo que quer acessa é uma string, pode fazer desse jeito
console.log(carro)

//tbm pode deletar objetos e tudo que está debaixo daquele atributo tbm será deletado
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

//cuidado para quando for acessar encadeadamente os elementos de um objeto, pq pode gerar problema
console.log(carro.condutores) //n vai gerar problema apesar de ter excluido condutores, porem vai imprimir undefined
//console.log(carro.condutores.length) //já aqui vai dar problema, pois como n tem o array de condutores n vai dar pra saber o seu tamanho