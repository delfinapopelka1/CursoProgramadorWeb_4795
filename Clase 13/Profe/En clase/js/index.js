
$(function () {
  //ESTE CODIGO SE EJECUTARA CUANDO TODO EL DOCUMENTO HTML ESTE CARGADO  
})

//PUEDE UTILIZARSE CUALQUIERA DE LOS 2.

// $(document).ready(function(){
// //ESTE CODIGO SE EJECUTARA CUANDO TODO EL DOCUMENTO HTML ESTE CARGADO
// })


//SUBSCRIBIRSE A UN EVENTO KEYDOWN DE UN ELEMENTO
//Y SI LA TECLA DEL EVENTO PRESIONADA FUE EL ENTER, MOSTRAR UN MENSAJE AL USUARIO DICIENDO 
//QUE SE APRETO LA TECLA ENTER

$(function () {
  //ESTE CODIGO SE EJECUTARA CUANDO TODO EL DOCUMENTO HTML ESTE CARGADO  

  $(document).on('keydown', function (evento) {
    // alert('t')
    if (evento.which == 13) {
      alert('HE APRETADO LA TECLA ENTER')
    }

  })

  //AGREGO UN ITEM MAS A LA MAIN LIST.

  $('#mainList').append(crearItems())

  // alert('EL SIGUIENTE ELEMENTO DEL ITEM 1 ES: ' + $('#1').next().attr('id'))

  // alert('EL ANTERIOR ELEMENTO DEL ITEM 2 ES: ' + $('#2').prev().attr('id'))

  // $('#item99').remove();

  // $('.test').remove();

  // alert('El padre del item 1 es:' + $('#1').parent().attr('id'));

  // alert('El abuelo del item 1 es:' + $('#1').parent().parent().attr('id'));

  // alert('Las clases del elemeto son :' + $('#1').attr('class'));

  // alert('El valor del input es :' + $('#inputText').val('99'));

  $('#inputText').hide();

  $('#inputText').show();

})

function crearItems() {
  return "<li> Item 3 </li><li class='test'> Item 4 </li><li> Item 5 </li><li class='test'> Item 6 </li><li> Item 7 </li><li> Item 8 </li>"
}