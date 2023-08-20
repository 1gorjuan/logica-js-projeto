alert("Boas vindas ao jogo do número secreto");
let SecretNumber = 29;
let UserGuess = prompt("Escolha um número entre 1 e 30");

if (UserGuess == SecretNumber) {
    console.log("Você acertou o número secreto");
}