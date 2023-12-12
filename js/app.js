let numerosInseridos = []

function adicionarNumero() {
    let numberInput = document.getElementById("numberInput").value

    //Verifica se está vazio
    if (!numberInput) {
        alert("Por favor, insira um número.")
        return
    }

    // Adicionar o número ao array
    numerosInseridos.push(Number(numberInput))

    // Atualizar a lista de valores inseridos
    updateValuesList()

    // Limpar o campo de entrada
    document.getElementById("numberInput").value = ""
}

function updateValuesList() {
    let valuesList = document.getElementById("valuesList")
    valuesList.innerHTML = "" // Limpar a lista

    numerosInseridos.forEach(function(value) {
        var listItem = document.createElement("li")
        listItem.textContent = value
        valuesList.appendChild(listItem)
    })
}

function sortear() {
    let drawCountInput = document.getElementById("drawCountInput").value

    //Verifica se está vazio
    if(!drawCountInput){
        alert("Por favor, insira um número")
        return
    }

    // Validar se há números suficientes para sortear
    if (numerosInseridos.length < drawCountInput) {
        alert("Não há números suficientes para sortear.")
        return
    }

    // Embaralhar o array e selecionar os primeiros 'drawCountInput' números
    var shuffledArray = shuffleArray(numerosInseridos)
    var result = shuffledArray.slice(0, drawCountInput)

    // Exibir o resultado na página
    document.getElementById("result").innerText = result.join(', ')
}

// Função para embaralhar um array
// Implementando o algoritmo Fisher-Yates para embaralhar o array e ter uma distribuição aleatória
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}


document.querySelector("#btnAdicicionar").addEventListener('click', adicionarNumero)
document.querySelector("#btnSortear").addEventListener('click', sortear)