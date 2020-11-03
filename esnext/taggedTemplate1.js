// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

//basicamente, irá criar dois vetores na qual uma irá receber tudo oq foi digitado numa template string e outra irá receber os valores que está dentro de ${}.. e por fim irá gerar outra string que tá no return 'Outra string'