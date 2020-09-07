const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro! kkkk //ele romove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //é o contrário de push, ele vai adicionar o elemento no primeiro indice do array
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') //vai remover ngm pq está 0 e a partir do indice dois irá adicionar os elementos
console.log(pilotos)

//remover com splice
pilotos.splice(3, 1) //massa quebrou novamente kkkk :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //gera um novo array com os elementos do array a partir do indice indicado, q no caso ali é o 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //vai pegar os indices 1, 2 e 3, sempre será o numero indicado - 1
console.log(algunsPilotos2)