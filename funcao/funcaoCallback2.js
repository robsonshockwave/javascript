const notas = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7]

//objetivo é gerar um array com as notas menores doq 7 sem a função callback
const notasBaixas = [] //array vazio

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//fazendo usando o callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})/*pegou o array notas para ligar com a função filter e dentro da função filter passou o callback, na qual irá verificar cada
elemento do array e caso seja true vai passar pro novo array, se for false ignora
filter responde se é true ou false*/

console.log(notasBaixas2)

//com array e callback
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)

