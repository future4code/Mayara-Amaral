// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)

//~~~~~~~~~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~~~~~~~//

//1.
    /* 
        a. 10 e 50
        b. A função retornaria os valores sem mostrar no console.
    */
//2.
    /*
        a. Apareceria os dois primeiros nomes do arrayDeNomes, no caso, Darvas e Goli.
        b. Apareceria no lugar de Darvas e Goli, Amanda e Caio.
    */
//3. 
    /*
        a.
    */
// ~~~~~~~~~~~~~~~ EXERCÍCIOS DE ESCRITA DE CÓDIGO ~~~~~~~~~~~~~~//

//4. 
    //a. 
        function sobreMim() {
            console.log(`Eu sou Mayara, tenho 22 anos, moro em Cuiabá, sou estudante e amo programação e desenhar.`)
        }

        sobreMim()
    //b.
        function sobre(nome, idade, cidade, estuda){
            if(estuda === true) {
                console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade}, e sou estudante.`)
            }
            else {
                console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade}, e NÃO sou estudante`)
            }
        }

        sobre("Mayara", 22, "Cuiabá", true)

//5.
    //a.
        function somaDois(a, b){
            return a + b
        }

        console.log(somaDois(2,2))
    //b.
        function doisNumeros(a, b){
            if (a >= b) {
                return true
            } else {
                return false
            }
        }

        console.log(doisNumeros(5,5))
    
    //c. 
        function imprimeMensagem(mensagem) {
           let texto = mensagem
           for(let i = 0; i < 10; i++){
                console.log(texto)
           }        
        }

        imprimeMensagem("Oi, essa mensagem aparecerá 10x")
        