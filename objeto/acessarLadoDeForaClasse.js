//acessando uma função e const fora da classe atraves de um método estático

class Foo {
    //criando uma função pra acessar do lado de fora da classe
    static get BAR() {
        return 42
    }
    //criando uma variavel pra acessar do lado de fora da classe
    static teste = 55
}

console.log(Foo.BAR) // print 42.
console.log(Foo.teste)
Foo.teste = 60
console.log(Foo.teste)