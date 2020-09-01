//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    //preco e desc estão encapsulado, n tem como alterar o valor deles dps 
    //o this.nome vai ficar visivel pra fora do objeto, pode ser modificado o valor externamente
    //
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 6000.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Robson', 7980, 1)
const f2 = criarFuncionario('Maria', 5555, 3)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null) //vai fazer coisas adicionais caso n passe o null, e tbm pode passar outros parametros
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
//JSON é um texto, ou seja, para manipula-lo e ler tem que transformar em um objeto