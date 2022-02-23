/*
Este trabalho dever ser entregue como um arquivo único no formato 
tp4.nomeDoAluno.js,contendo todos os algoritmos na ordem que foram 
solicitados neste enunciado. O resultado de cada algoritmo deve ser 
precedido por uma string separadora do tipo "Iniciando Algoritmo Nr xx", 
onde xx é o número da questão. Caso o aluno não consiga criar alguns dos 
algoritmos ele deve imprimir no console a string "Algoritmo Nr xx não resolvido".
*/

/*
Algoritmo 01 - Contar e imprimir quantos números existem entre 0 e 1.000.000 
(exclusives*) que sejam múltiplos de 2 e 3 simultaneamente
* exclusives - Ou seja, quantos números existem entre 0 e 1.000.000, 
excluindo o 1 e o 1.000.000
*/

let splitter = "Iniciando Algoritmo Nr 01";

console.log(splitter);

let startNumber = 0;
let finalNumber = 100;
let range = [];

for (index = startNumber + 1; index < finalNumber; index++) {
  if (index % 2 == 0 && index % 3 == 0) {
    range.push(index);
  }
}

console.log(` A quantidade de  múltiplos de 2 e 3 ao mesmo tempo entre ${startNumber} e ${finalNumber} é : 
${range.length}
`);

console.log(`Os múltiplos de 2 e 3 ao mesmo tempo entre ${startNumber} e ${finalNumber} são:
`);

console.log(range);

/*
Algoritmo 02 Calcular o fatorial de 53, imprimido o resultado e o tempo necessário para a execução. (Dica: usar o objeto javascript Date)
- O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos)

Obs1.: lembro que o código deve calcular o fatorial e não apenas imprimir uma string com a resposta.
*/
splitter = "Iniciando Algoritmo Nr 02";

console.log(`
${splitter}
`);

let inicio = performance.now();
let fatorial = 53;
let resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
let tempoTotal = performance.now() - inicio;
console.log(`${fatorial}! = ${resultado} (${tempoTotal.toFixed(3)} milisegundos)`);

//n! = n · (n-1) · (n-2) … 3 · 2 · 1



/*
Algoritmo 03 - Imprimir um relatório de resultados da disciplina javascript para 20 alunos.
- As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
- Cada aluno deve ser representado por um registro composto por nr e nota;
- Os registros devem ser armazenados em um array;
- A impressão do relatório deve ter um título, os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]" e um rodapé no com estatística final no formato "APROVADOS: XX (xx%) | REPROVADOS: YY (yy%)"
*/

/*
Algoritmo 04 Criar um arrays com 1.000 números aleatórios não repetidos e ordená-los. Os números devem estar entre 0 e 5.000 (inclusives, ou seja incluindo o 0 e o 5.000).
*/

/*
Algoritmo 05 Crie uma FUNÇÃO que receba 3 números inteiros e imprima que tipo de triângulo eles formam, equilátero, isósceles ou escaleno.
Imprima o resultado da função para os valores (5,5,5), (45,45,90) e (25, 35, 45).
*/
