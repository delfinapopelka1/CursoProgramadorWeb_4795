//se escribe el keydown en todo el documento con (document)
//el primero que recibe dentro del parentesis es el evento que debe ocurrir para que suceda y la segunda en la funcion que queres que se ejecute
$(function() {
    $(document).on('keydown', function (event){


    if (event.which === 13){
        alert('he apretado la tecla enter')
    }
    })

})