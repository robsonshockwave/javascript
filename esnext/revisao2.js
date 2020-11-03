// Arrow Function
const soma = (a, b) => a + b //função arrow sempre será uma função anônima
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) //em um arquivo do node o this sempre apontará pro exports
const lexico2 = lexico1.bind({}) //não é permitido
lexico1() //vai imprimir true
lexico2() //vai imprimir true

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))