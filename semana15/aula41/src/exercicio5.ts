// EXERCÍCIO 5.

    export const imprimeNumeros = (a: number, b: number, operacao: string) => {
        switch(operacao){
            case "soma":
                console.log( a + b )
                break
            case "subtracao":
                console.log( a - b )
                break
            case "multiplicacao":
                console.log( a * b )
                break
            case "comparacao": 
                if( a > b){
                    console.log(`${a} é maior que ${b}`)
                } else if (b > a) {
                    console.log(`${b} é maior que ${a}`)
                } else {
                    console.log(`${a} = ${b}`)
                }
                break
            default:
                console.log("operação inválida")
        }
    }