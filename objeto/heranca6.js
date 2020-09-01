function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) { //recebe uma função e um conjunto de parametros //... é um operador "splashrash" que recebe um conjunto de parametros e concatena todos eles em um array
    const obj = {} //criou um obj na forma literal
    obj.__proto__ = f.prototype //associou o __proto__ ao prototype da funcao que está sendo recebida como parametro
    f.apply(obj, params) //essa funcao vai receber como primeiro parametro o objeto que vai ser o this da execução dessa função, vai ser o primeiro objeto que acabou de criar //.apply vai executar a função f
                        //e o segundo parametro será um array que representa a lista de parametros que quer aplicar na função f
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)