console.log(typeof Object)
console.log(typeof new Object) //instanciou uma função através do new

const Cliente = function() {} //criar instancias a partir doq vc definiu
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //criar instancias a partir de classe
console.log(typeof Produto) //ES 2015 (ES6) 
console.log(typeof new Produto())

//A forma de criar objetos e classes em JAVASCRIPT é através de função
//funções podem ter atributos e comportamentos e elas podem ser instanciadas