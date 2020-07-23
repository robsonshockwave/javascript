const funcs = []

for (var i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//PROBLEMA HISTORICO DO JAVASCRIPT, POIS O VAR NÃO TEM ESCOPO DE FUNÇÃO

//use a cabeça q vc verá o erro