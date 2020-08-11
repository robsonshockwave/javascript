/*
this ou self
seria uma forma de referenciar o objeto atual daquela execução
exemplo, uma classe que um aluno tem um nome e uma nota, todo aluno no sistema vai ter um nome e uma nota
e a partir dessa classe dá pra criar objetos, cado objeto criado vai ter o nome e nota, e vão ser idependentes um dos outros, exemplo:
um vai ser João com nota 6, o outro vai ser Ana com nota 4.4

O fato é que quando está num determinado código que pertence a esse objeto uma forma que tem de acessar que é o dono é o this

no browser:
function f1() { console.log( this === window ) }
f1() //vai dar true
this é sempre o objeto que está sendo referenciado naquele contexto de execução, que é o dono daquela função que está sendo executada naquele contexto

o this pode varia em javascript, dependendo ele não pode apontar pra tal coisa mais, como no caso do window
se chamar a partir de um clique no browser
document.getElementsByTagName('body')[0].onclick = f1 //associando o click na função f1
/ /vai dar false

Outro exemplo:
function f2() { console.log( this === document ) } //vai dar false
document.getElementsByTagName('body')[0].onclick = f2 //vai dar false tbm

function f3() { console.log( this === body ) }
document.getElementsByTagName('body')[0].onclick = f3 //vai dar true
de fato quem representa o this quando chama a função f3 é o próprio elemento que está clicando
mas se chamar f3 diretamente
f3()
não vai ser o body que está apontando pro this e sim o objeto window

Arrow function:
const f4 = () => console.log( this === window ) //vai dar true
document.getElementsByTagName('body')[0].onclick = f4 //vai dar true

quando é uma função tradicional o this pode variar com quem chamou a função, quando é com arrow function não varia NUNCA

o this vai ser definido no momento que a função for definida

na função arraw, o this passa a ser associado no local em que a função foi escrita, é associado ao contexto/escopo da palavra
exemplo: this === window (os dois são globais)

O this sempre é referente a um determinado contexto (ou escopo). Quando ele está no contexto (escopo) global, o this é referente 
ao documento, ou seja, ao arquivo que você está trabalhando. Ou, se você estiver num navegador web, o this vai ser referente à 
window (à janela do navegador).
Traduzindo talvez te ajude: a palavra this do Inglês pode ser traduzida para isto. Então quando ele faz a comparação se o 
this === global, ele quer saber se isto (ao que você está se referindo) é igual ao global, o que é verdade, nesse caso.
O this é sempre o objeto que está sendo referenciado num determinado contexto de execução.
*/