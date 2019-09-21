/*

var nombreUsuario = prompt('ingrese su nombre')
var nodoDiv = document.getElementById ('mostrarNombre')
nodoDiv.innerHTML = ('Hola ' + nombreUsuario + ', Buenos Dias')
*/

var nodoDeClasesParrafo = document.getElementsByClassName('parrafo')


for (var i = 0 ; i < nodoDeClasesParrafo.length ; i++) {
    nodoDeClasesParrafo[i].innerHTML = 'soy el parrafo Nro: ' + (i +1)
}

var lista = document.getElementById('lista')

for (var posicion = 0 ; posicion < 6; posicion++){
    listItemNode = document.createElement('li')
    listItemNode.innerHTML = 'parrafito ' + (posicion +1)
    lista.appendChild (listItemNode)
}

