function criptografarTexto() {
    const inputParaCriptografar = document.getElementById('local_do_txt');
    const inputDeSaida = document.getElementById('txt-final');

    if(inputParaCriptografar.value.includes(' ')) {
        let stringParaArray = inputParaCriptografar.value.split(' ');
        for (let iterador = 0; iterador < stringParaArray.length; iterador++) {
            stringParaArray[iterador] = criptografar(stringParaArray[iterador]);
        }
        stringParaArray = stringParaArray.join(' ');
        console.log(stringParaArray);
        inputDeSaida.value = stringParaArray;
    } 
    // chavesDeCodificacao[1][1]
    
}

/**
 * 
 * @param {string} palavra
 * @returns {string}
 */
function criptografar(palavra) {
    let arrayDeCaracteres = palavra.split('');
    for (let j = 0; j < arrayDeCaracteres.length; j++) {
        if (arrayDeCaracteres[j] === 'a') {
            arrayDeCaracteres[j] = 'ai';
        } else if (arrayDeCaracteres[j] === 'e') {
            arrayDeCaracteres[j] = 'enter';
        } else if (arrayDeCaracteres[j] === 'i') {
            arrayDeCaracteres[j] = 'imes';
        } else if (arrayDeCaracteres[j] === 'o') {
            arrayDeCaracteres[j] = 'ober';
        } else if (arrayDeCaracteres[j] === 'u') {
            arrayDeCaracteres[j] = 'ufat';
        }
    }
    return arrayDeCaracteres.join('');
}