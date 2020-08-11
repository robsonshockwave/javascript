class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) //tem que colocar o this acessar o atributo nome
    }
} //no broswer o this pode variar

const p1 = new Pessoa('Juscelino Kubscheck')
p1.falar()
//passou a string pro constructor, no momento que colocou no this.nome ela passou a ser publica
//p1 recebeu a classe Pessoa e com isso ela virou um objeto que contem todas as funções dessa classe

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) //nesse contexto nao precisa usar o this
    }
}

const p2 = criarPessoa('Robson')
p2.falar()
