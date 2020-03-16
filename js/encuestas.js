//-----------------Overlay Encuestas
//----------------Add Funcional
function showContentOne() {
    if (document.getElementById('contentQuestionOne').style.display == 'none') {
        document.getElementById('contentQuestionOne').style.display = 'block';
        document.getElementById('iconOneMore').style.display = 'none';
        document.getElementById('iconOneLess').style.display = 'block';
        if (document.querySelector('input[name="riesgos"]:checked')) {
            document.getElementById('next').style.background = '#dd141d';
        } else {
            document.getElementById('next').style.background = '#939393';
        }
        //
        document.getElementById('next').disabled = false;
    } else {
        document.getElementById('contentQuestionOne').style.display = 'none';
        document.getElementById('iconOneMore').style.display = 'block';
        document.getElementById('iconOneLess').style.display = 'none';
    }
}
function showContentTwo() {
    if (document.getElementById('contentQuestionTwo').style.display == 'none') {
        document.getElementById('contentQuestionTwo').style.display = 'block';
        document.getElementById('iconTwoMore').style.display = 'none';
        document.getElementById('iconTwoLess').style.display = 'block';
        if( document.querySelector('input[name="plazos"]:checked')){
            document.getElementById('next').style.background = '#dd141d';
            document.getElementById('next').disabled = false;
        } else {
            document.getElementById('next').style.background = '#939393';
            document.getElementById('next').disabled = false;
        }
      
    } else {
        document.getElementById('contentQuestionTwo').style.display = 'none';
        document.getElementById('iconTwoMore').style.display = 'block';
        document.getElementById('iconTwoLess').style.display = 'none';
    }
}
function showContentThree() {
    if (document.getElementById('contentQuestionThree').style.display == 'none') {
        document.getElementById('contentQuestionThree').style.display = 'block';
        document.getElementById('iconThreeMore').style.display = 'none';
        document.getElementById('iconThreeLess').style.display = 'block';
        document.getElementById('next').style.background = '#dd141d';
        document.getElementById('next').disabled = false;
        if( document.querySelector('input[name="productos"]:checked')){
            document.getElementById('next').style.background = '#dd141d';
            document.getElementById('next').disabled = false;
        } else {
            document.getElementById('next').style.background = '#939393';
            document.getElementById('next').disabled = false;
        }
    } else {
        document.getElementById('contentQuestionThree').style.display = 'none';
        document.getElementById('iconThreeMore').style.display = 'block';
        document.getElementById('iconThreeLess').style.display = 'none';
    }
}
function showContentFour() {
    if (document.getElementById('contentQuestionFour').style.display == 'none') {
        document.getElementById('contentQuestionFour').style.display = 'block';
        document.getElementById('iconFourMore').style.display = 'none';
        document.getElementById('iconFourLess').style.display = 'block';
        document.getElementById('next').style.background = '#dd141d';
        document.getElementById('next').disabled = false;
        if(document.querySelector('input[name="desvalorizaciones"]:checked')){
            document.getElementById('next').style.background = '#dd141d';
            document.getElementById('next').disabled = false;
        } else {
            document.getElementById('next').style.background = '#939393';
            document.getElementById('next').disabled = false;
        }
    } else {
        document.getElementById('contentQuestionFour').style.display = 'none';
        document.getElementById('iconFourMore').style.display = 'block';
        document.getElementById('iconFourLess').style.display = 'none';
        document.getElementById('next').style.background = '#dd141d';
        document.getElementById('next').disabled = false;
    }
}
function showContentFive() {
    if (document.getElementById('contentQuestionFive').style.display == 'none') {
        document.getElementById('contentQuestionFive').style.display = 'block';
        document.getElementById('iconFiveMore').style.display = 'none';
        document.getElementById('iconFiveLess').style.display = 'block';
        document.getElementById('next').style.background = '#dd141d';
        document.getElementById('next').disabled = false;
        if(document.querySelector('input[name="porcentaje-de-inversion"]:checked')){
            document.getElementById('next').style.background = '#dd141d';
            document.getElementById('next').disabled = false;
        } else {
            document.getElementById('next').style.background = '#939393';
            document.getElementById('next').disabled = false;
        }
    } else {
        document.getElementById('contentQuestionFive').style.display = 'none';
        document.getElementById('iconFiveMore').style.display = 'block';
        document.getElementById('iconFiveLess').style.display = 'none';
    }
}

//-----Estado inicial del Collapse
resultConfirToggleOne = document.getElementById('result__ConfirToggleOne');
resultConfirToggleTwo = document.getElementById('result__ConfirToggleTwo').style.display = 'none';
resultConfirToggleTwo = document.getElementById('result__ConfirToggleThree').style.display = 'none';
resultConfirToggleTwo = document.getElementById('result__ConfirToggleFour').style.display = 'none';
resultConfirToggleTwo = document.getElementById('result__ConfirToggleFive').style.display = 'none';
//document.getElementById('next').style.background="gray";

