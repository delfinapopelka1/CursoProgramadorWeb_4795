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
