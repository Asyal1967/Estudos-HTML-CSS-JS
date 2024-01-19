alert('Boas-vindas ao jogo do número secreto');
let numeroMaximo = 60;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;
//enquanto o chute não for igual ao numeroSecreto...
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 a ${numeroMaximo}`);

    //Se o chute for igual ao numero secreto faça isso...
    if ( chute == numeroSecreto) {
        break
    }  else { 
         if (chute > numeroSecreto) {
        alert (`O numero secreto é menor que ${chute}`);
        } else { //se a firmação for falsa execute isso...
        alert (`O numero secreto é maior que ${chute}`)
    }
    tentativas++
        }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternario ?(if) e :(else)
alert(`Voce descobriu o numero secreto! (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
   // alert (`Voce descobriu o numero secreto! (${numeroSecreto}) com ${tentativas} tentativas.`); //template String
//} else alert (`Voce descobriu o numero secreto! (${numeroSecreto}) com ${tentativas} tentativa.`);