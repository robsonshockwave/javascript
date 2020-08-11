const valor = 'Global'

function minhaFuncao() { //o contexto lexico dessa função foi desse módulo/arquivo do node contextoLexico.js
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() //nesse caso irá imprimir o valor 'Global', a função carrega consigo o local em que ela foi definida
}

exec()