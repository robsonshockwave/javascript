console.log(Math.ceil(6.1)) //arredonda pra cima ou pra baixo

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //vai receber o atributo nome por parâmetro e vai atribuir a this.nome e 
                    //ele ficará visível para quem criar/instanciar um objeto do tipo Obj, irá ficar público
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

//notação ponto é literalmente o "." kkkkkk


