const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //criou o objeto filha apontado para o protótipo pai
filha1.nome = 'Ana'
console.log(filha1.nome)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} //writable congelou, n irá mais mudar o nome - enumerable poderá ser mostrado/listado
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //n irá mostrar as chaves dos valores herdados e sim dos próprios
console.log(Object.keys(filha2))

for(let key in filha2) {
    //console.log(key)
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`) //está verificando se os atributos vieram pelo próprio objeto ou pela herança
}