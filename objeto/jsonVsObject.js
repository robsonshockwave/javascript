const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //a função foi excluida do json, pq o json é um formato de dados e não algo executado
//converteu o objeto pra um formato textual JSON

//vai pegar um JSON e transformar em um objeto
//console.log(JSON.parse("{ a: 9, b: 8, c: 7 }")) //vai dar erro, pois n permitiu passar pro JSON esse formato, é um formato inválido
//console.log(JSON.parse("{ 'a': 9, 'b': 8, 'c': 7 }")) //tbm vai dar erro
//tem q passar os atributos por aspadas duplas ""
console.log(JSON.parse('{ "a": 9, "b": 8, "c": 7 }')) //desse jeito vai dar certo, objeto criado a partir de um texto
console.loh(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) //está passando um number, string, boolean, function, array
//console.loh(JSON.parse('{ "a": 1, "b": \'string\', "c": true, "d": {}, "e": [] }')) //vai dar erro pq qualquer texto q colocar dentro do JSON tem q ser delimitado por aspas duplas e os atributos tbm





//JSON validator no google pra verificar se é json