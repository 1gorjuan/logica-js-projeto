alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 25;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 30");

// se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}