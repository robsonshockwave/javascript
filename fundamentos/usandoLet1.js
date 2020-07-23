var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) //no let ele procura primeiro no bloco e caso n tenha aí sim ele pega o valor atribuido globalmente ou no bloco anterior
}

console.log('fora =', numero) //aqui como está fora do bloco e vai pegar o valor atribuido a variavel fora desse bloco


var teste = 1
{
    let teste2 = 2
    console.log('teste dentro = ', teste)
}

console.log('teste fora =', teste)

//escopo global, bloco e função