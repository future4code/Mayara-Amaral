/* ~~~~~~~~EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO~~~~~~~~ */

//Exercício 1:

/* O código verifica se o número digitado pelo usuário é par ou ímpar. Se o número for par ele imprime no console: "Passou no teste". Se o número for ímpar, ele imprime no console: "Não passou no teste" */

//Exercício 2:

/* 
    a. O código serve para verificar o preço das frutas digitadas pelo usuário.
    b. O preço da fruta é R$ 2.25
    c. O preço da fruta é R$ 5
*/

//Exercício 3:

/*
    a. Está atribuindo a uma variável um valor digitado pelo usuário, transformando-o para o tipo number.
    b. A mensagem seria: Esse número passou no teste. Se fosse o número -10 daria um erro de: mensagem is not defined. 
    c. Sim, porque o escopo "pai" não identifica a variável atribuída dentro do escopo "filho".
*/

/* ~~~~~~~~EXERCÍCIO DE ESCRITA DE CÓDIGO~~~~~~~~ */

//Exercício 4:

    let idade = Number(prompt("Digite a sua idade:"))

    if(idade >= 18){
        console.log("Você pode dirigir!")
    } else {
        console.log("Você ainda não pode dirigir!")
    }

//Exercício 5:
    
    let turno = prompt("Digite o turno em que você estuda: M - matutino, V - vespertino ou N - noturno.").toUpperCase()

    if(turno === "M"){
        console.log("Bom dia!")
    } else if (turno === "V") {
        console.log("Boa tarde!")
    } else if (turno === "N") {
        console.log("Boa noite!")
    } else {
        console.log("Digite um turno válido!")
    }

//Exercício 6:

    let turno = prompt("Digite o turno em que você estuda: M - matutino, V - vespertino ou N - noturno.").toUpperCase()

    switch(turno) {
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!")
            break
        case "N": 
            console.log("Boa noite!")
            break
        default:
            console.log("Digite um turno válido")
    }

// Exercício 7:

    let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
    let precoFilme = Number(prompt("Qual é o valor do ingresso?"))

    if(generoFilme === "fantasia" && precoFilme < 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }

// DESAFIOS

//1. 

    
    let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
    let precoFilme = Number(prompt("Qual é o valor do ingresso?"))
    let snacks = prompt("Digite quais snacks gostaria de comprar para assistir o filme:")
    
    if(generoFilme === "fantasia" && precoFilme <= 15) {
        console.log("Bom filme! .. com " + snacks)
    } else {
        console.log("Escolha outro filme :(")
    }

//2. 

    let nomeCompleto = prompt("Digite seu nome completo: ").toUpperCase()
    let tipoDeJogo = prompt("Digite o tipo de jogo: Se INTERNACIONAL, digite IN. Se DOMESTICO, digite DO.").toUpperCase()
    let etapaDoJogo = prompt("Digite a etapa do jogo: SF - semi-final,  DT - decisão 3º lugar ou  FI - final.").toUpperCase()
    let categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4"))
    let qtdeIngressos = Number(prompt("Digite a quantidade de ingressos:"))
    let valor
    let valorTotal 

    if(tipoDeJogo === "IN"){
        if(etapaDoJogo === "SF"){
            switch(categoria){
                case 1:
                valor = 1320/4.10
                break
                case 2:
                valor = 880/4.10
                break
                case 3:
                valor = 550/4.10
                break
                case 4:
                valor = 220/4.10
                break
                default: 
                console.log("Digite uma categoria válida!")
            }
        } else if(etapaDoJogo === "DT") {
            switch(categoria){
                case 1:
                valor = 660/4.10
                break
                case 2:
                valor = 440/4.10
                break
                case 3:
                valor = 330/4.10
                break
                case 4:
                valor = 170/4.10
                break
                default: 
                console.log("Digite uma categoria válida!")
            }
        } else if (etapaDoJogo === "FI"){
            switch(categoria){
                case 1:
                valor = 1980/4.10 
                break
                case 2:
                valor = 1320/4.10
                break
                case 3:
                valor = 880/4.10
                break
                case 4:
                valor = 330/4.10
                break
                default: 
                console.log("Digite uma categoria válida!")
            }
        }

        valorTotal = (valor * qtdeIngressos) + "US$"
    
        console.log(
            "----Dados da compra----",
            "Nome do cliente", nomeCompleto,
            "Tipo de jogo:", tipoDeJogo,
            "Etapa do jogo:", etapaDoJogo,
            "Quantidade de ingressos", qtdeIngressos,
            "-----Valores-----",
            "Valor do ingresso:", valor,
            "Valor Total:", valorTotal
        )

    } else if (tipoDeJogo === "DO") {
        if(etapaDoJogo === "SF"){
            switch(categoria){
                case 1:
                valor = 1320
                break
                case 2:
                valor = 880
                break
                case 3:
                valor = 550
                break
                case 4:
                valor = 220
                break
                default: 
                console.log("Digite uma categoria válida!")
            }
        } else if(etapaDoJogo === "DT") {
            switch(categoria){
                case 1:
                valor = 660
                break
                case 2:
                valor = 440
                break
                case 3:
                valor = 330
                break
                case 4:
                valor = 170
                break
                default: 
                console.log("Digite uma categoria válida!")
            }
        } else if (etapaDoJogo === "FI"){
            switch(categoria){
                case 1:
                valor = 1980
                break
                case 2:
                valor = 1320
                break
                case 3:
                valor = 880
                break
                case 4:
                valor = 330
                break
                default: 
                console.log("Digite uma categoria válida!")
            }
        }
        
        valorTotal = "R$" + (valor * qtdeIngressos)
        
        console.log(
            "----Dados da compra----",
            "Nome do cliente", nomeCompleto,
            "Tipo de jogo:", tipoDeJogo,
            "Etapa do jogo:", etapaDoJogo,
            "Quantidade de ingressos", quantidade,
            "-----Valores-----",
            "Valor do ingresso:", valor,
            "Valor Total:", valorTotal
        )   
    }