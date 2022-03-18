function createHeader(varHtml) {
    let titleH1 = `<h1>Questão 01</h1>`
    let paragraphH1 = `<p>
                            Crie um componente que tenha duas caixas de texto que só aceitam números e tenha os rótulos (label) valor
                            mínimo e valor máximo, checando sempre se o valor mínimo é menor que o valor máximo. O componente deve ainda
                            possuir um botão calcular que quando acionado deve contar e imprimir quantos números existem entre valor
                            mínimo e valor máximo (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível
                            calcular se faltar algum dos números.</br></br>
                            <strong>* exclusives - Ou seja, quantos números existem entre</strong> valor mínimo e valor máximo, <strong>excluindo o</strong> valor mínimo e valor máximo
                        </p>`
    let titleH2 = `<h2>Desenvolvimento:</h2>`
    let paragrafoH2 = `<p>Informe os dados solicitados.</p>`
    varHtml.innerHTML = `${titleH1} ${paragraphH1} ${titleH2} ${paragrafoH2}`
    return
}

function createForm(varHtml) {
    varHtml.innerHTML +=
        `<form>
            <div>
                <label for="minimo" class="label_minimo">Valor mínimo:</label>
                <input type="number" id="minimo" name="minimo" required step 1>
                <label for="maximo">Valor máximo:</label>
                <input type="number" id="maximo" name="maximo" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ1()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="qtdNumeros">Qtd. números:</label>
                <input type="text" id="qtdNumeros" name="qtdNumeros" disabled>
                <label for="numeros">Números:</label>
                <textarea id="numeros" name="numeros" disabled></textarea>
            </div>
        </form>`
    return
}


function countNumbers(initialNumber, finalNumber) {
    let i = initialNumber + 1;
    let numbers = []
    for (i; i < finalNumber; i++) {
        let multiple2 = i % 2;
        let multiple3 = i % 3;
        if (multiple2 == 0 && multiple3 == 0) {
            numbers.push(i)
        }
    }
    return numbers
}

function processaQ1() {

    let minNumber = parseInt(minimo.value)
    let maxNumber = parseInt(maximo.value)

    if (isNaN(minNumber) || isNaN(maxNumber)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return false
    }

    if (minNumber >= maxNumber) {
        window.alert("O valor mínimo deve ser menor que o valor máximo.")
        return false
    }

    let numbers = countNumbers(minNumber, maxNumber)

    let numbersQtyHtml = document.getElementById("qtdNumeros")
    let htmlNumbers = document.getElementById("numeros")

    numbersQtyHtml.value = numbers.length
    htmlNumbers.value = numbers

    return
}

let q1Html = document.getElementById("q1")
createHeader(q1Html)
createForm(q1Html)
