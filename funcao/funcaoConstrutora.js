function Carro(velocidadeMaxima = 200, delta = 5) { //funciona basicamente como uma classe
    //atributo privado
    //pertence apenas a função carro, n tem como acessar diretamente obeto.velocidadeAtual
    velocidadeAtual = 0

    //metodo publico, quando coloca o this vira um atributo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //ou new Carro() //instanciando a função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(ferrari) //vai perceber que é um objeto, os this transformou em atributos
console.log(typeof Carro) //é uma função
console.log(typeof ferrari) //é um objeto