const funcs = []

for (let i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //mt complexo

//uma função tem a consciência de onde ela foi definida

let teste = 5
console.log(teste)
teste = 6
console.log(teste)

