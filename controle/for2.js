const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//for in vai te dar os indices do elementos e não o valor em si

for (let i in notas) { //sempre coloque o let //o i é como se fosse o indice do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) { //ele tbm consegue pegar os atributos de um objeto //sempre coloque o let
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
