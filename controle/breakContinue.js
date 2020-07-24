//break n influencia no if, influencia no switch, laço for e while e o continue no for e no while.. tente evitar o uso deles

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //nesse caso, ele irá desviar pra fora e nem irá imprimir o restante, pois ele n funciona no if
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue //nesse caso, ele irá ignorar apenas o indice 5 do array, NÃO irá continuar com os comando dentro do bloco até que ele acabe, mas irá continuar dentro do laço até q ele acabe
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //criou um rótulo associado ao laço for
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo //nesse caso, como eu rotulei, quando ele passar na condição irá parar o for externo, pois ele foi rotulado junto ao break 
        } //se n tivesse o rotulo ele iria servir pro for interno //break externo só dá pra fazer com rótulo
        console.log(`Par = ${a}, ${b}`)
    }
} //EVITE USAR ISSO

console.log('Fim!')