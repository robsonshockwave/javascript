console.log(typeof Array, typeof new Array, typeof []) //array é um objeto

let aprovados = new Array('Bia', 'Carlos', 'Ana') //criando um array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //criando um array literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //irá imprimir undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia') //vai colocar na ultima posição do array
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9] = 'Robson'
console.log(aprovados.length) //vai imprimir 10, sendo q os no array terão elementos vazios

console.log(aprovados[8] === undefined) //vai imprimir true
console.log(aprovados)
aprovados.sort() //vai ordenar o array original
console.log(aprovados)

delete aprovados[1] //vai excluir mas n irá ordenar
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //splice serve pra adicionar elementos em determinado indice, remover algum elemento ou adiocionar e remover elemento ao mesmo tempo
                //primeiro é o índice e o segundo é a altura q quer excluir(a partir desse quantos irá excluir adiante), o terceiro e adiante irá adicionar elementos a partir do indice falado
console.log(aprovados)