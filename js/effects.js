var collapseVivienda = document.getElementById('collapseVivienda');
var collapseMovilidad = document.getElementById('collapseMovilidad');
var collapseViaje = document.getElementById('collapseViaje');
var collapseEducacion = document.getElementById('collapseEducacion');
var collapseFamilia = document.getElementById('collapseFamilia');
var collapseCapital = document.getElementById('collapseCapital');
var collapseOtros = document.getElementById('collapseOtros');
var viviendaicono = document.getElementById('vivienda-icono');
var viviendaicono = document.getElementById('vivienda-icono');
var jubilacionicono = document.getElementById('jubilacion-icono');
var movilidadicono = document.getElementById('movilidad-icono');
var viajeicono = document.getElementById('viaje-icono');
var educacionicono = document.getElementById('educacion-icono');
var familiaicono = document.getElementById('familia-icono');
var capitalicono = document.getElementById('capital-icono');
var otrosicono = document.getElementById('otros-icono');
var colvivienda = document.getElementById('col-vivienda');
var coljubilacion = document.getElementById('col-jubilacion');
var colmovilidad = document.getElementById('col-movilidad');
var colviaje = document.getElementById('col-viaje');
var coleducacion = document.getElementById('col-educacion');
var colfamilia = document.getElementById('col-familia');
var colcapital = document.getElementById('col-capital');
var colotros = document.getElementById('col-otros');
document.getElementById('myForm').addEventListener('change', function () {
    if (
        collapseVivienda.style.display == 'none' &&
        collapseMovilidad.style.display == 'none' &&
        collapseViaje.style.display == 'none' &&
        collapseEducacion.style.display == 'none' &&
        collapseFamilia.style.display == 'none' &&
        collapseCapital.style.display == 'none' &&
        collapseOtros.style.display == 'none'
    ) {
        console.log('cerrados');
        viviendaicono.style.opacity = '1';
        viviendaicono.style.opacity = '1';
        jubilacionicono.style.opacity = '1';
        movilidadicono.style.opacity = '1';
        viajeicono.style.opacity = '1';
        educacionicono.style.opacity = '1';
        familiaicono.style.opacity = '1';
        capitalicono.style.opacity = '1';
        otrosicono.style.opacity = '1';

        viviendaicono.style.filter = 'grayscale(0%)';
        viviendaicono.style.filter = 'grayscale(0%)';
        jubilacionicono.style.filter = 'grayscale(0%)';
        movilidadicono.style.filter = 'grayscale(0%)';
        viajeicono.style.filter = 'grayscale(0%)';
        educacionicono.style.filter = 'grayscale(0%)';
        familiaicono.style.filter = 'grayscale(0%)';
        capitalicono.style.filter = 'grayscale(0%)';
        otrosicono.style.filter = 'grayscale(0%)';
        
        colvivienda.style.opacity = '1';
        coljubilacion.style.opacity = '1';
        colmovilidad.style.opacity = '1';
        colviaje.style.opacity = '1';
        coleducacion.style.opacity = '1';
        colfamilia.style.opacity = '1';
        colcapital.style.opacity = '1';
        colotros.style.opacity = '1';
    }
    else if (
        collapseVivienda.style.display == 'block' ||
        collapseMovilidad.style.display == 'block' ||
        collapseViaje.style.display == 'block' ||
        collapseEducacion.style.display == 'block' ||
        collapseFamilia.style.display == 'block' ||
        collapseCapital.style.display == 'block' ||
        collapseOtros.style.display == 'block'
    ) {
        document.getElementById('rowFour').classList.remove('row--rowMarginBottonMore');
        console.log('abierto');
    }
    if(collapseVivienda.style.display == 'block' ||
    collapseMovilidad.style.display == 'block' ||
    collapseViaje.style.display == 'block' ||
    collapseEducacion.style.display == 'block' ||
    collapseFamilia.style.display == 'block' ||
    collapseCapital.style.display == 'block' ||
    collapseOtros.style.display == 'block'){
        console.log('dfghjklñ')
        document.getElementById('rowFour').classList.remove('row--rowMarginBottonMore');
        document.getElementById('rowFour').style.marginBottom="15px";
    } 
    else if(document.querySelector('input[id="jubilacionChecked"]:checked') ||
    collapseVivienda.style.display == 'none' ||
    collapseMovilidad.style.display == 'none' ||
    collapseViaje.style.display == 'none' ||
    collapseEducacion.style.display == 'none' ||
    collapseFamilia.style.display == 'none' ||
    collapseCapital.style.display == 'none' ||
    collapseOtros.style.display == 'none'
    ){
        document.getElementById('rowFour').classList.add('row--rowMarginBottonMore');   
    }
});
