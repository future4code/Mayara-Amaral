//EXERCÍCIO 2.
//a.

    export function obterEstatisticas(numeros: number[]) {

        const numerosOrdenados: number[] = numeros.sort(
            (a: number, b:number) => a - b 
        )

        let soma: number = 0

        for (let num of numeros) {
            soma += num
        }

        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }

        return estatisticas
    }

//b. 
    //const estatisticas: object = {}

//c.

    type dados = {
        numeros: Array<number>,
        obterEstatisticas: (numeros: Array<number>) => object
    }

    


