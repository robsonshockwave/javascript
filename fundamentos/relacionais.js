console.log('01)', '1' == 1) //está comparando o valor e não o tipo
console.log('02)', '1' === 1) //está verificando se é estritamente igual, vai dar false, um é string e o outro é number
console.log('03)', '3' != 3) //vai dar false, pois está comparando os valores
console.log('04)', '3' !== 3) //está verificando se é estritamente diferente, vai dar true, um é string e o outro é number
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //data de referência do javascript, 3 de janeiro de 1970
const d2 = new Date(0)
console.log(d1)
console.log('09)', d1 === d2) //está trabalhando com uma variável de referência de memória, ou seja, um objeto, daí por isso dá false
console.log('10)', d1 == d2)
//os dois dão false, pois está comparando o endereço de memória

console.log('11)', d1.getTime() === d2.getTime()) //é verdadeiro, pois está comparando o number
console.log('12)', d1.getTime() == d2.getTime())

console.log('13)', undefined == null) //verdadeiro, pois n tem valores
console.log('14)', undefined === null) //false

const a1 = 1
const a2 = 1
console.log('teste1)', a1 == a2)
console.log('teste2)', a1 === a2)

//É MAIS ADEQUADO USAR O ESTRITAMENTE IGUAL