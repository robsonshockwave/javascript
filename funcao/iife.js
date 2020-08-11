// IIFE -> Immediately Invoked Function Expression
//Expressão de função imediatamente invocada

(function() { //se criar var, let ou const só estará disponível apenas dentro dessa função
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

//sempre que puder fugir do escopo global usando essa forma é legal
//ESSA FUNÇÃO É INVOCADA IMEDIATAMENTE
//usa (function(){coloca oq vai ser invocado imediantamente aqui})()
