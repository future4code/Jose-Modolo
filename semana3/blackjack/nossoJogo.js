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

 if(confirm("Quer iniciar uma nova rodada?")) {
   console.log ("Bem vindo ao Blackjack!")
    
   let jogadorCarta1 = comprarCarta()
   let jogadorCarta2 = comprarCarta()
   let computadorCarta1 = comprarCarta ()
   let computadorCarta2 = comprarCarta ()
   let jogadorPontuacao = jogadorCarta1.valor + jogadorCarta2.valor
   let computadorPontuacao = computadorCarta1.valor + computadorCarta2.valor

   console.log(`Jogador - cartas: ${jogadorCarta1.texto} ${jogadorCarta2.texto} - ${jogadorPontuacao}`)
   console.log(`Computador - cartas: ${computadorCarta1.texto} ${computadorCarta2.texto} - ${computadorPontuacao}`)
   if (jogadorPontuacao > computadorPontuacao) {
      console.log("O jogador ganhou!")
   } else if (computadorPontuacao > jogadorPontuacao) {
      console.log("O computador ganhou!")
   } else if (jogadorPontuacao === computadorPontuacao) {
      console.log("Deu empate!")
   } 
    
 } else {
    console.log ("O jogo acabou")
    alert ("GAME OVER")
 }