// EXERCICIO 6.

export const verificaIdadeHistorica = (ano: number, sigla?: string): void => {
    // 100.000 AC - 4.000 AC - pre-historia
    // 4000 AC - 476  DC - idade antiga
    // 476 - 1453 DC - idade media
    // 1453 - 1789 DC - idade moderna
    // 1789 - ~ - idade contemporanea
    if(sigla === "AC") {
        if(ano > 4000){
            console.log("pre-historia")
        } else if (ano < 4000){
            console.log("idade antiga AC")
        }
    } else if (sigla === "DC" || sigla === undefined){
        if(ano < 476){
            console.log("idade antiga DC")
        } else if (ano < 1453 && ano > 476) {
            console.log("idade media")
        } else if (ano < 1789 && ano > 1453) {
            console.log("idade moderna")
        } else {
            console.log("idade contemporanea")
        }
    } else {
        console.log("ano inválido")
    }
}