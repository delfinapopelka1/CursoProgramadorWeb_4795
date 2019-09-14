var textopromt = prompt("ingrese su nombre")

listadealumnos = [
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
function busquedaAlumno(textobuscar,listaenbusqueda) {
    for (var posicion = 0; posicion < listaenbusqueda.length; posicion++){
        var alumno = listaenbusqueda[posicion]
        if(alumno.firstName == textobuscar || alumno.lastName == textobuscar){
            return posicion;
        }
    }
return -1


}

var resultado = busquedaAlumno(textopromt, listadealumnos)

console.log('El resultado es' + resultado)