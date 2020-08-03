/* ~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~ */

//1.

/*
    O código está realizando um loop, que inicia no indice 0 e vai enquanto o indice for menor que 5.

*/

//2. 

 /* 
    a. Vai ser impresso no console todos os números que forem maior que 18.
    b. Não teria como acessar o índice da cada elemento da lista pelo for... of. Essa é a desvantagem. Teria que usar somente o for.

*/

// DESAFIO

/* Adicionaria um 0 na variável linha enquanto a quantidade atual for menor que a quantidadeTotal (digitada pelo usuario). No console ficaria assim:
 0
 00
 000
 0000
*/

/* ~~~~~~~~ EXERCÍCIOS DE ESCRITA DE CÓDIGO ~~~~~~~~~ */

//3.
    //a.
        let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

        for(let i = 0; i < array.length; i++){
            console.log(array[i])
        }
    //b.
        for(let i = 0; i < array.length; i++){
            console.log(array[i]/10)
        }
    //c.
        for(let i = 0; i < array.length; i++){
            if(array[i]%2 === 0){
                console.log(array[i])
            }
        }
    //d.
        for(let i = 0; i < array.length; i++){
            console.log(`O elemento do índice ${i} é ${array[i]}!`)
        }
    //e.
        let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        let maior = array[14]
        let menor = array[0]

        console.log(`o maior número é ${maior} e o menor número é ${menor}.`)



//DESAFIO

let numeroPensado = Number(prompt("Digite o número que você pensou"))
console.log("Vamos jogar!")

let chuteNumero
let tentativas = 0

while(chuteNumero != numeroPensado) {
    chuteNumero = Number(prompt("Chute um número que foi pensado: "))   
    console.log(`O número chutado foi ${chuteNumero}`)  
    
    if(chuteNumero === numeroPensado) {
        console.log(`Parabéns, você acertou!! o número pensado foi ${numeroPensado}`)             
        break
    } else if (chuteNumero > numeroPensado) {     
        console.log(`Errooooou!!! o número é menor`)
        tentativas = tentativas + 1
    } else if ( chuteNumero < numeroPensado) {    
        console.log(`Errouuuu!! o número é maior`)
        tentativas = tentativas + 1
    } else {        
        console.log(`Digite um número válido`)
    }   

    console.log(`tentativas: ${tentativas}`)
}


// ULTIMO DESAFIO 

let numeroPensado = Math.floor(Math.random() * 100)

let chuteNumero
let tentativas = 0

while(chuteNumero != numeroPensado) {
    chuteNumero = Number(prompt("Chute um número que foi pensado: "))   
    console.log(`O número chutado foi ${chuteNumero}`)  
    
    if(chuteNumero === numeroPensado) {
        console.log(`Parabéns, você acertou!! o número pensado foi ${numeroPensado}`)             
        break
    } else if (chuteNumero > numeroPensado) {     
        console.log(`Errooooou!!! o número é menor`)
        tentativas = tentativas + 1
    } else if ( chuteNumero < numeroPensado) {    
        console.log(`Errouuuu!! o número é maior`)
        tentativas = tentativas + 1
    } else {        
        console.log(`Digite um número válido`)
    }   

    console.log(`tentativas: ${tentativas}`)
}



