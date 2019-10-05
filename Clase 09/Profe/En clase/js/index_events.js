function botonClickHandler () {
  alert('ES SABADO QUIERO BIRRA Y ASADO.')
}

//OBTENER EL ELEMENTO BOTON DEL HTML PARA PODER SUSCRIBIRME AL EVENTO CLICK
// var boton = document.getElementById('boton')

//SUSCRIBIENDOME AL EVENTO ON CLICK
//AQUI USO LA FUNCION CREADA MAS ARRIBA SIN PARAMETROS PARA EVITAR
//QUE SEA LLAMADA AL MOMENTO DE LA EJECUCION DEL SCRIPT
// boton.onclick = botonClickHandler

function inputBlurHanlder (evento) {
  var elementoDondeHaOcurridoElEvento = evento.target

  var idElemento = elementoDondeHaOcurridoElEvento.id

  var valorElemento = elementoDondeHaOcurridoElEvento.value

  alert(
    'ACABA DE OCURRIR UN EVENTO BLUR DEL INPUT CON ID:' +
      idElemento +
      'CON EL VALOR: ' +
      valorElemento
  )
}

var input1 = document.getElementById('primerInput')

var input2 = document.getElementById('segundoInput')

input1.onblur = inputBlurHanlder
input2.onblur = inputBlurHanlder
