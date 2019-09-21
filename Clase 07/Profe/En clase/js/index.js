var prueba = null

console.log('El tipo de la variable prueba es: ' + typeof prueba)

var test = '24'

console.log('Cantidad de caracteres en variable test: ' + test.length)

var numero = 2

// numero.toLowerCase()

var cadena = 'Nombre1-Nombre2-Nombre3'

var nombresSeparados = cadena.split('-')

console.log(nombresSeparados)

var arregloNumeros = 1 //[ 1, 2, 3 ]

console.log('ES UN ARRAY: ', Array.isArray(arregloNumeros))

var arregloNumeros = [ 1, 2, 3 ]

console.log(arregloNumeros)

arregloNumeros.push(4)

console.log(arregloNumeros)

var arregloVacio = []

arregloVacio.push('Hola')

console.log(arregloVacio)

var oldCars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2002
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 1991
  }
]

oldCars.push({
  model: `Maranello`,
  brand: 'Ferrari',
  year: 2018
})

var resultadoAutos = []

oldCars.forEach((car) => {
  if (car.year > 2014) {
    resultadoAutos.push(car)
  }
})

console.log('LISTA ORIGINAL')
console.log(oldCars)

console.log('LISTA DE AUTOS CON AÑO MAYOR A 2014')
console.log(resultadoAutos)

var arrayPalabras = [ 'Auto', 'Casa', 'Moto' ]

var arrayConvertido = arrayPalabras.join('-')

console.log(arrayConvertido)

var arraySeparado = arrayConvertido.split('-')

console.log(arraySeparado)

var palabras = [ 'Esto', 'es', 'un', 'mensaje', 'del', 'profe' ]

//LAS PALABRAS DEL MENSAJE DEBEN ESTAR SEPARADAS POR ESPACIO.

var personas = [ 'Pedro', 'Maria', 'Florencia' ]

//QUIERO ELIMINAR A MARIA

var numeros = [ 3, 6, 9, 12, 15 ]

//QUIERO UN ARREGLO NUEVO CON LOS NUMEROS 9 Y 12
