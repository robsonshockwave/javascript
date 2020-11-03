// não aceita repetição e não é indexado
const times = new Set()
times.add('Barcelona')
times.add('Cruzeiro').add('Botafogo').add('Palmeiras')
times.add('Brasil')
times.add('Barcelona') //vai ser ignorado, pois o set n aceita repetição

console.log(times)
console.log(times.size) //pra ver o tamanho do set, qts elementos tem
console.log(times.has('barcelona')) //false
console.log(times.has('Barcelona')) //true
times.delete('Brasil')
console.log(times.has('Brasil')) //false, pq deletou o Brasil do set

//outra forma de criar o set
const nomes = ['Raquel', 'Robson', 'Ansbrevaldo', 'Juliana', 'Raquel']
const nomesSet = new Set(nomes)
console.log(nomesSet)