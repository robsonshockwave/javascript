/* runtime = ambiente... ex.:browser, node etc 

No brownser quando cria uma variavel global ele vai pra dentro do objeto window, na qual essa variavel pode ser acessada por 
window. ou this.
o var vai pro global, na qual uma variavel pode sobescrever a outra
o let não vai pro contexto global embora seja uma variavel global, ou seja, n vai pro window
o const tbm n vai da msm forma igual do let, embora seja global
EVITE MANDAR PRO CONTEXTO GLOBAL, SE NÃO OUTRA PESSOA PODE MODIFICAR
uma função tbm vai pro contexto global
se for uma função desse tipo: const f2 = () => console.log(this === window) daí n vai pro contexto global
opte sempre por constantes, pois ela n tem como modificar

uma forma de evitar o contexto global e criando objetos... ex.: 
let pessoa = {nome: 'Ana', falar: function() { return `Eu sou ${this.nome}` }} OBS.: aqui o this dentro do objeto não é o window

pessoa está no escopo global, mas oq está dentro de pessoa não.. ou seja, ela pode guardar funções */

let a = 3 //aqui é local, n vai pro global

console.log(this.a) //vai dar undefined
console.log(global.a) //O GLOBAL EQUIVALE O OBJETO WINDOW DO BROWSER, aqui vai dar undefined

global.b = 123
console.log(b) //aqui sim vai encontrar o valor 123

this.c = 456
console.log(this.c) //aqui tbm vai econtrar o valor de c

console.log(module.exports.c) //o this é igual o module.exports
console.log(module.exports === this)
//No NodeJS cada arquivo é um módulo

this.d = false
this.e = 'teste'
console.log(module.exports) //vai retornar um objeto com os valores de c, d e e

//module.exports = { e: 456, f: false, g: 'teste' } //normal no NodeJS

abc = 3 //criando uma variavel maluca: sem var e let!
console.log(global.abc) //nunca use isso, pelamor

//Dois principios, 1º entender o runtime e 2º fugir do escopo global, mas caso precisar sempre toque a partir de um objeto colocando as coisas