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
        A função recebe um array e devolve outro array com todos os números pares multiplicados por ele mesmo.
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
            const soma = a + b            
            return soma
        }

        const resultado = somaDois(2,5)
        console.log(resultado)   
    //b.
        function doisNumeros(a, b){
            if (a >= b) {
                return true
            } else {
                return false
            }
        }

        const maior = doisNumeros(5, 6)
        console.log(maior)
    
    //c. 
        function imprimeMensagem(mensagem) {
           let texto = mensagem
           for(let i = 0; i < 10; i++){
                console.log(texto)
           }        
        }

        imprimeMensagem("Oi, essa mensagem aparecerá 10x")

//6.
    //a.
        const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
        
        function meuArray(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
            const array = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
            return array.length           
        }

        const tamanhoArray = meuArray(10, 23, 45, 78, 90, 52, 35, 67, 84, 22)
        console.log(tamanhoArray)

    //b.
        function verificaPar(numero) {
            if(numero % 2 === 0){
                return true
            } else {
                return false
            }
        }

        const numeroEhPar = verificaPar(2)
        console.log(numeroEhPar)
    
    //c. 
        function meuArray2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10){
            const array2 = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
            let numeroPar = []
            
            for (let i of array2) {
                if(i%2 === 0){                    
                    numeroPar.push(i)
                }
            }

            return numeroPar
        }

        let numerosPares = meuArray2(10, 23, 45, 78, 90, 52, 35, 67, 84, 22)
        console.log(numerosPares)
    
    //d. 
        function meuArray2(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10){
            const array2 = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
            let numeroPar = []

            for (let i of array2) {
                if(verificaPar(i)){                    
                    numeroPar.push(i)
                }
            }

            return numeroPar
        }



        let numerosPares2 = meuArray2(20, 22, 48, 75, 91, 52, 36, 68, 84, 22)
        console.log(numerosPares2)



            
