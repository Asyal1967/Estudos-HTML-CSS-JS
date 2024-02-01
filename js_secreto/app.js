let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function textoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    textoNaTela('h1', 'Jogo do número secreto');
    textoNaTela('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentatvivas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            textoNaTela('p','O númeron secreto e menor');
        } else {
            textoNaTela('p','O numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}