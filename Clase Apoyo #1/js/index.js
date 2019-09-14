var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var textoIngresado = prompt('Favor de ingresar el nombre o apellido del alumno')

//function que recibe dos parametros y RETORNA la posicion de un alumno si es encontrado o -1 si no hay ningun alumno que se corresponda con el textoAbuscar
function buscarAlumno (textoABuscar, alumnos) {
  for (var i = 0; i < alumnos.length; i++) {
    //obtengo el alumno que esta en la posicion i dentro del arreglo de alumnos.
    var alumno = alumnos[i]

    if (alumno.firstName == textoABuscar || alumno.lastName == textoABuscar) {
      return i //termino la ejecucion de la funcion, porque encontre un alumno que coincide con el texto a busar y devuelvo la posicion que ocupa en el arreglo.
    }
  }

  //la funcion retorna -1 porque no encontró ningún alumno que coincida con el parámetro "textoABuscar";
  return -1
}

//funcion que recibe un parametro con un texto y que lo imprime en la consola del browser.
function mostrarResultado (resultado) {
  console.log(`El resultado es: ${resultado}`)
}

var posicionAlumno

//Estoy asignando el RESULTADO de la funcion buscarAlumno a la variable posicionAlumno.
posicionAlumno = buscarAlumno(textoIngresado, studentsList)
//   //SON SINONIMOS!!!
//   mostrarResultado(posicionAlumno) ==
// console.log('El resultado es: ' + resultado)

mostrarResultado(posicionAlumno)

function buscarAlumnoES6 (nombreABuscar, alumnos) {
  var posicionEncontrada = -1

  alumnos.forEach((alumno, posicion) => {
    if (alumno.firstName == nombreABuscar || alumno.lastName == nombreABuscar) {
      posicionEncontrada = posicion
      return
    }
  })

  return posicionEncontrada
}

console.log('AHORA ESTAMOS RESOVIENDO EL DESAFIO N4 CON ES6')

var posicionES6 = buscarAlumnoES6(textoIngresado, studentsList)

mostrarResultado(posicionES6)
