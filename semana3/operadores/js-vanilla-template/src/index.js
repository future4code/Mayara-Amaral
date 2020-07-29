/* Exercícios de interpretação de código */

/* Exercício 1:

    a. false
    b. false
    c. true
    d. boolean

*/

/* Exercício 2:

    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9

*/

/*------- Exercícios de escrita de código -------- */

//Exercício 1:

let idade = Number(prompt("Qual é a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou melhor amiga?"))

let idadeEhMaior = idade > idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu melhor amigo? " + idadeEhMaior)

console.log(idade - idadeMelhorAmigo)

//Exercício 2:

let numeroPar = Number(prompt("Insira um número par:"))
console.log(numeroPar%2)

/* 
    c. Sim, o resto da divisão de qualquer número par dividido por 2 é sempre 0.
    d. Se o usuário escrever um número ímpar o resto sempre dará 1 em uma divisão por 2.

*/

//Exercício 3:

let listaDeTarefas = []
let tarefa1 = prompt("Escreva uma tarefa que você precisa fazer hoje:")
let tarefa2 = prompt("Escreva mais uma tarefa que você precisa fazer hoje:")
let tarefa3 = prompt("Escreva mais uma tarefa que você precisa fazer hoje:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let i = Number(prompt("Digite o índice da tarefa que você já realizou (de 0 a 2): "))

listaDeTarefas.splice(i,1)

console.log(listaDeTarefas)

//Exercício 4:

let nomeDoUsuario = prompt("Digite o seu nome:")
let email = prompt("Digite o seu e-mail:")

console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario)


/* ~~~~~~~~~~~~ DESAFIOS ~~~~~~~~~~ */

let fahrenheit
let celsius 
let resultado

//a. 

fahrenheit = 77
resultado = (((fahrenheit - 32) * 5) / 9 + 273.15)
console.log(resultado + " K")

//b. 

celsius = 80
resultado = (((celsius*9)/5) + 32)
console.log(resultado + " ºF")

//c. 

celsius = 30
resultado = (((celsius*9)/5) + 32)
console.log(resultado + " ºF")

resultado = celsius + 273.15
console.log(resultado + " K")

//d. 

celsius = Number(prompt("Digite a temperatura em ºC para converter para ºF e Kelvin: "))

resultado = (((celsius*9)/5) + 32)
console.log(resultado + " ºF")

resultado = celsius + 273.15
console.log(resultado + " K")












