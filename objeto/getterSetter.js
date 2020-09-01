const sequencia = {
    _valor: 1, //convenção, está mostrando pros dev que esta variável é pretendida ser acessada apenas internamente dentro desse objeto sequência, mas nada q impeça dela ser modificada
    //get e set são funções que dentros os valores são acessados(get), nelas podem fazer validação, processamento(set)... 
    get valor() { //ela vai pegar o valor e retornar
        return this._valor++ //vai pegar o valor, vai retornar e dps vai somar com mais um
    },
    //js não aceita sobrecarga de métodos, ou seja, métodos com o mesmo nome, exceto no get e set
    set valor(valor) { //ela vai pegar o valor e fazer uma validação
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //vai ignorar o set pois o valor < this._valor
console.log(sequencia.valor, sequencia.valor)