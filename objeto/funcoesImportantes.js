const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //vai imprimir as chaves do objeto
console.log(Object.values(pessoa)) //vai imprimir os valores do objeto
console.log(Object.entries(pessoa)) //vai imprimir um array e dentro tem um array pra cada chave/valor

//percorendo os valores do array de .entries através do forEach
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});
//ou pode fazer desse jeito com destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//definindo a propriedade de um objeto
//nela pode definir algumas caracteristicas da propriedade, se pode ou nao ser alterada, se pode ficar visivel ou n quando fizer Object.keys, entre outros
//pode colocar mais um atributo no objeto e um valor para o mesmo
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pra saber se pode mostrar a chave, vai deixar
    writable: false, //se pode ser alterada, n vai deixar
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
//funcionar como se fosse o freeze, ele vai congelar apenas o atributo e não a variável interia
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) //vai imprimir, pois o enumerable está true

//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //.assin vai fazer o o1 e o2 concatenar com dest
                                        //o valor de a: será sobrescrito pois ele já existe em dest
console.log(obj)

//recaptulando, irá congelar o objeto
Object.freeze(obj)
obj.c = 1234
console.log(obj.c)
