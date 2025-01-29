alert('Bem-Vindo ao jogo do número secreto!');

let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 a 30: ')
// CONDIÇÃO DE ALTERNATIVA CERTA
if (chute == numeroSecreto) {
    alert(`VOCÊ ACERTOU O NÚMERO SECRETO ${numeroSecreto}!`)
} else {
    alert('VOCÊ ERROU!')
}
    


