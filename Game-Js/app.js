alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 8;
console.log (numeroSecreto)
let chute;

//enquanto o chute não for igual ao numeroSecreto...
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número entre 1 e 10')

    //Se o chute for igual ao numero secreto faça isso...
    if ( chute == numeroSecreto) {
    alert (`Voce descobriu o numero secreto! (${numeroSecreto})`); //template String
    }  else { 
         if (chute > numeroSecreto) {
        alert (`O numero secreto é menor que ${chute}`);
    } else { //se a firmação for falsa execute isso...
        alert (`O numero secreto é maior que ${chute}`)
    }
}
}



