let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { //função arrow sempre é anônima, se quiser chamar ela depois tem que amarzena-la em uma variável ou constante
    return 2 * a
}

//forma mais reduzida ainda
dobro = a => 2 * a //não precisa ter return pois n tem o bloco da função, ele está implicito
//tira o parênteses quando tiver apenas um parâmetro

console.log(dobro(Math.PI)) //está passando o pi

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui sim um parametro, o _ é ele... mas pode ignorar esse parametro
console.log(ola())