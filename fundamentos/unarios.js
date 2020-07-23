let num1 = 1
let num2 = 2

num1++ //pos-fixada, acrescenta uma unidade a mais, ou seja, um
console.log(num1)
--num1 //pré-fixada, retira um da unidade, ou seja, tira um
console.log(num1)
//pré-fixada é mais adiantada, ou seja, tem uma precedência maior (prioridade maior)

console.log(++num1 === num2--) //vai dar true pq o ++ foi acrescentado antes da comparação e o -- só executado depois de comparar
                              //fez a operação ++ pegou o resultado, comparou com num2 e depois fez a operação --

console.log(num1 === num2)