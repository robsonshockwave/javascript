const a = 1
const b = 2
const c = 3
const dragon = 0

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c, dragon } //fazendo assim as chaves com os mesmos nomes das const, 
//eles vão pegar automaticamente os valores das const de fora e assumir neles
console.log(obj1, obj2)

//criando dinamicamente um atributo num objeto usando uma string
const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj[nomeAtributo] = valorAtributo
console.log(obj3)
//tbm daria certo se fizesse assim
const obj4 = {[nomeAtributo]: valorAtributo}

//formas de definir uma função dentro de um objeto
const obj5 = {
    funcao1: function() {
        //...
    },
    //outra formar de definir um objeto
    function2() {
        //...
    }
}

console.log(obj5)