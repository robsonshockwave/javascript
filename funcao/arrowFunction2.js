function Pessoa() {
    this.idade = 0

    setInterval(() => { //chamou uma função dentro da chamada de uma função
        this.idade++
        console.log(this.idade)
    }, 1000)
}
//o this n vai variar, ele foi escrito dentro do contexto pessoa, léxico e significa que idependente de o código estar sendo chamado de um temporizador ele irá fazer oq a gente espera 1 2 3 4 5...

new Pessoa 

//o this no arrow function não varia, isso é ótimo