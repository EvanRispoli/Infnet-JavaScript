class Aluno {
    constructor(id,name, grade, status) {
      this.id = id;
      this.name = name;
      this.grade = grade;
      this.status = status
    }
  }
  
function createHeader(varHtml) {
    let titleH1 = `<h1>Questão 03</h1>`
    let paragraphH1 = `<p>
                            Crie um componente que possua um botão criar relatório que quando acionado deve imprimir um relatório de 
                            resultados da disciplina javascript para 20 alunos, no formato de tabela.</br></br>
                            - As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;</br>
                            - Cada aluno deve ser representado por um registro composto por nr e nota</br>
                            - Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser ousar um pouco veja classes;</br>
                            - Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação.</br>
                            - Os registros devem ser armazenados em um array;</br>
                            - A impressão do relatório deve ter:</br>
                            <p>
                                - um título;</br>
                                - os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]"; e</br>
                                - um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)"</br>
                            </p>
                        </p>`
    let titleH2 = `<h2>Desenvolvimento:</h2>`
    let paragrapH2 = `<p>Pressione o botão para imprimir o resultado.</p>`
    varHtml.innerHTML = `${titleH1} ${paragraphH1} ${titleH2} ${paragrapH2}`
    return
}

function createForm(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <div>
                <input type="button" value="Imprime resultados" id="botao" onclick="processaQ3()">
            </div> 
            <div>
                <h2>Resultado</h2>

                <div>
                    <table class="table" id="tabela">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Nome Aluno</th>
                            <th>Nota</th>
                            <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody id="tabelaConteudo">
                        </tbody>
                        <tfoot id="tabelaFooter"></tfoot>
                        </table>
                    <div id="resultado"></div>
                </div>
            </div>
        </form>`
    return
}

function createTable(varHtml, grades){
    varHtml.innerHTML +=
            `<tr class="${grades.status}">
                <td>${grades.id}</td>
                <td>${grades.name}</td>
                <td>${grades.grade}</td>
                <td>${grades.status}</td>
            </tr>`
}

function createFooter(aprovados, reprovados){
    let ratioAprovados = Math.round(((aprovados/(aprovados + reprovados)*100)));
    let ratioReprovados = Math.round(((reprovados/(aprovados + reprovados)*100)));
    let footerHtml = document.getElementById("tabelaFooter")
    footerHtml.innerHTML += 
        `<tr>
            <td colspan="4">
                Alunos aprovados: ${aprovados} ( ${ratioAprovados}% )</br>
                Alunos reprovados: ${reprovados} ( ${ratioReprovados}% )
            </td>
        </tr>`
    
  }
  

function createGrades(numbers) {
    let gradesStudents = []
    for (let i = 1; i <= numbers; i++) {
        let name = Math.random().toString(36).substr(2,9)
        let grade = getRandomIntInclusive(0, 100)
        let status = grade >= 60 ? "Aprovado" : "Reprovado"
        let student = new Aluno(id=i, name=name, grade=grade, status=status)
        gradesStudents.push(student)
    }
    return gradesStudents
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function processaQ3() {
    let studentsQty = 20
    let gradesStudents = createGrades(studentsQty)
    let aproved = 0
    let reproved = 0
    let htmlTable = document.getElementById("tabelaConteudo")

    for(let grades of gradesStudents){
        createTable(htmlTable, grades)
        aproved += grades.grade >= 60 ? 1 : 0
        reproved += grades.grade < 60 ? 1 : 0
    }

    createFooter(aproved, reproved)
}


let q3Html = document.getElementById("q3")
createHeader(q3Html)
createForm(q3Html)
