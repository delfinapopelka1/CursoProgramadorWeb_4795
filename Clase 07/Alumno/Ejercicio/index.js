//para obtener el dato
var pedirNombre = prompt('ingresa tu nombre')


//para guardar lo que ingresaron
localStorage.setItem('nombreGuardado', pedirNombre)

//para recuperar el dato

var nombreParaLocaStorage = localStorage.getItem('nombreGuardado')
//para mostrarlo
console.log('El nombre obtenido es' + nombreParaLocaStorage)


var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

guardarLista('llaveEstudiantes', testList)


var JsonTestList = JSON.stringify(testList)

function localSession(nombreParaGuardar, arregloQueQueresRecibir) {
    if (typeof nombreParaGuardar == 'string' && Array.isArray(arregloQueQueresRecibir)){
        var jsonArreglo = JSON.stringify(arregloQueQueresRecibir)
       localSession = JSON.setItem(nombreParaGuardar,jsonArreglo)
    }
    
}

guardarLista('listaAGuardar',testList)