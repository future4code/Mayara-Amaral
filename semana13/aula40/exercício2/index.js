//EXERCÍCIO 2

const operacao = process.argv[2];
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);

console.log(operacao, numero1, numero2)

if(operacao && numero1 && numero2) {

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
} else if (operacao && numero1) {
    console.log("Só recebi 2 parâmetros, preciso de três!")
} else if(operacao) {
    console.log("Só recebi 1 parâmetro, preciso de três!")
} else if (operacao === undefined) {
    console.log("Não recebi nenhum parâmetro, preciso de três!")
}