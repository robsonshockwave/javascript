Array.prototype.forEach2 = function(callback) {
    console.log(typeof callback) //É dessa forma porque, para cada elemento do array, essa função precisa ser chamada, passando-se parâmetros diferentes. 
    for(let i = 0; i < this.length; i++) { //esse callback é bugado de entender
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Robson', 'Raquel']

//foreach() = VALOR, INDICE, ARRAY

aprovados.forEach2(function(nome, indice) { //callback pra cada interação do array, passando o elemento e o indice do elemento
    console.log(`${indice + 1} - ${nome}`)
})