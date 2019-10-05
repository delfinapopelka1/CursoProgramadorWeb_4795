
var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']


var JsonTestList = JSON.stringify(testList)

function guardarLista(nombreParaGuardar, arregloQueQueresRecibir) {
    if (typeof nombreParaGuardar == 'string' && Array.isArray(arregloQueQueresRecibir)){
        var jsonArreglo = JSON.stringify(arregloQueQueresRecibir)
       localSession = JSON.setItem(nombreParaGuardar,jsonArreglo)
    }
    
}

guardarLista('listaAGuardar',testList)