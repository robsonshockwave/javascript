const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //Esse Math.floor vai arredondar pra baixo //SWITCH NÃO RETORNA TRUE OU FALSE, APENAS OS TIPOS
        case 10: //se a nota for 10 automaticamente vai olhar no case debaixo
        case 9: //se for 10 ou 9 entrará aqui
            console.log('Quadro de Honra')
            break
        case 8: case 7: //pode colocar assim tbm
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //caso não entrar em nenhum //o default pode colocar em qualquer posição, porém depois dele precisa usar o break
            console.log('Nota inválida')
    }
}

//no switch ele vai verificando case por case, mesmo se já estiver entrado em um, para que verifique apenas um verdadeiro e saia é preciso usar o BREAK

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)