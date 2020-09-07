//reduce transformar um array em um elemento, array, string, number... 
/* um parametro sera acumulado, o primeiro elemento do array é acumulador, dai ele soma com o segundo e passa pro proximo, e assim vai indo
pode passar uma valor inicial, o acumulador n será o primeiro elemento
na callback os parametros são, 1º o valor anterior(acumulador), dps o valor, indice e o array */
//agrega os valores em um só

const alunos = [
    { nome: 'Robson', nota: 10, bolsista: false },
    { nome: 'Maria', nota: 8, bolsista: false },
    { nome: 'Felisbeu', nota: 7.5, bolsista: true },
    { nome: 'Felisbina', nota: 7.5, bolsista: true },
]

console.log(alunos.map(a => a.nota))
const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado1)

//pro acumulador iniciar com 10
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    return acumulador + atual
}, 10) //se colocasse [] <- iria adicionar elementos no array

console.log(resultado2)