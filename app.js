// Primeira interação com o usuario
alert ('Boas vindas ao jogo do Numero secreto');

// Defini a variavel do nnumero secreto
let numeroSecreto = 29;

// Interação que pede o numero ao usuario para ele tantar acertar
let chute = prompt('Escolha um numero entre 1 e 30');

// Condição que verifica se o usuario acertou ou não, mas não escreve nasa na tela e sim no console.
if (chute == numeroSecreto) {
    console.log('Isso ai! você descobriu o numero secreto (5)');
}