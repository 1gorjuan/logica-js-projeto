alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 25;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Adcionando um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

//Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 30");
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Parabéns! você acertou o número secreto, que era ${numeroSecreto} com ${tentativas} tentativas `);
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }
}
