console.log('Init app clase 04')

//FUNCIONES

//Esta funciona suma e imprime en pantalla la suma de 2 numeros recibidos por parametro.
function sumar (numero1, numero2) {
  var resultado = numero1 + numero2
  // alert(resultado)
}

//LLAMANDO A FUNCION SUMAR CON 2 PARAMETROS.
sumar(2, 2)

//FUNCION SIN PARAMETROS

function mostrarHora () {
  var hoy = new Date()
  alert(hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate())
}

// mostrarHora()

//funcion con retorno

function crearMensaje (nombre) {
  var mensaje = 'Hola, ' + nombre
  return mensaje
}

//definicion de funcion mostrar mensaje
function mostrarMensaje (contenido) {
  // alert(contenido)
  console.log(contenido)
}

//guardando resultado de la funcion crear mensaje.
var mensajePersonalizado = crearMensaje('Pedro')

//invocando la funcion mostrarMensaje con el mensaje creado por la funcion CrearMensaje
mostrarMensaje(mensajePersonalizado)

mostrarMensaje('Hoy es sabado!')

//SCOPE GLOBAL

var nombre

function asignarValor () {
  nombre = 'Pepe'
}

asignarValor()

alert('El nombre es: ' + nombre)
