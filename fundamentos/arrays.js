const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //vai dar undefined pois não tem valor no indice 4

valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores) //vai imprimir e avisar que tem 5 itens vazios no meio

console.log(valores.length) //vai mostrar quantos elementos tem no array, ou seja, irá contar o índices até o índice do ultimo elemento no ultimo indice

//passando mais valores pro array utilizando o push
valores.push({id:3}, false, null, 'teste')
console.log(valores)
//evite misturar coisas dentro do array

console.log(valores.pop())//vai tirar o ultimo elemento do array e imprimir
valores.pop() //esse pop tira mesmo o ultimo valor do array kkkk
console.log(valores)

delete valores[0] //isso vai tirar o elemento do índice indicado do array 
console.log(valores)

console.log(typeof valores) //vai mostrar que um array é um object