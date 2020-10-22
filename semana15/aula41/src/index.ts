//EXERCÍCIO 2.

import { obterEstatisticas } from "./exercicio2";
import { imprimeNumeros } from "./exercicio5";
import { verificaIdadeHistorica } from "./exercicio6";
import { recebeProdutos } from "./exercicio7";

const numbers = [1,8,5,6,12,10]

console.log(obterEstatisticas(numbers))

//EXERCÍCIO 5
imprimeNumeros(5,10, "subtracao")

//EXERCÍCIO 6
verificaIdadeHistorica(1500)

//EXERCICIO 7
type produto = {
    nome: string, 
    preco: number,
    classificacao: string
}

const produto1: produto = {
    nome: "Calcinha",
    preco: 10,
    classificacao: "intimas"
}

const produto2: produto = {
    nome: "Calcinha",
    preco: 15,
    classificacao: "intimas"
}

const produto3: produto = {
    nome: "biquini",
    preco: 45,
    classificacao: "banho"
}

const Produtinhos: Array<produto> = [produto1, produto2]

recebeProdutos(Produtinhos, "intimas")