{
    {
        {
            { 
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
//a variável VAR desde qaue não seja dentro de uma função ela ficará visível por todo código
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) iria dar erro, pois n dá pra acessar essa variável fora da função

var a = 30
console.log(a)
var a = 'Teste'
console.log(a) //verá que sobescreveu

//escopo global e função