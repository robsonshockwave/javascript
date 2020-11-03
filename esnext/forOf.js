//for mexe com valores, já for in com índices
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assunstosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assunstosMap) {
    console.log(assunto)
}

for (let chave of assunstosMap.keys()) {
    console.log(chave)
}

for (let valor of assunstosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assunstosMap.entries()) { //destruturando
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log
}