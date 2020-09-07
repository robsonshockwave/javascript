const aprovados = ['Agatha', 'Aldo', 'Robson', 'Raquel']

//foreach() = VALOR, INDICE, ARRAY

aprovados.forEach(function(nome, indice) { //callback pra cada interação do array, passando o elemento e o indice do elemento
    console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //o indice embora seja passado, ele será ignorado por esse método

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


//ainda pode passar um array pro forEach, ele irá passar o próprio array
aprovados.forEach(function(nome, indice, array) { //callback pra cada interação do array, passando o elemento e o indice do elemento
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})
