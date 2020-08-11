function Pessoa() {
    this.idade = 0 //criou um atributo idade a partir do this
    //no momento que instanciar a função, criar um objeto a partir da função, vai ter o atributo idade a disposição para manipular ele

    /*
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)* /, 1000) //dispara outra função a partir de um determinado intervalo que você passou, dentro dos parenteses pode passar uma função anônima, literal, como feito ali
    */

    //passou a função pro setInterval, em nenhum momento foi eu que invoquei a função
    //vai imprimir NaN, logo o this não está apontando pro objeto Pessoa e sim para idade, para isso é preciso inclementar o .bind(this) passando o this dentro
    /*
    O que acontece é que no escopo onde estamos Pessoa e this são diferentes. Por exemplo, Pessoa.idade é undefined enquanto this.idade é 0. 
    Quando passamos Pessoa para função bind ela não vai encontrar o atributo idade, quando tenta fazer undefined++ o retorno é NaN.
    */

    const self = this //outro jeito de fazer, aqui salvou o this numa constante e logo essa nunca mais será alterada
    setInterval(function() { 
        self.idade++ //daí substitui o this por self aqui
        console.log(self.idade)
    }, 1000)

}

//instancia a função pessoa
new Pessoa

console.log(Pessoa)