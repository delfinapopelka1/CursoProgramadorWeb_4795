//ENUNCIADO EJERCIO PRACTICA FUNCIONES

//DADO UNA LISTA DE PERSONAS CON NOMBRE Y EDAD. LISTARLAS TODAS EN LA CONSOLA Y DECIR, POR CADA UNA SI ES MAYOR DE EDAD O NO.

//FUNCIONES A UTILIZAR
//FUNCION RECORRER -> RECORRER LA LISTA DE PERSONAS.
//FUNCION ESMAYORDEEDAD -> FUNCION QUE DADA UNA EDAD DETERMINA SI ES MAYOR DE EDAD O NO.
//FUNCTION MOSTRAR_PERSONA -> FUNCION QUE DADA UNA PERSONA, IMPRIME EN CONSOLA LO SIGUIENTE: La persona xxx es mayor edad o la persona xxx es menor de edad.

//Función que recorre una lista de personas e imprime cada una.
function recorrer (personas) {
  console.log('LISTA DE PERSONAS')

  personas.forEach((persona) => {
    mostrarPersona(persona)
  })
}

//Función que dada una edad recibida por parametro, devuelve si es mayor de edad o no. (booleano)
function esMayorDeEdad (edad) {
  if (edad >= 18) {
    return true
  }

  return false
}

//Función que imprime por consola la persona junto a su nombre y si es mayor de edad o no.
function mostrarPersona (persona) {
  //Ejemplo = La persona Luis Garcia
  var mensaje = 'La persona ' + persona.nombre

  if (esMayorDeEdad(persona.edad) == true) {
    mensaje += ' es MAYOR de edad.'
  } else {
    mensaje += ' es MENOR de edad.'
  }

  console.log(mensaje)
}

//Listado de personas de prueba.
var listadoDePersonas = [
  {
    nombre: 'Juan',
    edad: 14
  },
  {
    nombre: 'Florencia',
    edad: 25
  },
  {
    nombre: 'Pedro',
    edad: 35
  },
  {
    nombre: 'Maria',
    edad: 6
  }
]

//Llamado a la función de recorrer pasándole el listado de personas como parámetro.
recorrer(listadoDePersonas)
