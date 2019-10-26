$(function() {
    $('#email').on('blur',function (){
        var elemento = $(this)
        var valorElemento = elemento.val() 
        //si el index es distinto de menos 1 es porque esta presente el @ o .
        if ((valorElemento.indexOf('@') != -1) && (valorElemento.indexOf('.') != -1)){

            elemento.addClass('is-valid')
            elemento.removeClass('is-invalid')

        } else {
            elemento.addClass('is-invalid')
            elemento.removeClass('is-valid')
            //otra forma elemento.addClass('is-valid') .removeClass('is-invalid')
        }

    })

})

