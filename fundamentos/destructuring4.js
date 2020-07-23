function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //vai verificar se o minimo é maior q o max e caso for vai criar um array q fará a troca
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) vai dar erro, pois ele iria desestruturar algo q n existe, é null ou undefined