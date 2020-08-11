//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { //não é obrigado a declarar o evento "e", uma vez que queira usar esse evento é preciso declarar ele na assinatura da função, pode ser uma normal ou arrow
    console.log('O evento ocorreu!')
}

/*document aponta pra pagina, pro "dom"
getElementsByTagName acessa os elementos a partir de uma tag e a resposta dessa função é um array, pra cessar um elemento tem q colocar o [0]
vamos acessar o body, nele na maioria vai ter só um unico body na pagina
onclick vai ser atribuida uma função sempre que o usuario clicar no body
daí quando feito isso vai receber uma função que vai receber como paramentro um evento

quando dá um f5 no browser o evento não fica mais registrado daí tem q ir lá registrar dnv*/
