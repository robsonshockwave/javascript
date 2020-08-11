function soma() {
    let soma = 0
    for (i in arguments) { //array interno, próprio do javascript, nele permite que a função pegue quantos parâmetros desejar
        soma += arguments[i] //esse é um belo exemplo
    }
    return soma
}

console.log(soma())
console.log(soma(1.1, 1.2, 6.3))
console.log(soma(1.1, 1.2, "Teste")) //vai somar os dois primeiros e depois vai concatenar com a string teste
console.log(soma('a', 'b', 'c')) //vai concatenar
console.log(soma('total: ', 1, 2, 4))
/*O javascript é inteligente, nesse ponto. Em outras linguagens isso, possivelmente, te retornaria um erro, 
mas o javascript entende que se você está com um number + number a soma é numérica, se tem um number + string 
ele concatena como se o number fosse uma string.
No terceiro você tem, primeiro 0 + 1.1 (numbers, soma númerica), logo depois 1.1 + 1.2 (numbers, soma numérica), 
então 2.3 + 'é o resul... (ai concatena... No último já começa com uma concatenação. Ai vai string + number e 
depois string + number novamente. Por isso que ele não realiza a soma numérica.*/

