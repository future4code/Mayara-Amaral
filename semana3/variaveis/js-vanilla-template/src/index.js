//Exercícios de interpretação de código

/* Exercício 1:

    a = 10
    b = 10

    console.log(b)

    b = 5
    console.log(a, b)

    Será impresso no console:
    10
    5
*/

/* Exercício 2: 

    a = 10
    b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)

    Será impresso no console:
    10
    10
    10

*/

//Exercícios de escrita de código 

/*Exercício 1*/

let nome
let idade 
console.log(typeof(nome), typeof(idade))

// O resultado que foi impresso no console foi undefined, pois não foi atribuído nenhum valor a essas variáveis.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof(nome), typeof(idade))

/*O resultado impresso no console foi string em ambas as respostas. Provavelmente o prompt interpreta o a idade como string*/

console.log("Olá", nome, "você tem", idade, "anos.")



/* Exercício 2 */

let pergunta1 = "1. Qual  é a sua série favorita?"
let pergunta2 = "2. Qual é a sua comida favorita?"
let pergunta3 = "3. Para onde viajou por último?"
let pergunta4 = "4. Em que ano você nasceu?"
let pergunta5 = "5. Qual é o nome da sua mãe?"

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)
let resposta4 = prompt(pergunta4)
let resposta5 = prompt(pergunta5)

console.log(pergunta1)
console.log(resposta1)

console.log(pergunta2)
console.log(resposta2)

console.log(pergunta3)
console.log(resposta3)

console.log(pergunta4)
console.log(resposta4)

console.log(pergunta5)
console.log(resposta5)

/*Exercício 3*/

let array = ["pizza", "hamburguer", "abobrinha", "peixe frito", "bolo"]

//a:
console.log(array)

//b:
console.log("Essas são minhas comidas favoritas:")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//c:
let comidaFavorita = prompt("Qual é a sua comida favorita?")

array[1] = comidaFavorita

console.log(array)

/*Exercício 4*/

let perguntas = ["Você está sentado?", "Você acordou tarde hoje?", "Você gosta de dançar?"]
let respostas = [true, false, true]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])



