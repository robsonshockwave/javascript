console.log(soma(3, 4)) //viu?
//console.log(sub(4, 3)) //já aqui vai dar erro, só pode chamar dps da declaração
//console.log(mult(4, 3)) //já aqui vai dar erro, só pode chamar dps da declaração

// function declaration
function soma(x, y) { //dessa forma pode antes mesmo de declarar ela chamar ela
    return x + y
}

// function expression
const sub = function (x, y) { //dessa forma NÃO pode antes mesmo de declarar ela chamar ela
    return x - y
}

// named function expression
const mult = function mult(x, y) { //pouca usada, quando tiver debugando pode aparecer o nome dela
    return x * y                  //dessa forma NÃO pode antes mesmo de declarar ela chamar ela
}

//PRIMEIRO O CARREGADOR CARREGA TODAS AS FUNÇÕES PRA DEPOIS RODAR O CÓDIGO