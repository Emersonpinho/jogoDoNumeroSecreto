// Primeira interação com o usuario
alert ('Boas vindas ao jogo do Numero secreto');

// Defini a variavel do nnumero secreto
let numeroSecreto = 4;

// Hackerzinho que diz no console qual o numero secreto
console.log(numeroSecreto);

// Interação que pede o numero ao usuario para ele tantar acertar
let chute = prompt('Escolha um numero entre 1 e 30');

// Condição que verifica se o usuario acertou ou não, mas não escreve na tela e sim no console.
if (chute == numeroSecreto) {
    alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}