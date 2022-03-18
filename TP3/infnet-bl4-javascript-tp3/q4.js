function createHeader(varHtml) {
    let titleH1 = `<h1>Questão 04</h1>`
    let paragraphH1 = `<p>
                        Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) 
                        Quantidade de números, valor mínimo e valor máximo. O componente deve ainda possuir um botão calcular 
                        que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los. 
                        Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). 
                        Lembre-se que para calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.
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
                <label for="qtd" >Quantidade de números:</label>
                <input type="number" id="qtd" name="qtd" required step 1>
                <label for="inicio" >Número inicial:</label>
                <input type="number" id="inicio" name="inicio" required step 1>
                <label for="final" >Número final:</label>
                <input type="number" id="final" name="final" required step 1>
                <input type="button" value="Calcular" id="botao" onclick="processaQ4()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <label for="numerosEncontrados">Resultado:</label>
                <textarea id="numerosEncontrados" name="numerosEncontrados" disabled></textarea>
            </div>
        </form>`
    return
}

function createNumbers(qty, beginning, final) {
    let numbers = []
    let i = 1
    while (i <= qty) {
        let random = getRandomIntInclusive(beginning, final)
        if (numbers.indexOf(random) < 0) {
            numbers.push(random)
            i++
        }
    }
    return numbers
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function processaQ4() {

    let numbersQty = parseInt(qtd.value)
    let initialNumber = parseInt(inicio.value)
    let finalNumber = parseInt(final.value)

    if (isNaN(numbersQty) || isNaN(initialNumber) || isNaN(finalNumber)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return false
    }

    if (initialNumber >= finalNumber) {
        window.alert("O número inicial deve ser menor que o numero final.")
        return false
    }
    if(numbersQty > (finalNumber - initialNumber)){
        window.alert("A quantidade de números não pode ser maior que o intervalo solicitado")
        return false
    }

    let numeros = createNumbers(numbersQty, initialNumber, finalNumber);
    numeros.sort(function (a, b) { return a - b })

    let numerosHtml = document.getElementById("numerosEncontrados")
    numerosHtml.value = numeros

    return
}

let q4Html = document.getElementById("q4")
createHeader(q4Html)
createForm(q4Html)


