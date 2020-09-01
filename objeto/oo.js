//CÓDIGO NÃO EXECUTÁVEL!

//Procedural
//bloco de código que pode ser reutilizado reutilizar em vários lugares
//funções que manipulam dados
processamento(valor1, valor2, valor3) //irá processar esses dados

//OO
//dados que dentro tem funções
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){ //dentro do objetos podem ter coportamentos
        //...
    }
}
                        //Foco ásspi a ser objeto
objeto.processamento() //a função processamento pertence ao objeto, e dentro desse objeto tem os valores que serão usados dentro do processamento
//objeto é uma capsula que tem comportamentos e atributos

//Principios importantes:
//1. abstração
/*pra determinados tipos de coisas precisamos abstrair determinadas coisas, exemplo, no detran precisa abstrair que terá chaci,
já na oficina mecância o aerofolio*/

//2. encapsulamento
/*precisa saber da interface, exemplo: carro, nele vc precisa saber sobre o volante, pedaus, quando abastecer, mas n precisa saber
como é a queima do combustível, esse estará encapsulado
encapsulamento é o interno*/

//3. herança
/*recebe atributos e comportamentos de um objeto pai, exemplo: na vida vc recebeu caracteristicas/atributos do pai e da mãe, olho 
da mãe, cabelo do pai
relação é um
OBS.: composição tem um != relação é um (herança)
composição tem um, exemplo, carro tem uma porta, a porta tem um parafuso...
relação é um, o ser humano é um animal, o ser humano é um mamífero e o mamífero é um animal
há uma cadeira, tipo hierarquismo, exemplo: começa com a objeto principal "animal", dps uma objeto filho "mamífero" e dps o "ser humano"
tome cuidado, mamífero é um animal mas nem todo animal é um mamífero, nem toda relação é um quer dizer herança*/
//Melhor favorecer a composição do que a herança, nem toda relação é um precisa mapear como herança, pode mapear como composição tbm
//priorize a composição tem um doq a relação é um

//4. poliformismo
/*significa multiplas formas, exemplo: celular, pode ser iphone, pode ser samsumg, moto g
a partir do conceito generico consegue substituir a partir de objetos concretos, uma hora o celular aponta pro iphone, outra hora
pode substituir pro moto g
outro exemplo, tem uma variável do tipo carro, que pode atribuir uma ferrari, civic, uno
pq tem uma relação de herança de carro e esses tipos concretos, e quando tem essa relação de herança uma classe filha pode ser
referenciada numa variavel do tipo pai, ou seja, pode atribuir nessa variavel subtipos*/
//poliformismo é mais usado em liguagens tipadas

/*
A herança ocorre quando uma classe herda atributos ou métodos de sua superclasse, ou seja, o comportamento de sua superclasse.
Já o polimorfismo ocorre quando uma classe redefine o comportamento de sua superclasse, sobrescrevendo métodos ou alterando o
valor de atributos, por exemplo.
Ou seja, o polimorfismo pode ocorrer à partir da herança.
*/