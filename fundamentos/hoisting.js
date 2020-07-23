//hoisting é pegar uma variável e jogar pra cima e toda vez que usar ela acima doq foi declarada seu resultado vai ser undefined, usa isso no var
console.log('a =', a)

var a = 2

console.log('a =', a)

//mesmo dentro da função isso ocorre
function teste2() {
    console.log('a =', b)

    var b = 2

    console.log('b =', b)
}

teste2()

//NÃO HÁ MOTIVOS DE USAR O HOISTING