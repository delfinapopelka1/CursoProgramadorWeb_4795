
//funcion que debe suceder al hacer el click 

$(function() {
    //suscribirse adentro para asegurarse que el elemento este cargado
    var ultimoClick = 'circle'
//on recibe dos parametros el elemeno al cual me quiero suscribir y una funcion nueva 
    $('.square').on('click', function(){
        //darme el elemento donde esta pasando el evento
        var elemento = $(this);
// ! es para negar

//si el elemento no tiene ninguna de las dos clases en cuestion, veo que clase ponerle
        if (!(elemento.hasClass('circle') || elemento.hasClass('cross'))){
         
            if (ultimoClick == 'cross'){
            elemento.addClass('circle')
            ultimoClick = 'circle';
            }
        
        else {
            elemento.addClass('cross');
            ultimoClick = 'cross'
        }

    }
})
    
})
