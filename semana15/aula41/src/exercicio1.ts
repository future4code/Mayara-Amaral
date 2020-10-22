//EXERCÍCIO 1
//a.

    // let minhaVariavel: string = 2
    // há um erro quando tento atribuir um número em uma variável do tipo string.

//b.

    let meuNumero: number = 2
    // para também aceitar string:
    let meuNumero2: number | string = "meu numero é 2"

//c.

    const meuObjeto: {
        nome: string,
        idade: number, 
        corFavorita: string
    } = {
        nome: "Mayara",
        idade:  22,
        corFavorita: "Rosa"
    }

    //tipagem do objeto
    type pessoa = {
        nome: string,
        idade: number,
        corFavorita: CoresArcoIris
    }

    // enum
    enum CoresArcoIris {
        VERMELHO = "vermelho",
        LARANJA = "laranja",
        AMARELO = "amarelo",
        VERDE = "verde",
        AZUL = "azul",
        ANIL = "anil",
        VIOLETA = "violeta"
    }

    // objeto criado
    const pessoa1: pessoa = {
        nome: "Mayara",
        idade: 22,
        corFavorita: CoresArcoIris.VIOLETA
    }

//d.

    const pessoa2: pessoa = {
        nome: "bananinha",
        idade: 12,
        corFavorita: CoresArcoIris.AMARELO
    }

    const pessoa3: pessoa = {
        nome: "Leandro",
        idade: 25,
        corFavorita: CoresArcoIris.AZUL
    }

    const pessoa4: pessoa = {
        nome: "Thiago",
        idade: 18,
        corFavorita: CoresArcoIris.VERDE
    }

    