const pessoa = {
    saudacao: 'Bom dia!',
    falar() { //tem como criar um função no objeto
        console.log(this.saudacao)
    }
}

pessoa.falar() //se tivesse tirado o this lá daria erro
const falar = pessoa.falar
falar() //vai dar problema, efeito colateral, vai imprimir undefined //conflito entre paradigmas: funcional e orientada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) //passa o objeto no qual quer que seja resolvido o this
                                                //passando pessoa pro bind, o this sempre será resolvido pra pessoa
falarDePessoa() //agora sim vai dar certo
