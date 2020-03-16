document.getElementById('rangeRisk').style.display = "none";
document.getElementById('rangeRiskFooter').style.display = "none";
document.getElementById('modificar').style.display = "none";
document.getElementById("myForm").addEventListener("keyup", function (event) {
    let hasError = false;
    cantidadDinero = document.getElementById('cantidadDinero').value;
    mesesValue = document.getElementById('mesesValue').value;
    inicioDinero = document.getElementById('inicioDinero').value;
    aporteMensual = document.getElementById('aporteMensual').value;
    if (cantidadDinero.length > 1 &&
        mesesValue.length > 1 &&
        inicioDinero.length > 1 &&
        aporteMensual.length > 1) {
        console.log("todo bien");
        document.getElementById('validar').style.background = "#dd141d";
        document.getElementById("validar").disabled = false;
    } else if (cantidadDinero.length < 1 &&
        mesesValue.length < 1 &&
        inicioDinero.length < 1 &&
        aporteMensual.length < 1) {
        document.getElementById("validar").disabled = true;
    }
    if (cantidadDinero == null && cantidadDinero.length == 0 &&
        mesesValue == null && mesesValue.length == 0 &&
        inicioDinero == null && inicioDinero.length == 0 &&
        aporteMensual == null && aporteMensual.length == 0) {
        console.log('Error, rellena el campo nombre');
        document.getElementById('validar').style.background = "#dd141d";
        hasError = true;
    }
    if (hasError) event.preventDefault();
});
function getRangeRisk() {
    document.getElementById('rangeRisk').style.display = "block";
    document.getElementById('modificar').style.display = "inline-block";
    document.getElementById("cantidadDinero").disabled = true;
    document.getElementById("mesesValue").disabled = true;
    document.getElementById("inicioDinero").disabled = true;
    document.getElementById("aporteMensual").disabled = true;
    document.getElementById("validar").innerHTML = "Simular";
}
var myForm = document.getElementById('myForm');
myForm.addEventListener('keyup', function () {
    if (document.getElementById('AporteMensual').value.length >= 1) {
            document.getElementById('validar').style.background = "#dd141d";
            document.getElementById('validar').disabled = false;
        }
});
function getRangeRiskTwo(){
    document.getElementById('rangeRisk').style.display = "block";
    document.getElementById('rangeRiskFooter').style.display = "block";
    document.getElementById('validar').innerHTML = "Continuar";
    console.log('range');
}
function getRangeRiskModify() {
    console.log("asdfghjk")
}

function graficaBarraBoxShow() {
    if (document.getElementById('graficaBarra').style.display == 'none') {
        document.getElementById('graficaBarra').style.display = 'flex';
        document.getElementById('seemore--secondCard').style.display = 'none';
        document.getElementById('seeless--secondCard').style.display = 'block';
        console.log('Ocultando');
        let element = document.getElementById('validacion');
    }
    else {
        console.log('Mostrando');
        element.classList.add("button--secondary");
    }
}
function graficaBarraBoxHide() {
    if (document.getElementById('graficaBarra').style.display == 'flex') {
        document.getElementById('graficaBarra').style.display = 'none';
        document.getElementById('seemore--secondCard').style.display = 'block';
        document.getElementById('seeless--secondCard').style.display = 'none';
        console.log('Ocultando');
        let element = document.getElementById('seeless--secondCard');
    }
    else {
        console.log('Mostrando');
        let element = document.getElementById('validacion');
        element.style.width = "100%";
    }
}


function showClassCanguro() {
    let element = document.getElementById("contCanguro");
    element.classList.add("contCanguroMain--iscanguroShowed");
}
function hideClassCanguro() {
    let element = document.getElementById("contCanguro");
    element.classList.remove("contCanguroMain--iscanguroShowed");
}


//----------check sugerencias
function showClassCanguro() {
    if (document.querySelector('input[name="sugerencias"]:checked')) {
        console.log('true');
        var element = document.getElementById("changeColor");
        element.classList.add("button--primary");
    }
}


function validarSugerencia() {
    if (document.querySelector('input[name="sugerencias"]:checked')) {
        console.log('true');
        var element = document.getElementById("changeColor");
        element.classList.add("button--primary");
        document.getElementById("percentageSuggestion1").style.display = "block";
        document.getElementById("percentageSuggestion2").style.display = "block";
        document.getElementById("optionSuggestion").style.display = "block";
        document.getElementById("simular").style.display = "flex";
        document.getElementById("validacion").innerHTML = "Continuar";
    }
}


//Descargar pdfs

var link = document.createElement('a');
link.href = url;
link.download = 'file.pdf';
link.dispatchEvent(new MouseEvent('click'));