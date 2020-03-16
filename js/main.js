//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function () {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
function showModalStudy() {
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
function showModal() {
    document.getElementById('modalDefault').classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal() {
    document.getElementById('modalDefault').classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
function showKangaroo() {
    document.getElementById('contCanguro').classList.add('contCanguroMain--iscanguroShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo() {
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
function chengeAddress() {
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
}


//-------------------- Mostrar datos ocultos confirmación y resultados
function seeMoreDetails() {
    document.getElementById('result__ConfirToggleOpen').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

function seeLessDetails() {
    document.getElementById('result__ConfirToggleClose').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}


// Validacion terminos y condiciones screen 11
function checkConditions() {
    let checkbox = document.getElementById("conditions");
    if (checkbox.checked == true) {
        console.log("true");
        document.getElementById('validateTermsConditions').classList.add('button--primary');
    }
    else {
        document.getElementById('validateTermsConditions').classList.remove('button--primary');
        console.log("false");
    }
}

//Validacion OTP
function otpValue(){
    var x = document.getElementById("OTP").value;
    if(x.length > 3){
        document.getElementById('validateOtp').classList.add('button--primary');
        document.getElementById("validateOtp").disabled = false;
    }
    else {
        document.getElementById('validateOtp').classList.remove('button--primary');
        document.getElementById("validateOtp").disabled = true;
    
    }
}

//Funcion redireccionar caja objetivos

function detallesObjetivo() {
    location.href = "screen-1-eleva-administracion.html"
}

function detallesObjetivoSatisfecho() {
    location.href = "screen-2-eleva-administracion.html"
}


//Validacion en los objetivos desplegados.

function checkDinero() {
    let radio = document.getElementById("aumentarDinero");
    if (radio.checked == true) {
        console.log("true");
        document.getElementById('validateTermsConditions').classList.add('button--primary');
    }
    else {
        document.getElementById('validateTermsConditions').classList.remove('button--primary');
        console.log("false");
    }
}

function checkAbono() {
    let radio = document.getElementById("realizarAbono");
    if (radio.checked == true) {
        console.log("true");
        document.getElementById('validateTermsConditions').classList.add('button--primary');
    }
    else {
        document.getElementById('validateTermsConditions').classList.remove('button--primary');
        console.log("false");
    }
}

function checkTiempo() {
    let radio = document.getElementById("aumentarTiempo");
    if (radio.checked == true) {
        console.log("true");
        document.getElementById('validateTermsConditions').classList.add('button--primary');
    }
    else {
        document.getElementById('validateTermsConditions').classList.remove('button--primary');
        console.log("false");
    }
}

function checkRiesgo() {
    let radio = document.getElementById("aumentarRiesgo");
    if (radio.checked == true) {
        console.log("true");
        document.getElementById('validateTermsConditions').classList.add('button--primary');
    }
    else {
        document.getElementById('validateTermsConditions').classList.remove('button--primary');
        console.log("false");
    }
}

//Funcion modal para los detalles de periodos
    
    function ShowSelected()
    {
    var x = document.getElementById("periodo");
    var selected = x.options[x.selectedIndex].value;
    if (selected == "1"){
      //  document.getElementById("detPeriodo").classList.remove;
        
        document.getElementById("detPeriodo").classList.remove("detallesPeriodosShow--none");
        document.getElementById("descargaReporte").classList.add("button--primary");
        
        
    }
    else{
        
        document.getElementById("detPeriodo").classList.add("detallesPeriodosShow--none");
        document.getElementById("descargaReporte").classList.remove("button--primary");
        
    }
    

    }

    //Funcion before


    /*var sombra = '10px';
    function monto() {

      document.getElementById("monto").classList.remove("contentBox--oculto");
      document.getElementById("monto").classList.add("contentBox--visible");
      document.getElementById("distribucion").classList.remove("contentBox--visible");
      document.getElementById("distribucion").classList.add("contentBox--oculto")
      if(sombra == '10px'){
        distribucion();
      }
      else if(sombra == 'auto'){
        var capa = document.getElementById("pestañaMonto");
        capa.style.setProperty("--posicion", "10px");
        sombra = '10px';
      }

    }
    function distribucion() {

      document.getElementById("monto").classList.remove("contentBox--visible");
      document.getElementById("monto").classList.add("contentBox--oculto");
      document.getElementById("distribucion").classList.remove("contentBox--oculto");
      document.getElementById("distribucion").classList.add("contentBox--visible");
      var capa = document.getElementById("pestañaMonto");
      capa.style.setProperty("--posicion", "auto");
      sombra = 'auto';
    }*/

    //Funcion mejorada.
  
    function monto() {
      document.getElementById("pestañaMonto").style.backgroundColor="#fdfdfd";
      document.getElementById("pestañaDistribucion").style.backgroundColor="#cccccc";
      document.getElementById("pdistribucion").style.opacity=".6";
      document.getElementById("pmonto").style.opacity="1";
      document.getElementById("monto").classList.remove("contentBox--oculto");
      document.getElementById("monto").classList.add("contentBox--visible");
      document.getElementById("distribucion").classList.remove("contentBox--visible");
      document.getElementById("distribucion").classList.add("contentBox--oculto");


    }

    function distribucion() {
      
      document.getElementById("pestañaDistribucion").style.transition =  "all 0.5s";
      document.getElementById("pestañaMonto").style.transition =  "all 0.5s";
      document.getElementById("pestañaMonto").style.backgroundColor="#cccccc";
      document.getElementById("pestañaDistribucion").style.backgroundColor="#fdfdfd";
      document.getElementById("pmonto").style.opacity=".6";
      document.getElementById("pdistribucion").style.opacity="1";

      document.getElementById("monto").classList.remove("contentBox--visible");
      document.getElementById("monto").classList.add("contentBox--oculto");
      document.getElementById("distribucion").classList.remove("contentBox--oculto");
      document.getElementById("distribucion").add("contentBox--visible");
      

    }

    //Cambio de color para el boton continuar en la pantalla 4
    function changeButton(){
      var x = document.getElementById("aporte");
    var selected = x.options[x.selectedIndex].value;
    if (selected == "1"){
      //  document.getElementById("detPeriodo").classList.remove;
        document.getElementById("continuar").classList.add("button--primary");   
    }
    else{
        document.getElementById("continuar").classList.remove("button--primary");  
    }
    }