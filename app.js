// Primeira interação com o usuario
alert ('Boas vindas ao jogo do Numero secreto');

// Defini a variavel do numero secreto e o chute do usuario
let numeroSecreto = 95;
let chute;

// Hackerzinho que diz no console qual o numero secreto
console.log(numeroSecreto);

// Enquanto(repetição) chute não for igual a o numero secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 100');
    // Condição que verifica se o usuario acertou ou não, mas não escreve na tela e sim no console.
    if (chute == numeroSecreto) {
        alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto}`);
    } else {
        if(chute > numeroSecreto){
            alert(`O numero secreto é MENOR que ${chute}`);
        } else {
            alert(`O numero secreto é MAIOR que ${chute}`);
    }
}}
