let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
let chute ;
let tentativas = 1;
let numMaximo = 5000;

// LOOP WHILE CHUTE != DO NUMERO S
while (chute != numeroSecreto){ 
    chute = prompt(`Escolha um número entre 1 a ${numMaximo}`);
    // NUMERO SECRETO CORRETO
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`VOCÊ ACERTOU O NÚMERO SECRETO ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
