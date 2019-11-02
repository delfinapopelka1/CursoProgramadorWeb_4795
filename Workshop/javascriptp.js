
//le pongo un nombre a la variable tipo string
var localKeyList = 'listaDeEstudiantes'

//Busco la lista en el local. Si no tienen nada te devuelve una lista vacia 
var listaDeEstudiantes = getLocalList(localKeyList)

localStorage.setItem('listaDeEstudiantes', listaDeEstudiantes)
var mainListNode = document.getElementById('mainList')

var alumno
//le agrego el valor de cada input del formulario a las variables correspondientes

function getLocalList(key) {
    // Valido que reciba un string
    if (typeof key === 'string') {
      // Trato de recuperar la lista del localStorage
      var localList = localStorage.getItem(key)
      if (localList) {
        // Si la lista existía la tranformo en JavaScript y la devuelvo
        var parsedList = JSON.parse(localList)
        return parsedList
      } else {
        // Sino existía devuelvo un array vacío
        return []
      }
    }
  }


function inputBlurHanlderNombre (evento) {
    var nombreEvento = evento.target
    var valorElementoNombre = nombreEvento.value
  
    if (valorElementoNombre != ''){
      nombreEvento.classList.add('is-valid')
      nombreEvento.classList.remove('is-invalid')
  } else {
      nombreEvento.classList.add('is-invalid')
      nombreEvento.classList.remove('is-valid')
  }
}

  
var nombreInput = document.getElementById('firstName')

nombreInput.onblur = inputBlurHanlderNombre



function busquedaDniPorInput(dni,listaDeEstudiantes) {
    for (var posicion = 0; posicion < listaDeEstudiantes.length; posicion++){
        var alumno = listaDeEstudiantes[posicion]
        if(dni == alumno.dni){
            return posicion;
            //no agrega nada
        }
    }
return -1
//agrega alumno junto a la proxima funcion
}



function inputDniValidacion (evento) {
    //.target para ver donde ocurrio el evento
    var nodeDniEvento = evento.target
    var valorElementoDni = nodeDniEvento.value

    //debo parsealo para que no entre como string
    var dniPaseadoValue = parseInt(valorElementoDni.value)
    var lugarAlumno = busquedaDniPorInput(valorElementoDni.value, listaDeEstudiantes)
  
    if ((valorElementoDni != '') && (valorElementoDni > 0 ) && (busquedaDniPorInput = -1)){
      nodeDniEvento.classList.add('is-valid')
      nodeDniEvento.classList.remove('is-invalid')
    
    } else {
        nodeDniEvento.classList.add('is-invalid')
        nodeDniEvento.classList.remove('is-valid')
  }
}

var dniInput = document.getElementById('dni')

dniInput.onblur = inputDniValidacion

function EliminarAlumnoDni ()



function agregarEstudiante(){
    var  firstNameValue = firstNameNode.value
    var  lastNameValue = lastNameNode.Value
    var  dniValue = dniNode.value
    var  emailValue = emailNode.value
  
    var alumno = {
      firstName: firstNameNode.value,
      lastName:  lastNameNode.value,
      dni: dniNode.value,
      email: emailNode.value,
    }
  //agrega alumno al final del array
    listaDeEstudiantes.push(alumno)
  
  
  
  
  
  
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
/*
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


/*function agregarAlumnoOnClick (alumnoParaAgregar, listaenbusqueda) {
    for (var i = 0; i < listaenbusqueda.length; i++) {
        var alumnoParaAgregar = listaenbusqueda[posicion] {
            if (alumnoParaAgregar != i) {
                var crearNodo = document.getElementsByClassName
                crearNodo.innerHTML = alumnoParaAgregar
                } else {
                
                }
                }

} */
