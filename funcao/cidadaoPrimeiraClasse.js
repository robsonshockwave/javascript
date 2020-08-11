// Função em JS é First-Class Object (Citizens)
// Higher-Order function - quando trata a função como um dado

//criar de forma literal
function fun1() { } //caso retorna nada ela retorna undefined

//Armazenar em umva variável
const fun2 = function () { } //função anônima atribuída numa constante
//se chamar a constante passando os parâmetros ele irá invocar a função, se simplesmente chamar a constante e passar como parâmetro
//para um função estará chamando diretamente a função em si, mas pra invocar tem q chamar com os parênteses

//Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2] //fun1 e fun2 dos exemplos acima
console.log(array[0](2, 3)) //vai imprimir 5

//Armazena em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar)
console.log(obj.falar()) //tem q ter os parênteses pra chamar a função

//Passar função como parâmetro
function run(fun) {
    fun() //tem q colocar os parênteses
}

/*
Aqui criei a função run que recebe uma função como parâmetro e a retorna
function run(fun) {
    return fun
}

Aqui eu criei uma variável e salvei nela o retorno da função run (que é a função que passei como parâmetro)
const variavel = run(function () { console.log('Executando...') })

Aqui, através da variável executei a função armazenada.
variavel()
Então lembre-se, retornar é diferente de executar.
*/

run(function() { console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //Já entendeu né?
//pode fazer isso tbm
const cincoMais = soma(2, 3)
cincoMais(4)