
function getLocalList(key) {

    if (typeof key == 'string'){
    var  recupLocalList = localStorage.getItem(key)
    if (recupLocalList) {
        var parsearLista = JSON.parse(recupLocalList)
        return parsearLista
    
    }else { 
        return []
        
    }

    }
}

var listaDeEstudiantes = getLocalList('key')

if (listaDeEstudiantes) {
    console.log(listaDeEstudiantes)
    if (listaDeEstudiantes.length){
    console.log('numero de alumnos guardados' + listaDeEstudiantes)
    }
    else{
    console.log('la lista esta vacia')
}  

}
else{
    console.log('error')
}