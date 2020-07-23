function tratarErroELancar(erro) {
    //throw new Error('Existe um erro no sistema...') //ainda sim vai gerar o erro mas encima terá essa mensagem
    //throw 10 //vai dar o erro e mostrar o numero 10 no final
    //throw true //vai dar o erro e mostrar true no final
    //throw 'mensagem' //vai dar o erro e mostrar a mensagem no final
    throw { //a partir disso dá pra ir capturando erros
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}

function imprimirNomeGritado(obj) {
    try { //bloco que potencialmente pode gerar algum tipo de erro ou problema
        console.log(obj.name.toUpperCase() + '!!!') //vai converter todas letras em maiúsculas
    } catch (e) { //para tratar ou mostrar o erro, sinalizar o erro, pode lançar um hash para q o usário mande e o dev descubra o erro
        tratarErroELancar(e)
    } finally {
        console.log('final') //esse finally irá mostrar mesmo com erro ou não
    }
}

const obj = { nome: 'Robson' }
imprimirNomeGritado(obj)