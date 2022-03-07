# TP3 JavaScript
Esse trabalho deve ser entregue como um arquivo único no formato tp3.nomeDoAluno.zip, contendo todas as questões solicitadas neste enunciado cada uma resolvida em um arquivo javascript. Exemplo questão 1 no arquivo q1.js.

Algumas restrições de trabalho:

 - Cada questão deve estar separada em um arquivo diferente e as variáveis de uma questão devem ser invisíveis para as demais questões, esse item é OBRIGATÓRIO;
 - O aluno deve, usar o esqueleto html provido no fim da questão como o arquivo index.html e ele não pode ser modificado em hipótese alguma, esse item é OBRIGATÓRIO;
 - O aluno não pode adicionar nenhum outro arquivo html ao trabalho, esse item é OBRIGATÓRIO;
 - Cada resposta deve estar contida dentro de sua div, assim a questão 1 deve ser toda construída dentro de <div id="q1"> <!-- seu conteúdo aqui --> </div>. Para isso o aluno deve manipular o DOM usando javascript, esse item é OBRIGATÓRIO;
 - Lembre-se que o componente deve alertar o usuário em caso de erro. Dica: use a função window.alert(mensagem);
 - Utilize ao máximo o paradigma de funções puras, veja uma explicação do conceito aqui.

## Questão 01

Lembra do Algoritmo 01 do TP2 vamos modificá-lo para:

Crie um componente que tenha duas caixas de texto que só aceitam números e tenha os rótulos (label) valor mínimo e valor máximo, checando sempre se o valor mínimo é menor que o valor máximo. O componente deve ainda possuir um botão calcular que quando acionado deve contar e imprimir quantos números existem entre valor mínimo e valor máximo (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível calcular se faltar algum dos números.
* exclusives - Ou seja, quantos números existem entre valor mínimo e valor máximo, excluindo o valor mínimo e valor máximo

## Questão 02
Lembra do Algoritmo 02 do TP2 vamos modificá-lo para:

Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de. O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado, imprimido o resultado e o tempo necessário para a execução. (Dica: usar o objeto javascript Date)

 - O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);
 - O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.

 ## Questão 03
Lembra do Algoritmo 03 do TP2 vamos modificá-lo para:

Crie um componente que possua um botão criar relatório que quando acionado deve imprimir um relatório de resultados da disciplina javascript para 20 alunos, no formato de tabela.

 - As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
 - Cada aluno deve ser representado por um registro composto por nr e nota
 - Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser ousar um pouco veja classes;
 - Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação.
 - Os registros devem ser armazenados em um array;
 - A impressão do relatório deve ter:
 - um título;
 - os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]"; e
 - um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)"

## Questão 04
Lembra do Algoritmo 04 do TP2 vamos modificá-lo para:

Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) Quantidade de números, valor mínimo e valor máximo. O componente deve ainda possuir um botão calcular que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los. Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). Lembre-se que para calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.

## Questão 05
Lembra do Algoritmo 05 do TP2 vamos modificá-lo para:

Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno.

## Questão 06
Criar um componente para criação de usuário e login em aplicação(sign up/ sign in).

No 1o cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário. Se for feito o login com sucesso, o componente deve levar ao cenário 2, se falhar ele deve alertar o usuário e voltar ao início do cenário 1. Se o usuário optar por criar um usuário, o componente deve criar o registro de um novo usuário e voltar para início do cenário 1.

No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão (ou link) para deslogar, retornando ao início do cenário 1.

Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os registros de usuários  armazenados.

 <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="app/app.css" />
    </head>

    <body>
    <div id="q1"></div>
    <div id="q2"></div>
    <div id="q3"></div>
    <div id="q4"></div>
    <div id="q5"></div>
    <div id="q6"></div>

    <script>
      var app = { };
      app.getComponente = function (nome){
      if( !app[nome]) {
      app[nome] = { $ctrl:{} };
    }
    return app[nome];
  };
  </script>
  <script src="q1.js"></script>
  <script src="q2.js"></script>
  <script src="q3.js"></script>
  <script src="q4.js"></script>
  <script src="q5.js"></script>
  <script src="q6.js"></script>
</body>
</html>