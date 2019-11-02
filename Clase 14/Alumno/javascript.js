$(function(){
//busco la imagen por clase

//este function va a ser que busque solo en esa clase
    $('.figure-img').on('click', function(){
        //siempre lo que este dentro de una funcion, el this se utilizara para la clase donde ocurra el evento.
        var elementoQueEstaPasandoElEvento = $(this);

        //el evento que queres que suceda en la determinada clase 
        elementoQueEstaPasandoElEvento.fadeOut(2000, function(){
            elementoQueEstaPasandoElEvento.remove();
        });

    })








})