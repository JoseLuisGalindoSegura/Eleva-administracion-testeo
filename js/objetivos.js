//-----------------Overlay Objetivo de inversion
//-----Estado inicial del Collapse
collapseVivienda = document.getElementById('collapseVivienda');
compraVivienda = document.getElementById('compra-vivienda');
remodelacionVivienda = document.getElementById('remodelacion-vivienda');
collapseJubilacion = document.getElementById('collapseJubilacion');
opcionJubilacion = document.getElementById('opcion-jubilacion');
collapseMovilidad = document.getElementById('collapseMovilidad');
carroMovilidad = document.getElementById('carro-movilidad');
motocicletaMovilidad = document.getElementById('motocicleta-movilidad');
bicicletaMovilidad = document.getElementById('bicicleta-movilidad');
patinetaMovilidad = document.getElementById('patineta-movilidad');
collapseViaje = document.getElementById('collapseViaje');
vacacionesViaje = document.getElementById('vacaciones-viaje');
sabaticoViaje = document.getElementById('sabatico-viaje');
collapseEducacion = document.getElementById('collapseEducacion');
bonoEscolarEducacion = document.getElementById('bono-educacion');
universidadEducacion = document.getElementById('universidad-educacion');
estudiosSuperioresEducacion = document.getElementById('superior-educacion');
collapseFamilia = document.getElementById('collapseFamilia');
celebracionesFamilia = document.getElementById('celebraciones-familia');
hijosFamilia = document.getElementById('hijos-familia');
sostenimientoFamilia = document.getElementById('sostenimiento-familia');
collapseCapital = document.getElementById('collapseCapital');
patriminioCapital = document.getElementById('patriminio-capital');
emprendimientoCapital = document.getElementById('emprendimiento-capital');
collapseOtros = document.getElementById('collapseOtros');
collapseVivienda.style.display = 'none';
compraVivienda.style.display = 'none';
remodelacionVivienda.style.display = 'none'
collapseJubilacion.style.display = 'none';
opcionJubilacion.style.display = 'none';
collapseMovilidad.style.display = 'none';
carroMovilidad.style.display = "none";
motocicletaMovilidad.style.display = "none";
bicicletaMovilidad.style.display = "none";
patinetaMovilidad.style.display = "none";
collapseViaje.style.display = "none";
vacacionesViaje.style.display = 'none';
sabaticoViaje.style.display = 'none';
collapseEducacion.style.display = 'none';
bonoEscolarEducacion.style.display = 'none';
universidadEducacion.style.display = 'none';
estudiosSuperioresEducacion.style.display = 'none';
collapseFamilia.style.display = "none";
celebracionesFamilia.style.display = 'none';
hijosFamilia.style.display = 'none';
sostenimientoFamilia.style.display = 'none';
collapseCapital.style.display = 'none';
patriminioCapital.style.display = 'none';
emprendimientoCapital.style.display = 'none';
collapseOtros.style.display = "none";

