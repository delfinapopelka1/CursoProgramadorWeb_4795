
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


//VALIDACION NOMBRE
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


//VALIDACION DNI
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

//ELIMINAR ESTUDIANTE CON DNI
function eliminarAlumnoDniValidacion (evento){
  var inputNode = event.target

  var index = busquedaDniPorInput(inputNode.value, listaDeEstudiantes)

  if (index > -1) {
    // se habilita el botón
    deleteStudentButtonNode.disabled = false
  } else {
    // Deshabilita el botón
    deleteStudentButtonNode.disabled = true
  }

}

var eliminarDniNode = document.getElementById('deleteDni')

eliminarDniNode.oninput = eliminarAlumnoDniValidacion

var botonEliminarEstudiante = document.getElementById('deleteStudentButton')

botonEliminarEstudiante.onclick = eliminarEstudiante

function eliminarEstudiante() {
  var eliminarDniValid = eliminarDniNode.value

  var index = busquedaDniPorInput(eliminarDniValid, listaDeEstudiantes)

  // Elimino en la fuente de verdad
  listaDeEstudiantes.splice(index, 1)

  // Piso la lista del localStorage
  setLocalList(localKeyList, listaDeEstudiantes)

  // Busco en el dom el nodo y lo elimino de la lista
  var node = document.getElementById(eliminarDniValid)
//PARA ELIMINARLO de la lista html
  mainListNode.removeChild(node)

  eliminarDniNode.value = ''
  eliminarDniBoton.disabled = true

  console.log('Fuente de verdad luego de eliminar ', listaDeEstudiantes)
}

//VALIDACION EMAIL

function validarEmail (evento){
  var inputNode = event.target

  if  (!inputNode.value ||
  inputNode.value.indexOf('@') === -1 ||
  inputNode.value.indexOf('.') === -1
) {
  inputNode.classList.remove('is-valid')
  inputNode.classList.add('is-invalid')
} else {
  inputNode.classList.remove('is-invalid')
  inputNode.classList.add('is-valid')
}

}

var emailNode = document.getElementById('email')
emailNode.onblur = validarEmail


//AGREGAR ESTUDIANTE FUNCION
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
