//CLASE 09 STORAGE!!

var nombres = [ 'Pedro', 'Maria', 'Oscar' ]

// sessionStorage.setItem('arregloPersonas', nombres)

var nombresFromSessionStorage = sessionStorage.getItem('arregloPersonas')

// console.log('Arreglo obtenido del session storage ' + nombresFromSessionStorage)

//CLASE 09 LOCAL STORAGE!!

var nombres2 = [ 'Pedro', 'Maria', 'Oscar' ]

// localStorage.setItem('arregloPersonas', nombres)

var nombresFromLocalStorage = localStorage.getItem('arregloPersonas')

console.log('Arreglo obtenido del session storage ' + nombresFromLocalStorage)

//USANDO REMOVE ITEM

localStorage.removeItem('arregloPersonas')

nombresFromLocalStorage = localStorage.getItem('arregloPersonas')

console.log('Arreglo obtenido del session storage ' + nombresFromLocalStorage)

//HAGAMOS UN SCRIPT QUE TOME UN NOMBRE INGRESADO POR EL USUARIO, LO PERSISTA EN EL LOCAL STORAGE
// Y LUEGO LO RECUPERE PARA MOSTRAR UN MENSAJE PERSONALIZADO 'HOLA NOMBRE, BUENOS DIAS.'

//OBTENIENDO NOMBRE DE USUARIO
var nombreUsuario = prompt('Ingrese nombre')

//PERSISITENDO VALOR EN EL LOCAL STORAGE
localStorage.setItem('nombrePersistido', nombreUsuario)

//OBTENIENDO NOMBRE DEL LOCAL STORAGE
var nombreDesdeLS = localStorage.getItem('nombrePersistido')

//IMPRIMIR EN CONSOOLA EL NOMBRE OBTENIDO
console.log(`Hola ${nombreDesdeLS}, Buenos dias`)

//DECLARO OBJECTO JAVASCRIPT PERSONA
var persona = {
  nombre: 'pedro',
  edad: 28
}

//SERIALIZAR O CONVERTIR A JSON EL OBJECTO PERSONA.
var personaJson = JSON.stringify(persona)

console.log('Persona JSON ' + personaJson.toUpperCase())

var personaNombreJSON = personaJson.nombre
console.log(
  'Este es el nombre de la persona desde el objeto JSON :' + personaNombreJSON
)

var personaJavascript = JSON.parse(personaJson)

console.log('PERSONA JAVASCRIPT')
console.log(personaJavascript)

console.log(
  'Este es el nombre de la persona desde el objeto JAVSCRIPT :' +
    personaJavascript.nombre
)

//MINI EJERCICIO

var testList = [ 'CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS' ]

var lista2 = [ 'NICOLAS', 'LUCAS' ]

function saveList (nombreEnLs, lista) {
  //PRIMERO VALIDO LOS TIPOS DE PARAMETROS RECIBIDOS.
  if (typeof nombreEnLs == 'string' && Array.isArray(lista)) {
    //CONVIERTO DE ARREGLO JAVASCRIPT A JSON
    var arrayJson = JSON.stringify(lista)

    //PERSISTO EN LS EL ARRAY COMO JSON
    localStorage.setItem(nombreEnLs, arrayJson)
    // localStorage.setItem('nombre', arrayJson)
  }
}

saveList('listaAGuardar', testList)

saveList('estaEsOtraLista', lista2)

function buscarLista (llaveAbuscar) {
  if (typeof llaveAbuscar == 'string') {
    //busco el elemento en el LS mediante la llave recibida por parametro.
    var listaEnLocalStorage = localStorage.getItem(llaveAbuscar)

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

//IMPRIMIENDO EL VALOR OBTENIDO (DEBERIA ser un array)
console.log(buscarLista('estaEsOtraLista'))

//IMPRIMIENDO EL VALOR OBTENIDO (Deberia ser vacio)
console.log(buscarLista('OtraLista'))
