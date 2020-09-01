const fabricantes = ["Chevrolet", "BMW", "Ferrari"]

function imprimir(nome, indice) { //no forEach primeiro ele sempre vai receber o valor e dps o indice
    console.log(`${indice + 1}. ${nome}`)
}

//ideia do callback é passar uma função pra outra função e quando determinado evento acontecer essa determinada função irá ser chamada de volta

fabricantes.forEach(imprimir) //forEach() é uma função de fabricantes, já que ele é array
//pra cada elemento que ele achar no array vai chamar a função imprimir
//esse é um exemplo de função callback :)

fabricantes.forEach(function(fabricante) {
    console.log(fabricante) //o parametro fabricante é basicamente cada elemento do array
})

//o evento é cada elemento percorrido no array, por isso é callback