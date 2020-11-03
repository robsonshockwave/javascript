// let e const 
{
    var a = 2
    let b = 3
}
console.log(a) //o var consegue ser acessado fora do bloco
//console.log(b) //o let não consegue ser acessado for do bloco

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) //vai colocar o C no l, o no e, e o tras irá virar um array q contém os caracteres d, 3 e r

const [x,  , y]= [1, 2, 3]
console.log(x, y)
const { idade: i, nome } = { nome: 'Ana', idade: 94 } //nomeu idade pra i
console.log(i, nome)