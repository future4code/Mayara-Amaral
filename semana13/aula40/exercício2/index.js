//EXERCÍCIO 2

const operacao = process.argv[2]
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);

switch(operacao) {
    case "somar": 
        console.log(numero1 + numero2);
        break;
    case "subtrair": 
        console.log(numero1 - numero2);
        break;
    case "multiplicar":
        console.log(numero1 * numero2);
        break;
    case "dividir":
        console.log(numero1/numero2);
        break;
    default:
        console.log("Operação inválida")
}