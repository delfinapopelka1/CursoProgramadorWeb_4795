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
  
    if ((valorElementoDni != '') && (valorElementoDni > 0 ) /*&& busquedaDni(valorElementoDni, null)*/ ){
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

function inputDeleteAlumno (dniIngresado, listaenbusqueda) {

    for (var i = 0; i < listaenbusqueda.length; i++) {
        var alumno = listaenbusqueda[posicion]
        if (alumno.dni == dniIngresado ){
            alumno.remove
        } else {
            return []
        }
    }
}


var dniAlumnoEliminar = document.getElementById('deleteDni')

dniAlumnoEliminar.onclick = inputDeleteAlumno
/*Como hacerlo para que sea en el click del boton*/

function inputBlurHandlerEmail (evento3){
    var emailEvento = evento3.target
    var valorElementoEmail = emailEvento.value
    var expresionRegular = /\w+@\w+\[a-z]/

    if ((!expresionRegular.test(correo))){
        valorElementoEmail.classList.add('is-valid')
        valorElementoEmail.classList.remove('is-invalid')
  } else {
        valorElementoEmail.classList.add('is-invalid')
        valorElementoEmail.classList.remove('is-valid')
  }

    


}


var email = document.getElementById('email')

email.onblur = inputBlurHandlerEmail


function agregarAlumnoOnClick (alumnoParaAgregar, listaenbusqueda) {
    for (var i = 0; i < listaenbusqueda.length; i++) {
        var alumnoParaAgregar = listaenbusqueda[posicion] {
            if (alumnoParaAgregar != i) {
                var crearNodo = document.getElementsByClassName
                crearNodo.innerHTML = alumnoParaAgregar
                } else {
                /*No agrega nada*/
                }
                }

}