function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { //resolve vai ser chamado quando a promessa for atendida
        setTimeout(() => {
          resolve(frase) //aqui aceita apenas um único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal').then(frase => frase.concat('?!?')).then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //pra tratar um erro usa o função .catch
//pra acessar o resultado de uma promessa usa o .then
//pode encadear quantos .then quiser, o resultado de um vai passando pro outro
