function Pessoa(nome) { //função construtora, quase igual a classe
    this.nome = nome //muda aqui

    this.falar = function() { //muda aqui
        console.log(`Meu nome é ${this.nome}`)
    }
}

/*
function Pessoa(nome) {
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
} poderia fazer assim tbm, só que não teria como alterar o nome da variavel, n teria acesso.. por exemplo no console.log(p1.nome) iria dar undefined
*/

const p1 = new Pessoa('Robson')
p1.falar()
console.log(p1.nome)