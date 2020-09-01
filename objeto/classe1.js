class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { //constructor(){} = função que vai ser chamada no momento em que essa classe for instanciada
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancametos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancametos.push(l)) //está pegando cada elemento do array e dando push no array que pertence ao objeto
        console.log(lancamentos)
    }

    sumario() {
        let valorConsolidado = 0
        console.log(this.lancametos)
        this.lancametos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())