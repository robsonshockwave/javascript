function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //vai imprimir true
console.log(MeuObjeto.prototype === obj1.__proto__) //vai imprimir true
console.log(Object.prototype === obj1.__proto__) //vai imprimir false
//ou seja, quando cria um objeto a partir de uma função construtora, o prototype desse objeto irá apontar pro prototype da função construtora

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Robson'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //true
console.log(MeuObjeto.__proto__ === Function.prototype) //true //a função tbm uma referência pra um .__proto__
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null) //true //null
console.log(Object.prototype.__proto__ === undefined) //false //existe mas n aponta pra nada

//prototype é o atributo utilizado para construir os __proto__ quando você cria um objeto com o new, por exemplo.