let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //será que o objeto global é estritamente igual o this? //vai dar true
comparaComThis(this) //vai dar false, o this n é o this kkkk

//tem que ter muito cuidado na hora que chamar o this e atribuir um atributo para o this dentro de um escopo de uma função pq vai estar 
//mexendo no escopo global, na função parece que não, mas estará mexendo sim... TOME CUIDADO!

const obj = {}
comparaComThis = comparaComThis.bind(obj) //associou o compara com this com o obj através da função bind
//agora sempre que chamar a função o this irá apontar pro obj e não pro escopo global
comparaComThis(global) //vai dar false
comparaComThis(obj) //vai dar true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //vai dar false
//nao vai continuar apontando pro global pq a função foi definida dentro de um módulo do node, está escrito dentro de um arquivo e o módulo será o dono

//O THIS DENTRO DE UMA FUNÇÃO TRADICIONAL NO JS APONTA PRO GLOBAL, JÁ DENTRO DE UMA FUNÇÃO ARROW O THIS APONTA PRO OBJETO CORRENTE, MÓDULO CORRENTE, O ARQUIVO NO QUAL A FUNÇÃO FOI DEFINIDA
//o arquivo seria comparaComThisArrow

comparaComThisArrow(module.exports) //é a msm coisa q o this
comparaComThisArrow(this)

//msm sendo com o .bind a função arrow n vai fazer o this apontar pro obj
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //vai dar false
comparaComThisArrow(module.exports) //vai dar true
//o this na função arrow está associado no contexto em que a função foi escrita e ponto, não muda mais