function teste1(num) {
    if(num > 7) //SEMPRE USE CHAVES
        console.log(num) //aqui não tem o bloco {}, ele não é obrigatório, porém ele irá considerar só essa linha de código
        console.log('Final') //essa vai ser a mesma coisa q n estiver dentro do bloco, irá imprimir toda vez pois n está na condição
}

teste1(6)
teste1(8)

function teste2(num2) {
    if(num > 7); { //não use ; no if e em todas estruturas de controle
        console.log(num)
    }
}
/* A FUNÇÃO DE CIMA SERIA A MESMA COISA QUE ISSO, LOGO IRIA DEIXAR PASSAR OS DOIS NÚMEROS, CUIDADO COM A IDENTAÇÃO
function teste2(num2) {
    if(num > 7)
        ; 
    
    {
        console.log(num)
    }
}
*/
teste2(6) //viu q bizarro?
teste2(8)