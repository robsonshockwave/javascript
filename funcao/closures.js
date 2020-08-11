//Closute é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

//A função carrega a memória do local de suas origens, ou seja, isso é um closure

//Nesse cenário, a variável considerada será aquela cujo identificador estiver no escopo mais próximo daquele que faz referência a essa variável.