function submit () {
    let peso = Number(document.getElementById('peso').value)
    var altura = Number(document.getElementById('altura').value)

    let imc = peso / (altura * altura)

    if(document.getElementById('divManeira').hasChildNodes) {
        document.getElementById('divManeira').innerHTML = ""
    }

    let imcResponse = document.createElement("p")
    imcResponse.innerText = "O seu imc é: " + imc
    document.getElementById('divManeira').appendChild(imcResponse)

    var label = ""
    var color = ''
    if (imc > 0 && imc <= 17) {
        label = "muito abaixo do peso"
        color = 'red'
    } else if (imc > 17 && imc <= 18.49) {
        label = "abaixo do peso"
        color = 'orange'
    } else if (imc > 18.49 && imc <= 24.99) {
        label = "peso normal"
        color = 'green'
    } else if (imc > 24.99 && imc < 29.99) {
        label = "acima do peso"
        color = 'orange'
    } else if (imc > 29.99) {
        label = "muito acima do peso"
        color = 'red'
    } else {
        alert("imc inválido...")
    }

    let classificationResponse = document.createElement("p")
    classificationResponse.innerText = label
    classificationResponse.style.color = color
    document.getElementById('divManeira').appendChild(classificationResponse)
}