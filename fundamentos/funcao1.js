//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //no javascript pode passar apenas um paramentro se função conter duas ou mais
imprimirSoma()
imprimirSoma(1, 2, 3, 4, 5, 6, 7, 8, 9) //pode passar varios parametros tbm, porém ele irá considerar só os dois primeiros
                                            //logicamente se a função possuir dois parametros kkkk

//Função com retorno
function soma (a, b=1) { //caso o parametro b não vir com nenhum valor ele considerará o valor atribuido a ele ali
    return a + b
}

console.log(soma(2, 3)) //pra imprimir a função
console.log(soma(2))
console.log(soma()) //vai dar NaN