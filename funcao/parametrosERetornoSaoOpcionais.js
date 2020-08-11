//Parametros e retornos são opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) //vai retornar 4
console.log(area(2)) //vai dar NaN, pois ele n vai passar no vezes
console.log(area()) //vai dar NaN
console.log(area(2, 3, 17, 22, 50)) //vai considerar só os 2 primeiros, pois a funcao só recebe dois parametros
console.log(area(5, 5))
area(5, 5)

/*
O caso citado entrará no bloco if, imprimirá no console, não entrará no bloco else e encerrará a função. Como não foi executado nenhum retorno explícito, o valor padrão (undefined) é retornado.
Então é por isso que ela imprime no console e depois imprime o undefined, pois a chamada da função está dentro de um console.log. Se fizéssemos assim:
area(5, 5)
A função seria chamada fora do console.log, logo seu retorno não seria impresso, mas seu bloco if executaria o console.log interno à função.
*/