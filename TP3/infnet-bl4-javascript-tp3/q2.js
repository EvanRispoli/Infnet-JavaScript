function createHeader(varHtml) {
    let titleH1 = `<h1>Questão 02</h1>`
    let paragraphH1 = `<p>
                        Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de. 
                        O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado, imprimido o resultado e o tempo necessário para a execução. 
                        (Dica: usar o objeto javascript Date)</br></br>
                        - resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);</br>
                        - código deve calcular o fatorial e não apenas imprimir uma string com a resposta.
                        </p>`
    let titleH2 = `<h2>Desenvolvimento:</h2>`
    let paragraphH2 = `<p>Informe os dados solicitados.</p>`
    varHtml.innerHTML = `${titleH1} ${paragraphH1} ${titleH2} ${paragraphH2}`
    return
}

function createForm(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <div>
                <label for="numeroCalc" >Numero para cálculo do fatorial:</label>
                <input type="number" id="numeroCalc" name="numeroCalc" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ2()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="resultado">Resultado do fatorial:</label>
                <input type="text" id="resultado" name="resultado" disabled>
            </div>
        </form>`
    return
}

function calculateFactorial(number) {
    let result = number
    for (let i = 1; i < number; i++) {
        result = result * i
    }
    return result
}

function processaQ2() {

    let number = parseInt(numeroCalc.value)

    if (isNaN(number)) {
        window.alert("É necessário informar o valor solicitado.")
        return false
    }

    startTime = new Date().getMilliseconds();
    let result = calculateFactorial(number);

    finalTime = new Date().getMilliseconds();
    runningTime = finalTime - startTime

    let htmlResult = document.getElementById("resultado")

    htmlResult.value = `${number}! = ${result}  -  ${runningTime} milisegundos`

    return
}

let q2Html = document.getElementById("q2")
createHeader(q2Html)
createForm(q2Html)
