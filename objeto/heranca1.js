const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) //vai imprimir undefined, pois o prototype só está disponível para funções

console.log(ferrari.__proto__) //a partir desse .__proto__ consegue acessar quem é o protótipo do objeto, o superobjeto ou o objeto pai,
                              //se tentar acessar o atributo de ferrari e não encontrar, ele vai procurar esse mesmo no protótipo ou objeto pai
                             //ele vai procurando na cadeia de protótipo

console.log(ferrari.__proto__ === Object.prototype) //vai imprimir true

console.log(volvo.__proto__ == Object.prototype)

console.log(ferrari.__proto__ === volvo.__proto__) //vai imprimir true, eles apontam para o mesmo prototype

console.log(Object.prototype.__proto__) //não tem um protótipo mais alto que ele, ele é o último da hierarquia, vai imprimir null

console.log(Object.prototype.__proto__ === null) //vai imprimir true

//toda função tem um prototype
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) //vai imprimir que as duas são function
console.log(Object.prototype, MeuObjeto.prototype) //MeuObjeto.prototype é um objeto criado a partir de quando definiu a função

/*um objeto em js tem uma referencia para seu prototipo e essa um é uma forma que js define gerança, a partir da referencia
pra um prototipo tem uma referencia pra um outro objeto e esse tem atributos e comportamentos que podem ser acessados pelo objeto filho*/

//em objetos, não conseguimos acessar a propriedade prototype. No lugar disso acessamos __proto__