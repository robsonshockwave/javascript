const cores = ['Vermelho', 'Azul', 'Verde']

for (let cor of cores) { //ao contrário do for in esse pegará os valores a partir de cada índice
    console.log(cor)
}

let palavraQualquer = "boo"

for (let caracteres of palavraQualquer) { //assim irá pegar cada caracter de uma palavra
    console.log(caracteres)
}

//De começo esse for of serve apenas para arrays