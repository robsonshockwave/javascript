/* //Com callback
setTimeout(function() { //setTimeout primeiro passa uma função e por ultimo os segundos
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)
*/

//Com promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarPor().then(esperarPor).then(() => esperarPor(3000))
