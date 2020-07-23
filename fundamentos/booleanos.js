let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 3
console.log(!!isAtivo)//verifica se o 3 é verdadeiro, n faz mt sentido de fazer isso aqui, mas se n fizer ele vai ser comportar como verdadeiro ou falso
console.log(!isAtivo)//verifica se o 3 é falso

console.log('os verdadeiros...')
//todos os números inteiros são verdadeiros com exceção do 0
console.log(!!5)
console.log(!!-1)

console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))

console.log('os falsos...')
//o 0 vai dar falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = ''))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //vai dar verdadeiro pois o ' ' é true
console.log(!!('' || null || 0)) //vai dar falso pois todos são false
console.log(('' || null || 0 || "epa")) //vai imprimir o primeiro valor verdadeiro