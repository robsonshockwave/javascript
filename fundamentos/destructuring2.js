const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const teste = [10, 7, 9, 8]
console.log(teste)
const [t1, , t3, , t5, t6 = 0] = teste
console.log(t1, t3, t5, t6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //vai ignorar o primeiro elemento q é um array e vai pro segundo que é outro array
                                          //irá ignorar o primeiro elemento do array e pegará o segundo elemento que é o 6
console.log(nota)