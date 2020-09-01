//cadeia de protótipos (prototype chain)
Object.prototype.atr0 = 'Z' //não faça isso em casa kkkkk
const avo = { atr1: 'A'}
const pai = { __proto__: avo, atr2: 'B' } //pegou como protótipo __proto__: avo
const filho = { __proto__: pai, atr3: 'C' }

console.log(filho.atr1000) //vai dar undefined, pq n econtrou o atributo atr1000
console.log(filho.atr1)
console.log(filho.atr0) //vai imprimir o Z pq definiu esse valor para Object.prototype.atr0

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //esse super referencia o prototipo, ele vai chamar o método do prototipo 
    }                               // ENTENDA
}

Object.setPrototypeOf(ferrari, carro) //estabeleceu uma relação na qual ferrari tem carro como seu protótipo
                //primeiro objeto e dps o prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //vai imprimir os atributos somente de ferrari
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())