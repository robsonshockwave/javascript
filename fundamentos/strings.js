const escola = "Code"

console.log(escola.charAt(3)) //vai me dar a letra de tal índice
console.log(escola.charAt(4))
console.log(escola.indexOf('e')) //verifica se existe tal caractere e retorna o índice que ele está

console.log(escola.charCodeAt(3)) //pega o valor da unicode associado a letra ;-; ignora

console.log(escola.substring(1)) //vai imprimir a partir do indice 1 pra frente
console.log(escola.substring(0, 3)) //vai do indice zero até o índice 3 mas não vai incluir o índice 3

console.log('Escola '.concat(escola).concat(" nota zero!")) //concatenar
console.log('Escola ' + escola + " nota zero!")

console.log(escola.replace(3, 'i')) //vai trocar a letra do tal indice pela indicada

console.log('Ana,Maria,Pedro'.split(',')) //vai converter em um array, vai pegar a vírgula como separador
