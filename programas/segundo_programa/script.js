function enviar () {
    let temperatura = Number(document.getElementById('temperatura').value)
    let unidadeOrigem = document.getElementById('unidadeOriginal').value
    let unidadeConverter = document.getElementById('unidadeConverter').value

    console.log("Temperatura: " + temperatura)
    console.log("unidade origem: " + unidadeOrigem)
    console.log("unidade destino: " + unidadeConverter)

    var temperaturaConvertida = 0
    if (unidadeConverter == unidadeOrigem) {
        temperaturaConvertida = temperatura
    } else if (unidadeConverter == "Celsius" && unidadeOrigem == "Fahrenheit") {
        temperaturaConvertida = fahrenheitCelsius(temperatura)
    } else if (unidadeConverter == "Fahrenheit" && unidadeOrigem == "Celsius") {
        temperaturaConvertida = celsiusFahrenheit(temperatura)
    } else if (unidadeConverter == "Celsius" && unidadeOrigem == "Kelvin") {
        temperaturaConvertida = kelvinCelsius(temperatura)
    } else if (unidadeConverter == "Kelvin" && unidadeOrigem == "Celsius") {
        temperaturaConvertida = celsiusKelvin(temperatura)
    } else if (unidadeConverter == "Kelvin" && unidadeOrigem == "Fahrenheit") {
        temperaturaConvertida = fahrenheitCelsius(temperatura)
    } else if (unidadeConverter == "Fahrenheit" && unidadeOrigem == "Kelvin") {
        temperaturaConvertida = kelvinFahrenheit(temperatura)
    }


    // ESCREVER AS COISAS NO FRONT END
    if(document.getElementById('divManeira').hasChildNodes) {
        document.getElementById('divManeira').innerHTML = ""
    }

    let imcResponse = document.createElement("p")
    imcResponse.innerText = "Temperatura convertida: " + temperaturaConvertida
    document.getElementById('divManeira').appendChild(imcResponse)

}

function celsiusFahrenheit (temperatura) {
    return (temperatura * 1.8) + 32
}

function fahrenheitCelsius (temperatura) {
    return (temperatura - 32) / 1.8
}

function fahrenheitKelvin (temperatura) {
    return (temperatura + 459,67) * (5/9)
}

function kelvinFahrenheit (temperatura) {
    return 1.8 * (temperatura - 273) + 32
}

function celsiusKelvin (temperatura) {
    return 273 + temperatura
}

function kelvinCelsius (temperatura) {
    return temperatura - 273
}