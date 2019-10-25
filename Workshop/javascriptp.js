function inputBlurHanlderNombre (evento) {
    var nombreEvento = evento.target
    var valorElemento = nombreEvento.value
  
    if (valorElemento != ''){
      nombreEvento.classList.add('is-valid')
      nombreEvento.classList.remove('is-invalid')
  } else {
      nombreEvento.classList.add('is-invalid')
      nombreEvento.classList.remove('is-valid')
  }
}

  
var nombreInput = document.getElementById('firstName')

nombreInput.onblur = inputBlurHanlderNombre



function inputBlurHanlderDni (evento2) {
    var dniEvento = evento2.target
    var valorElementoDni = dniEvento.value
  
    if ((valorElementoDni != '') && (valorElementoDni > 0 ) && busquedaDni(valorElementoDni, null) ){
      dniEvento.classList.add('is-valid')
      dniEvento.classList.remove('is-invalid')
      /* DEJAR PARA DESPUES DNI
     valorElementoDni = localStorage.getItem(keyDni)
        */
        

  } else {
      dniEvento.classList.add('is-invalid')
      dniEvento.classList.remove('is-valid')
  }
}



var dniInput = document.getElementById('dni')

dniInput.onblur = inputBlurHanlderDni

function busquedaDni(dniABuscar,listaenbusqueda) {
    for (var posicion = 0; posicion < listaenbusqueda.length; posicion++){
        var alumno = listaenbusqueda[posicion]
        if(alumno.dni == dniABuscar ){
            return posicion;
        }
    }
return -1

}

