const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado' //operador ternário é composto por três partes
//primeira parte é um expressão (true ou false), depois a interrogação, depois a parte se a expressão for verdadeira : a outra parte se a expressão for falsa

/*
tbm poderia fazer assim
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/
console.log(resultado(7.1))
console.log(resultado(6.9))

//ternario tbm poderia ser armazenado em uma constante, no caso ali em cima retornou em uma função
//const status = nota >= 7 ? 'Aprovado' : 'Reprovado'