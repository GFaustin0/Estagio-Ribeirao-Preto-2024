/* 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?

SOMA = 91
*/



/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa 
na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne 
uma mensagem avisando se o número informado pertence ou não a sequência. */



function checkFibonacci(number) {
  if (number === 0) {
    return true
  }

  let n1 = 0
  let n2 = 1
  let fib = n2

  while (fib < number) {
    fib = n1 + n2
    n1 = n2
    n2 = fib
  }

  return fib === number
}

function main() {
  let number = Number(prompt("Insira um numero: "))
  if (checkFibonacci(number)) {
    console.log(number + " Está na sequencia.")
  } else {
    console.log(number + " Não faz parte da sequencia.")
  }
}

main()


/* 
3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, (9) // Sequencia de numero impar 

b) 2, 4, 8, 16, 32, 64, (128) // Multiplicando x2 o numero antecessor

c) 0, 1, 4, 9, 16, 25, 36, (49) // Somando o proximo numero impar ao antecessor (1 + 3 = 4, 4 + 5 = 9 ...)

d) 4, 16, 36, 64, (100) // a diferença entre o numero antecessor + 8 ( 16 - 4 = 12 12 + 8 = 20 20 + 16 = 36)

e) 1, 1, 2, 3, 5, 8, (13) // somando os dois números antecessores 

f) 2, 10, 12, 16, 17, 18, 19, (200) // Todos os números começam com a letra D

*/



/* 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? */


/* Ligando dois interruptores (por exemplo 1, 2 ), se eu deixar acesso por alguns minutos a lampada aquecera, então assim
posso desligar um dos interruptores (exemplo o primeiro), vou até algumas das sala, se caso a lampada estiver acessa,
está é a sala do segundo interruptor, vou ate outra sala, se a lampada estiver apagada e quente, está é a sala do primeiro
interruptor, sendo a assim a sala que não fui será a do terceiro interruptor 
*/



/*
5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function reverseText() {
  let insertText = prompt('digite o texto escolhido')
  let newText = "";
  for (let i = insertText.length - 1; i >= 0; i--) {
    newText += insertText[i];
  }
  return alert(newText)
}
reverseText()



