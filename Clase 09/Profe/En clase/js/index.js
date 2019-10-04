//accediendo al nodo mediante el attributo Id
var divPrueba = document.getElementById('prueba')

//ingresar un contenido al div
// divPrueba.innerHTML = 'Bienvenido al curso de programación web.'

//Accediendo a nodos por el nombre de clase.

// var nodosPorClase = document.getElementsByClassName('clase10')

// // nodosPorClase[0].innerHTML = 'PARRAFO 1'
// // nodosPorClase[1].innerHTML = 'PARRAFO 2'

// console.log(nodosPorClase)

//HACER UN SCRIPT QUE PIDA UN NOMBRE AL USUARIO, Y MUESTRE UN MENSAJE
//HOLA (NOMBRE_RECIBIDO), BUENOS DIAS
//EN UN DIV EN UNA PAGINA HTML.

//PEDIR NOMBRE AL USUARIO
var nombreIngresado = prompt('Ingrese nombre')

//Obtengo el div para escribir el mensaje
var divContenedor = document.getElementById('contenedorMensaje')

//ingresar un contenido al div
divContenedor.innerHTML = `Hola ${nombreIngresado}, buenos dias`

//CREAR UN SCRIPT QUE BUSQUE TODOS LOS PARRAFOS QUE TENGAN UNA CLASE X Y
//LES PONGA COMO CONTENIDO, SOY EL PARRAFO Nro (Numero del parrafo)

//SOY EL PARRAFO 1
//SOY EL PARRAFO 2
//SOY EL PARRAFO 3
//SOY EL PARRAFO 4
//SOY EL PARRAFO 5

//ALTERNATIVA FOR COMUN

//obtengo los nodos de los parrafos con clase parrafo
var parrafos = document.getElementsByClassName('parrafo')

// for (var posicion = 0; posicion < parrafos.length; posicion++) {
//   parrafos[posicion].innerHTML = `Soy el parrafo Nro : ${posicion + 1}`
// }

//ALTERNATIVA FOR EACH

//CONVIERTE UNA LISTA DE NODOS EN UN ARRAY DE JAVASCRIPT
parrafos = Array.from(parrafos)

parrafos.forEach((parrafo, posicion) => {
  parrafo.innerHTML = `Soy el parrafo Nro : ${posicion + 1}`
})

//Obtengo la lista creada vacia
var lista = document.getElementById('lista')

//inicializo variable para almacenar el nuevo listItem creado.
var listItemNode

for (var i = 0; i < 10; i++) {
  //creo un nuevo listItem vacio.
  listItemNode = document.createElement('li')

  //Agrego contenido al nuevo elemento creado.
  listItemNode.innerHTML = `Hola soy el Item de la lista Nro ${i + 1} `

  //agrego el nuevo elemento hijo creado al nodo padre, osea la lista.
  lista.appendChild(listItemNode)
}

//HACEMOS UN SCRIPT QUE MODIFIQUE EL PADRE DE UN NODO Y LUEGO ESE NODO SE ELIMINE.

//obtenemos el nodo hijo mediante el id
var nodoHijo = document.getElementById('child')

//busco el padre del nodoHijo
var nodoPadre = nodoHijo.parentNode

//modifico el texto del nodo padre
// nodoPadre.innerHTML = 'PADRE MODIFICADO'

//elimino el nodo hijo dentro del padre.
nodoPadre.removeChild(nodoHijo)

//CREO UN NUEVO HIJO
var nuevoHijo = document.createElement('div')

nuevoHijo.innerHTML = 'ESTE ES EL NUEVO HIJO'

nodoPadre.appendChild(nuevoHijo)

//OBTENIENDO ID Y CLASS NAME DEL NODO PADRE

console.log('El id del nodo padre es: ' + nodoPadre.id)
console.log('La clase del nodo padre es: ' + nodoPadre.className)

var input = document.getElementById('input')

console.log('El valor del input en HTML es: ' + input.value)

var mensajePrueba = document.getElementById('mensajePrueba')

console.log('Es el contenido del div mensaje prueba ' + mensajePrueba.innerHTML)
