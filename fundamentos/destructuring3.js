function rand({min = 0, max = 1000}) { //aqui vai passar um objeto pra função e ao invés de usar a notação ponto, vai querer que ja tire do objeto o atributo min e o max e ja entrego os dois atributos prontos
    console.log(`Min: ${min} e Max: ${max}`)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({})) //objeto vazio, vai fazer navegar entre 0 e 1000
//console.log(rand()) vai dar erro, pois ele iria desestruturar algo q n existe, é null ou undefined