document.getElementById('iconOneMore').style.display = 'none';
document.getElementById('iconTwoMore').style.display = 'none';
document.getElementById('iconThreeMore').style.display = 'none';
document.getElementById('iconFourMore').style.display = 'none';
document.getElementById('iconFiveMore').style.display = 'none';

function nextQuestion() {
    if (document.querySelector('input[name="riesgos"]:checked')) {
        document.getElementById('contentQuestionOne').style.marginBottom="15px";
        document.getElementById('contentQuestionOne').style.display = 'none';
        document.getElementById('next').style.background="#dd141d";
        resultConfirToggleTwo = document.getElementById('result__ConfirToggleTwo').style.display = 'flex';
        document.getElementById('contentQuestionTwo').style.display = 'block';
        document.getElementById('iconOneMore').style.display = 'block';
        document.getElementById('iconOneLess').style.display = 'none';
        console.log('si');
    }
   else if (!document.querySelector('input[name="riesgos"]:checked')) {        document.getElementById('next').style.background="gray";
    }
    else if (document.getElementById('contentQuestionTwo').style.display == 'block') {
        document.getElementById('iconTwoMore').style.display = 'none';
        document.getElementById('iconTwoLess').style.display = 'block';
        console.log('no');
    }
    if (document.querySelector('input[name="plazos"]:checked')) {
        document.getElementById('contentQuestionTwo').style.marginBottom="15px";
        document.getElementById('next').style.background = '#dd141d';
        document.getElementById('contentQuestionTwo').style.display = 'none';
        resultConfirToggleThree = document.getElementById('result__ConfirToggleThree').style.display = 'flex';
        document.getElementById('contentQuestionThree').style.display = 'block';
        document.getElementById('iconTwoMore').style.display = 'block';
        document.getElementById('iconTwoLess').style.display = 'none';
    } else if (document.getElementById('contentQuestionThree').style.display == 'block') {
        document.getElementById('iconThreeMore').style.display = 'none';
        document.getElementById('iconThreeLess').style.display = 'block';
    }
    //-------ejemplo
    else if (!document.querySelector('input[name="plazos"]:checked')) {
        document.getElementById('next').style.background = 'gray';
    }
    else if (document.querySelector('input[id="entre190"]:checked')) {
        document.getElementById('next').style.background = '#dd141d';
    }
    if (document.querySelector('input[name="productos"]:checked')) {
        document.getElementById('contentQuestionThree').style.marginBottom="15px";
        document.getElementById('contentQuestionThree').style.display = 'none';
        resultConfirToggleThree = document.getElementById('result__ConfirToggleFour').style.display = 'flex';
        document.getElementById('contentQuestionFour').style.display = 'block';
        document.getElementById('iconThreeMore').style.display = 'block';
        document.getElementById('iconThreeLess').style.display = 'none';
    } else if (document.getElementById('contentQuestionFour').style.display == 'block') {
        document.getElementById('iconFourMore').style.display = 'none';
        document.getElementById('iconFourLess').style.display = 'block';
    }
    else if (!document.querySelector('input[name="productos"]:checked')) {
        document.getElementById('next').style.background = 'gray';
    }
    if (document.querySelector('input[name="desvalorizaciones"]:checked')) {
        document.getElementById('contentQuestionFour').style.marginBottom="15px";
        document.getElementById('contentQuestionFour').style.display = 'none';
        resultConfirToggleThree = document.getElementById('result__ConfirToggleFive').style.display = 'flex';
        document.getElementById('contentQuestionFive').style.display = 'block';
        document.getElementById('iconFourMore').style.display = 'block';
        document.getElementById('iconFourLess').style.display = 'none';
    } else if (document.getElementById('contentQuestionFour').style.display == 'block') {
        document.getElementById('iconFourMore').style.display = 'none';
        document.getElementById('iconFourLess').style.display = 'block';
    }
    else if (!document.querySelector('input[name="desvalorizaciones"]:checked')) {
        document.getElementById('next').style.background = 'gray';
    }    
    if (document.querySelector('input[name="porcentaje-de-inversion"]:checked')) {
        document.getElementById('contentQuestionFive').style.marginBottom="15px";
        document.getElementById('iconFiveMore').style.display = 'block';
        document.getElementById('iconFiveLess').style.display = 'none';
        document.getElementById('contentQuestionFive').style.display = 'none';
    } else if (document.getElementById('contentQuestionFive').style.display == 'none') {
        document.getElementById('iconFiveMore').style.display = 'block';
        document.getElementById('iconFiveLess').style.display = 'none';
    }
    else if (!document.querySelector('input[name="porcentaje-de-inversion"]:checked')) {
        document.getElementById('next').style.background = 'gray';
    } 
}
var checkbox = document.querySelector('input[name="porcentaje-de-inversion"]');
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('next').innerHTML="Continuar";
        //document.getElementById('next').style.width='111px  '
    } else {
        document.getElementById('next').innerHTML="Siguiente pregunta";
    }
});
var cantidadDinero = document.getElementById('cantidadDinero');
document.getElementById('myForm').addEventListener('change', function(){
    function validateInfo(){
if(cantidadDinero.value.length > 1){
        console.log('si');
    }
    }
    validateInfo();
})