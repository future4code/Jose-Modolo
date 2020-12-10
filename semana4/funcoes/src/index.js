//EXERCICIO 1 
//a. O que vai ser impresso no console?
//Resposta:
//10 50

//b. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2)
//e minhaFuncao(10)? O que apareceria no console?
//Resposta:
// Nada será impresso, a variável não fora declarada.





//EXERCICIO 2 
//a. Explicite quais são as saídas impressas no console
//Resposta:
//Darvas
//Caio

//b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
//Resposta:
//Amanda
//Caio





//EXERCICIO 3 
//O código abaixo mostra uma função que recebe um array e devolve outro array.
//Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
//Resposta:
//Ele pega números pares e os transformam ao quadrado, sendo x o valor recebido no array,
//o operador porcentagem pega o resto de uma divisão, cada vez que voce divide por 2 o resto for zero,
//ele exponencia o numero. Um nome melhor para ela seria exponenciadorPar




//EXERCICIO 4
//a. A função não deve receber nenhum parâmetro
//e deve imprimir uma mensagem falando algumas informações sobre você, como:
//Resposta:
          
        // function minhaInf (){
        //     console.log ("Oi meu nome é Jose, tenho 25 anos, sou estudante")
        // }

//b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Resposta:
//

        // function informacoes (nome, idade, cidade, estudante){
        // if (estudante === true){
        // estudante = "sou estudante"
        // } else{
        //  estudante = "não sou estudante"
        // }
        // console.log(`Eu sou o ${nome}, tenho ${idade} anos, moro em ${cidade}, ${estudante}`)
        // }

        // informacoes("Jose", 25, "São Paulo", true)







//EXERCICIO 5
//a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e retorne o resultado. 
// Invoque a função e imprima no console o resultado.
// Resposta:
// const somaNumeros = function (num1, num2){
//   const soma = num1 + num2
//   return soma
// }
// const resultado = somaNumeros(5, 2)
// console.log(resultado)
        

//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou 
//igual ao segundo.
//Resposta:
// function doisNum(num1, num2){
//   if (num1 > num2){
//     return num1 > num2
//   } else{
//     console.log ("O primeiro numero não é maior que o segundo")
//   }
// }
// console.log("O primeiro numero é maior que o segundo,", doisNum(10, 5))

//c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes.
//(não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)
//Resposta:

// function escola(){
//   console.log("PLAY MORE VIDEO GAME :D")
// }
//   for(let i = 10; i !== 0; i--){
//   escola()
//}






//EXERCICIO 6
//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
//Resposta:

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// function quantidade(numeros){
//     return numeros.length
// };
// console.log(`A quantidade de numeros é:`, quantidade(array));


          



