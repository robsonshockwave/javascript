function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //se o primeiro for verdadeiro não há necessidade de olhar o segundo
    // o | apenas irá verificar bit a bit, convertendo em valores binários, bitwise
    const comprarTv50 = trabalho1 && trabalho2 //aqui há necessidade de olhar os dois
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor, por bit a bit, se o trabalhor1 ou trabalho2 forem diferentes um do outro
    const comprarTV32 = trabalho1 != trabalho2 //irá olhar os dois pra ver se é diferente
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTV32, manterSaudavel} /*quando omite a chave, simplesmente passa uma constante
    ou uma variável pra criação de um objeto (recurso novo do ECMA6), criação inteligente de objeto, ele cria o nome com seu proprio valor
    assim ele irá criar o nome e o valor dele já, não deixa de ser chave valor*/
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
