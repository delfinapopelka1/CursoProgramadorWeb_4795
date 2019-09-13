var arregloNotas = [9,10,10,8,7,6]


function calcularPromedio(notas) {
     
    var suma = 0

    for (var posicion = 0; posicion < notas.length; posicion++) {
        
        suma += notas[posicion]
    }

    var resultado = (suma / notas.length)
   return resultado
}



alert(calcularPromedio(arregloNotas))