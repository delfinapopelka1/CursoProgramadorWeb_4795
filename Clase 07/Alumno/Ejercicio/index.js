//para obtener el dato
var pedirNombre = prompt('ingresa tu nombre')


//para guardar lo que ingresaron
localStorage.setItem('nombreGuardado', pedirNombre)

//para recuperar el dato

var nombreParaLocaStorage = localStorage.getItem('nombreGuardado')
//para mostrarlo
console.log('El nombre obtenido es' + nombreParaLocaStorage)