document.getElementById("myForm").addEventListener("change", function (event) {
if(document.querySelector('input[name="inversion"]:checked')){
    document.getElementById('validate').style.background = "#dd141d";
    document.getElementById('validate').classList.add('button--primary');
}    //-----------vivienda
    if (document.querySelector('input[id="viviendaChecked"]:checked')) {
        collapseVivienda.style.display = 'block';
        document.getElementById('vivienda-icono').style.filter = "grayscale(0%)";
        document.getElementById('vivienda-icono').style.opacity = "1";
        document.getElementById("col-vivienda").style.opacity = "1";
        // document.getElementsByClassName('item-seleccionado').style.display='none';
        // opcionJubilacion.style.display='none';

    } else {
        collapseVivienda.style.display = 'none';
        document.getElementById('vivienda-icono').style.filter = "grayscale(100%)";
        document.getElementById("vivienda-icono").style.opacity = "0.5";
        document.getElementById("col-vivienda").style.opacity = "0.5";
    }
    //-----------opcion vivienda
    if (document.querySelector('input[id="compra"]:checked')) {
        document.getElementById('validate').style.background = "#dd141d";
        compraVivienda.style.display = 'block';
        collapseVivienda.style.display = 'none';
        console.log('Compra')
    } else {
        compraVivienda.style.display = 'none';
    }
    if (document.querySelector('input[id="remodelacion"]:checked')) {
        document.getElementById('validate').style.background = "#dd141d";
        remodelacionVivienda.style.display = 'block';
        collapseVivienda.style.display = 'none';
    } else {
        remodelacionVivienda.style.display = 'none';
    }
    //-----------jubilacion
    if (document.querySelector('input[id="jubilacionChecked"]:checked')) {
        // collapseJubilacion.style.display = 'block';
        document.getElementById('jubilacion-icono').style.filter = "grayscale(0%)";
        document.getElementById('jubilacion-icono').style.opacity = "1";
        document.getElementById("col-jubilacion").style.opacity = "1";


    } else {
        // collapseJubilacion.style.display = 'none';
        document.getElementById('jubilacion-icono').style.filter = "grayscale(100%)";
        document.getElementById("jubilacion-icono").style.opacity = "0.5";
        document.getElementById("col-jubilacion").style.opacity = "0.5";

    }
    //-----------opcion jubilacion
    if (document.querySelector('input[id="jubilacion"]:checked')) {
        opcionJubilacion.style.display = 'block';
        collapseJubilacion.style.display = 'none';
     
    } else {
        opcionJubilacion.style.display = 'none';
    }
    //-----------movilidad
    if (document.querySelector('input[id="movilidadChecked"]:checked')) {
        collapseMovilidad.style.display = 'block';
        document.getElementById('movilidad-icono').style.filter = "grayscale(0%)";
        document.getElementById('movilidad-icono').style.opacity = "1";
        document.getElementById("col-movilidad").style.opacity = "1";
    } else {
        collapseMovilidad.style.display = 'none';
        document.getElementById('movilidad-icono').style.filter = "grayscale(100%)";
        document.getElementById('movilidad-icono').style.opacity = "0.5";
        document.getElementById("col-movilidad").style.opacity = ".5";


    }
    //-----------opcion movilidad
    if (document.querySelector('input[id="carro"]:checked')) {
        carroMovilidad.style.display = 'block';
        collapseMovilidad.style.display = 'none';


    } else {
        carroMovilidad.style.display = 'none';
    }
    if (document.querySelector('input[id="motocicleta"]:checked')) {
        motocicletaMovilidad.style.display = 'block';
        collapseMovilidad.style.display = 'none';
    } else {
        motocicletaMovilidad.style.display = 'none';
    }
    if (document.querySelector('input[id="bicicleta"]:checked')) {
        bicicletaMovilidad.style.display = 'block';
        collapseMovilidad.style.display = 'none';
    } else {
        bicicletaMovilidad.style.display = 'none';
    }
    if (document.querySelector('input[id="patineta"]:checked')) {
        patinetaMovilidad.style.display = 'block';
        collapseMovilidad.style.display = 'none';
    } else {
        patinetaMovilidad.style.display = 'none';
    }
    //-----------viaje
    if (document.querySelector('input[id="viajeChecked"]:checked')) {
        collapseViaje.style.display = 'block';
        document.getElementById('viaje-icono').style.filter = "grayscale(0%)";
        document.getElementById('viaje-icono').style.opacity = "1";
        document.getElementById("col-viaje").style.opacity = "1";
    } else {
        collapseViaje.style.display = 'none';
        document.getElementById('viaje-icono').style.filter = "grayscale(100%)";
        document.getElementById('viaje-icono').style.opacity = "0.5";
        document.getElementById("col-viaje").style.opacity = ".5";
    }
    //-----------opcion viaje
    if (document.querySelector('input[id="vacaciones"]:checked')) {
        vacacionesViaje.style.display = 'block';
        collapseViaje.style.display = 'none';
    } else {
        vacacionesViaje.style.display = 'none';
    }
    if (document.querySelector('input[id="sabatico"]:checked')) {
        sabaticoViaje.style.display = 'block';
        collapseViaje.style.display = 'none';
    } else {
        sabaticoViaje.style.display = 'none';
    }

    //-----------educacion
    if (document.querySelector('input[id="educacionChecked"]:checked')) {
        collapseEducacion.style.display = 'block';
        document.getElementById('educacion-icono').style.filter = "grayscale(0%)";
        document.getElementById('educacion-icono').style.opacity = "1";
        document.getElementById("col-educacion").style.opacity = "1";

    } else {
        collapseEducacion.style.display = 'none';
        document.getElementById('educacion-icono').style.filter = "grayscale(100%)";
        document.getElementById('educacion-icono').style.opacity = "0.5";
        document.getElementById("col-educacion").style.opacity = "0.5";
    }
    //-----------opcion educacion
    if (document.querySelector('input[id="bono-escolar"]:checked')) {
        bonoEscolarEducacion.style.display = 'block';
        collapseEducacion.style.display = 'none';

    } else {
        bonoEscolarEducacion.style.display = 'none';
    }
    if (document.querySelector('input[id="estudios-superiores"]:checked')) {
        estudiosSuperioresEducacion.style.display = 'block';
        collapseEducacion.style.display = 'none';
        document.getElementById("title-edu").style.display="none";
       
    } else {
        estudiosSuperioresEducacion.style.display = 'none';
        document.getElementById("title-edu").style.display="block";
    }
    if (document.querySelector('input[id="universidad"]:checked')) {
        universidadEducacion.style.display = 'block';
        collapseEducacion.style.display = 'none';
    } else {
        universidadEducacion.style.display = 'none';
    }

    //-----------familia
    if (document.querySelector('input[id="familiaChecked"]:checked')) {
        collapseFamilia.style.display = 'block';
        document.getElementById('familia-icono').style.filter = "grayscale(0%)";
        document.getElementById("familia-icono").style.opacity = "1";
        document.getElementById("col-familia").style.opacity = "1";
    } else {
        collapseFamilia.style.display = 'none';
        document.getElementById('familia-icono').style.filter = "grayscale(100%)";
        document.getElementById("familia-icono").style.opacity = "0.5";
        document.getElementById("col-familia").style.opacity = ".5";
    }
    //-----------opcion familia
    if (document.querySelector('input[id="celebraciones"]:checked')) {
        document.getElementById('celebraciones-familia').style.display="block";
        document.getElementById('sostenimiento-familia').style.display="none";
        document.getElementById('hijos-familia').style.display="none";
        document.getElementById('collapseFamilia').style.display="none";
            }
    if (document.querySelector('input[id="hijos"]:checked')) {
        document.getElementById('celebraciones-familia').style.display="none";
        document.getElementById('sostenimiento-familia').style.display="none";
        document.getElementById('hijos-familia').style.display="block";
        document.getElementById('collapseFamilia').style.display="none";
    }
    if (document.querySelector('input[id="sostenimiento"]:checked')) {
        document.getElementById('celebraciones-familia').style.display="none";
        document.getElementById('sostenimiento-familia').style.display="block";
        document.getElementById('hijos-familia').style.display="none";
        document.getElementById('collapseFamilia').style.display="none";
        document.getElementById('hiddenFamilia').style.display="none";
    } else if( !document.querySelector('input[id="celebraciones"]:checked') && !document.querySelector('input[id="hijos"]:checked') && !document.querySelector('input[id="sostenimiento"]:checked')){
        {
            document.getElementById('hiddenFamilia').style.display="block"; 
            document.getElementById('celebraciones-familia').style.display="none";
            document.getElementById('sostenimiento-familia').style.display="none";
            document.getElementById('hijos-familia').style.display="none";
        }
    }
    //-----------capital

    if (document.querySelector('input[id="capitalChecked"]:checked')) {
        collapseCapital.style.display = 'block';
        document.getElementById('capital-icono').style.filter = "grayscale(0%)";
        document.getElementById("capital-icono").style.opacity = "1";
        document.getElementById("col-capital").style.opacity = "1";
    } else {
        collapseCapital.style.display = 'none';
        document.getElementById('capital-icono').style.filter = "grayscale(100%)";
        document.getElementById("capital-icono").style.opacity = "0.5";
        document.getElementById("col-capital").style.opacity = ".5";
    }
    //-----------opcion capital
    if (document.querySelector('input[id="patrimonio"]:checked')) {
        patriminioCapital.style.display = 'block';
        collapseCapital.style.display = 'none';
        document.getElementById('hiddenCapital').style.display="none";
        document.getElementById("valorOtros").innerHTML = '';
    } else {
        patriminioCapital.style.display = 'none';
    }
    if (document.querySelector('input[id="emprendimiento"]:checked')) {
        emprendimientoCapital.style.display = 'block';
        collapseCapital.style.display = 'none';
        document.getElementById("valorOtros").innerHTML = '';
    } else {
        emprendimientoCapital.style.display = 'none';
    }
    if (document.querySelector('input[id="patrimonio"]:checked') || document.querySelector('input[id="emprendimiento"]:checked')) {
        document.getElementById('hiddenCapital').style.display = 'none';
        collapseCapital.style.display = 'none';
    } else {
        document.getElementById('hiddenCapital').style.display = 'block';
    }    
    
    //-----------otros
    if (document.querySelector('input[id="otrosChecked"]:checked')) {
        collapseOtros.style.display = 'block';
        document.getElementById('validate').style.background="#dd141d"
        document.getElementById('otros-icono').style.filter = "grayscale(0%)";
        document.getElementById("otros-icono").style.opacity = "1";
        document.getElementById("col-otros").style.opacity = "1";


    } else {
        collapseOtros.style.display = 'none';
        document.getElementById('otros-icono').style.filter = "grayscale(100%)";
        document.getElementById("otros-icono").style.opacity = "0.5";
        document.getElementById("col-otros").style.opacity = ".5";
    }
    //----------opcion otros
    function otherOption() {
        var otros = document.getElementById("otros").value;
        document.getElementById("valorOtros").innerHTML = otros;
       if (otros.length > 4) {
            collapseOtros.style.display = 'none';
        }
    }
    otherOption();
    //-----------ocultar respuesta a checkear otro item
    if (collapseVivienda.style.display == "block") {
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('valorOtros').style.display="none";
    } else {
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }
    if (collapseJubilacion.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('valorOtros').style.display="none";

    } else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }

    if (collapseMovilidad.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('valorOtros').style.display="none";

    } else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }

    if (collapseViaje.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('valorOtros').style.display="none";
    }
    else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }
    if (collapseEducacion.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('valorOtros').style.display="none";
    }
    else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }
    if (collapseFamilia.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('valorOtros').style.display="none";
    }
    else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }
    if (collapseCapital.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById('showFamily').style.display="block";
    }
    else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
    }
    if (collapseOtros.style.display == "block") {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
        document.getElementById('showFamily').style.display="block";
    }
    else {
        document.getElementById("compra").checked = false;
        document.getElementById("remodelacion").checked = false;
        document.getElementById("jubilacion").checked = false;
        document.getElementById("carro").checked = false;
        document.getElementById("motocicleta").checked = false;
        document.getElementById("bicicleta").checked = false;
        document.getElementById("patineta").checked = false;
        document.getElementById("vacaciones").checked = false;
        document.getElementById("sabatico").checked = false;
        document.getElementById("bono-escolar").checked = false;
        document.getElementById("estudios-superiores").checked = false;
        document.getElementById("universidad").checked = false;
        document.getElementById("celebraciones").checked = false;
        document.getElementById("hijos").checked = false;
        document.getElementById("sostenimiento").checked = false;
        document.getElementById("patrimonio").checked = false;
        document.getElementById("emprendimiento").checked = false;
    }
    if(document.querySelector('input[id="otrosChecked"]:checked') || document.querySelector('input[id="jubilacionChecked"]:checked')){
        document.getElementById('validate').style.background="#dd141d";
    }else{
        document.getElementById('validate').style.background="#939393";
    }
  
    
});
function irA() {
    window.location.href = 'screen-2-Eleva.html';
}
if (collapseOtros.style.display == 'block') {
    console.log('asdfghj');
}
