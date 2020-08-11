//estrategia 1 para gerar valor padrão
function soma1(a, b, c) { //o mais usado atualmente
    a = a || 1 //se o primeiro for falso pega o segundo
    b = b || 1
    c = c || 1
    //vai poder gerar algum efeito colateral
    return a + b + c
}

console.log(soma1()) //vai imprimir 3, como era de se esperar
console.log(soma1(3)) //vai imprimir 5 dboa
console.log(soma1(1, 2, 3)) //vai imprimir 6 dboa
console.log(soma1(0, 0, 0)) //o valor será falso, logo as variaveis dentro da função receberá o valor 1 e irá imprimir 3

//estretegia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //operador ternário //caso o a seja undefined ele pega o valor padrão que é 1, se não pega o próprio valor de a
    b = 1 in arguments ? b : 1 //tá verificando se dentro do arguments existe o índice 1 e se existir pega o valor de b se não
    //pega o valor padrão que é 1, se fosse pra verificar o primeiro seria 0 in arguments, se fosse o terceiro seria o 2 in arguments
    c = isNaN(c) ? 1 : c //se a varíavel for isNaN retorna o valor padrão e caso seja um número retorna o valor de c
    return a + b + c
}

console.log(soma2()) //vai pegar o valor 1 como padrão e vai imprimir 3
console.log(soma2(3)) //vai imprimir 5
console.log(soma2(1, 2, 3)) //vai imprimir 6
console.log(soma2(0, 0, 0)) //aqui sim o valor de fato deu zero

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) { //pra somar valores sempre opte por essa
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0)) //SIMPLES ASSIM, JESUS AMADO S2