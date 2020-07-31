/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo ao jogo de Blackjack!")

 if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Vamos jogar")
      const carta1 = comprarCarta()
      const carta2 = comprarCarta()
      const carta3 = comprarCarta()
      const carta4 = comprarCarta()

      const pontuacaoUsuario = carta1.valor + carta2.valor
      const pontuacaoComputador = carta3.valor + carta4.valor

      console.log(`Usuario - cartas: ${carta1.texto}  ${carta2.texto} - pontuação: ${pontuacaoUsuario}`) 
      console.log(`Computador - cartas: ${carta3.texto}  ${carta4.texto} - pontuação ${pontuacaoComputador}`) 

      if(pontuacaoUsuario === pontuacaoComputador){
         console.log("Empate")
      } else if ( pontuacaoUsuario > pontuacaoComputador ) {
         console.log("O usuario ganhou!")
      } else {
         console.log("O computador ganhou!")
      }   
    
 } else {
    console.log("O jogo acabou")
 }