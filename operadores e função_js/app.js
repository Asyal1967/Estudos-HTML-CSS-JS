let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

/*let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}

Operador	Nome	Exemplo	Resultado
==	Igual	A == B	Verdadeiro se A for igual a B
!=	Diferente	A != B	Verdadeiro se A não for igual a B
<	Menor que	A < B	Verdadeiro se A for menor que B
>	Maior que	A > B	Verdadeiro se A for maior que B
<=	Menor ou igual	A <= B	Verdadeiro se A for menor ou igual a B.
>=	Maior ou igual	A >= B	Verdadeiro se A for maior ou igual a B.


Operador	Nome	Exemplo	Resultado
&&	E / AND	(A > B) && (B == C)	Verdadeiro se A fo maior que B E B for igual a C
ǀǀ	OU / OR	(A > B) ǀǀ (B == C)	Verdadeiro se A for maior que B OU B for igual a C
!	NEGAÇÃO	!(A == B)	Verdadeiro se A NÃO for igual a B

//Tipo de Função	Exemplo de Código	Uso
Sem retorno e sem parâmetro	function saudacao() { ... }	Execução de bloco de código simples.
Sem retorno e com parâmetro	function cumprimentar(nome) { ... }	Execução de bloco de código com argumentos.
Com retorno e sem parâmetro	function gerarNumeroAleatorio() { ... }	Cálculo e retorno de um valor específico.
Com retorno e com parâmetro	function somar(a, b) { ... }	Cálculo e retorno baseado em argumentos.
Função anônima	let saudacao = function() { ... };	Definição de função sem nome localmente.
Arrow function	let quadrado = x => x * x;	Definição concisa de funções curtas.
