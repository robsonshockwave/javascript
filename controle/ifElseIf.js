Number.prototype.entre = function (inicio, fim) {
    //é um number, logo para acessar precisa usar o this
    return this >= inicio && this <= fim
}

console.log(typeof Number)

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) { //pode a partir do próprio valor da nota chamar a função entre
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) { //se não passou no if verifica nesse, se n passar nesse verifica no else if debaixo, daí se n for em nenhum vai pro else
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)