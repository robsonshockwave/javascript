let contador = 1

while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) { //use let no for
    console.log(`i = ${i}`)
    console.log(`contador = ${contador}`)
    contador++
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i = 0; i < notas.length; i++) { //esse length vai verificar o tamanho do array
    console.log(`nota = ${notas[i]}`)
}