//SUSCRIPCION A EVENTOS COMO ATRIBUTOS

function manejarEventoClick (informacionEvento) {
  var elementoClickeado = informacionEvento.target

  alert('El usuario hizo click en el boton con el id ' + elementoClickeado)
}

function manejarEventoBlur () {
  alert('El usuario dejo de hacer foco el campo de texto')
}

//obtengo el boton de html
var boton = document.getElementById('botonPruebaSemantica')

boton.onclick = manejarEventoClick

//obtengo el input desde el HTML
var campoPrueba = document.getElementById('campoPrueba')

//me subscribo al evento blur del campo.
campoPrueba.onblur = manejarEventoBlur
