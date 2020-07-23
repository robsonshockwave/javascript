const prod1 = {}
//um par = chave valor
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //não é legal usar atributos com espaço

console.log(prod1)

//pode fazer assim tbm
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{ //repetiu o obj e o blabla, mas lembre que esse obj está dentro de um obj e o blabla tá no objeto anterior que está contido o objeto dele, então pode repetir
            blabla: 1
        }
    }
}

console.log(prod2)