let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute ;
let tentativas = 1;

// LOOP WHILE CHUTE != DO NUMERO S
while (chute != numeroSecreto){ 
    chute = prompt('Escolha um número entre 1 a 100: ');
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
