let titulo = document.querySelector ('h1')
titulo.innerHTML = 'Hora do desafio';

function consoleButton() {
    console.log ('O botão foi clicado');
}

function alertButton() {
    alert ('Eu amo JS');
}

function promptButton() {
    let resposta = prompt('Insira o nome de uma cidade do Brasil');
    alert(`Estive em ${resposta} e lembrei de você`);
}

function somaButton() {
    let numero1 = parseInt(prompt('coloque um numero aqui') );
    let numero2 = parseInt(prompt('coloque um numero aqui') );
    resultado = numero1+numero2;
    alert (`O resultado é: ${resultado}`);
}