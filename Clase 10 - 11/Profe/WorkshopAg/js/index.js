function guardarLista (nombre, lista) {
  //PRIMERO VALIDO LOS TIPOS DE PARAMETROS RECIBIDOS.
  if (typeof nombre === 'string' && Array.isArray(lista)) {
    //CONVIERTO DE ARREGLO JAVASCRIPT A JSON
    var arrayJson = JSON.stringify(lista)

    //PERSISTO EN LS EL ARRAY COMO JSON
    localStorage.setItem(nombre, arrayJson)

    // localStorage.setItem('nombre', arrayJson)
  }
}

function obtenerLista (nombreLista) {
  if (typeof nombreLista === 'string') {
    //busco el elemento en el LS mediante la llave recibida por parametro.
    var listaEnLocalStorage = localStorage.getItem(nombreLista)

    //Si se elemento deseado, lo parseo a JS.
    if (listaEnLocalStorage != null) {
      //convirtiendo de JSON almacenado en el Local Storage a un objeto Javascript
      var listaParseada = JSON.parse(listaEnLocalStorage)

      //devuelo la lista
      return listaParseada
    }
  }
  //Estoy retornando un array vacio porque el parametro recibido NO ES un string o no se encontró el elmento.
  return []
}

//FUNCION QUE CREA UN NUEVO NODO HTML Y LO AGREGA A UN CONTENEDOR.
function crearNodoHTML (tag, contenidoHtml, contenedor) {
  //Creando elemento HTML basado en el parametro tag recibido.
  var nuevoElemento = document.createElement(tag)

  //asigno el contenido recibido en el segundo parametro.
  nuevoElemento.innerHTML = contenidoHtml

  //Agrego el elemento elemento generado al contenedor.
  contenedor.appendChild(nuevoElemento)
}

//FUNCION QUE CREA UN ESTUDIANTE EN DENTRO UNA DE LISTA HTML.
function crearNodoEstudiante (estudiante, listaEstudiantes) {
  //Creando el elemento HTML li
  var listItem = document.createElement('li')

  listItem.className = 'list-group-item'

  //Llamo a la funcion createHtmlNode para el elemento h1, con el contenido del nombre y apellido y lo agrego al lisItem
  crearNodoHTML(
    'h1',
    `${estudiante.firstName} ${estudiante.lastName}`,
    listItem
  )

  //Llamo a la funcion createHtmlNode para el elemento h3, con el contenido del DNI lo agrego al lisItem
  crearNodoHTML('h3', `DNI: ${estudiante.dni}`, listItem)

  //Llamo a la funcion createHtmlNode para el elemento p, con el contenido del email y lo agrego al lisItem
  crearNodoHTML('p', `Email: ${estudiante.email}`, listItem)

  //Agrego el nuevo nodo lisItem a la lista del documento.
  listaEstudiantes.appendChild(listItem)
}

function validarCampoFormulario (evento) {
  //Estoy recuperando el elemento HTML desde el cual se disparó el evento.
  var elemento = evento.target

  //obtengo el valor del campo del formulario.
  var valorDelCampo = elemento.value

  if (valorDelCampo != '') {
    //Agregar la clase is-valid de bootstrap o su equivalente para demostrar que el campo es valido.
    elemento.classList.add('is-valid')
    elemento.classList.remove('is-invalid')
  } else {
    //Agregar la clase is-invalid de bootstrap o su equivalente para demostrar que el campo es invalido.
    elemento.classList.add('is-invalid')
    elemento.classList.remove('is-valid')
  }
}

function validarCampoDNI (evento) {
  //Estoy recuperando el elemento HTML desde el cual se disparó el evento.
  var elemento = evento.target

  //obtengo el valor del campo del formulario.
  var valorDelCampo = elemento.value

  var valorParseado = parseInt(valorDelCampo)

  if (valorDelCampo != '' && valorParseado > 0) {
    //Agregar la clase is-valid de bootstrap o su equivalente para demostrar que el campo es valido.
    elemento.classList.add('is-valid')
    elemento.classList.remove('is-invalid')
  } else {
    //Agregar la clase is-invalid de bootstrap o su equivalente para demostrar que el campo es invalido.
    elemento.classList.add('is-invalid')
    elemento.classList.remove('is-valid')
  }
}

function buscarAlumnoPorDNI (dni) {
  var alumnoEncontradoPosicion = -1
  listaEnLocalStorage.forEach((alumno, index) => {
    if (alumno.dni == dni) {
      alumnoEncontradoPosicion = index
    }
  })

  return alumnoEncontradoPosicion
}

//Obtengo el campo del html con id firstName
var campoNombre = document.getElementById('firstName')

//Me subscribo al evento blur con el handler validarCampoFormulario
campoNombre.onblur = validarCampoFormulario

//Obtengo el campo del html con id lastName
var campoLastName = document.getElementById('lastName')

//Me subscribo al evento blur con el handler validarCampoFormulario
campoLastName.onblur = validarCampoFormulario

var nombreLista = 'LISTA_WORKSHOP'

var students = [
  {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }
]

guardarLista(nombreLista, students)

var listaEnLocalStorage = obtenerLista(nombreLista)

console.log(listaEnLocalStorage)

var listaElementoHTML = document.getElementById('mainList')

listaEnLocalStorage.forEach((estudiante) => {
  crearNodoEstudiante(estudiante, listaElementoHTML)
})
