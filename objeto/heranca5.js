console.log(typeof String) //vai imprimir function
console.log(typeof Array) //vai imprimir function
console.log(typeof Object) //vai imprimir function

//os 3 tem o atributo .prototype

String.prototype.reverse = function() { //reverse vai reverter uma string
    return this.split('').reverse().join('') //vai quebrar a string em cada uma das letras e vai gerar um array que tem todas as letras incluso o espaço //vai reverter o array, todos elementos serão invertidos //join irá juntar novamente todos os elementos na string
} //vai acessar a string dentro de um método do protótipo a partir do this

console.log('Testando 123'.reverse())

Array.prototype.first = function() {
    return this[0] 
    //vai acessar o array dentro de um método do protótipo a partir do this
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

//pode sobescrever uma função que já existe na String
//por exemplo, dentro de String existe a função toString, com isso abaixo estarpa sobescrevendo essa função
String.prototype.toString = function () {
    return 'Lascou tudo kkkkk'
}

console.log('Outro teste 123'.reverse()) //não imprimiu Outro teste 123 no reverso e sim Lascou tudo kkkkk no reverso