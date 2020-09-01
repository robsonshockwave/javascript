class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//definindo que uma classe tem outra classe como prototipo, ou que um determinada função gerada a partir daquela classe terá como protótipo uma outra função que será gerada a partir da classe Avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //vai pegar o sobrenome herdado de avo, setar o this.sobrenome
        this.profissao = profissao //atribuindo profissao ao objeto que foi instanciado
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva', 'Programador') //vai sobescrever o atributo herdado
    }
}

const filho = new Filho
console.log(filho)
const avo = new Avo
console.log(avo) //vai imprimir undefined, pois n atribuiu valor a sobrenome
const pai = new Pai()
console.log(pai)