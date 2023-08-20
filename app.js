alert("Boas vindas ao jogo do número secreto");
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }
}
let palaravraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! você acertou o número secreto, que era ${numeroSecreto} com ${tentativas} ${palaravraTentativa}. `);