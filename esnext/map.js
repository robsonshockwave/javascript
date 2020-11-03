//map é como se fosse um objeto, onde as chaves podem ser funções, um número, um objeto...

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework) //como o valor é um objeto logo pode colocar .framework

const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'], 
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //vai perguntar se existe a chave 123 no map
chavesVariadas.delete(123) //deleta um valor no map
console.log(chavesVariadas.has(123)) //agr vai imprimir false
console.log(chavesVariadas.size) //vai mostrar quantos elementos tem no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
//nesse caso irá substituir ao invés de inclementar, pois não aceita chaves repetidas
chavesVariadas.set(456, 'b') //valor pode repetir