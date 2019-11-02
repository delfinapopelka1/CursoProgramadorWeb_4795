//COMPRUEBO QUE LA PAGINA ESTE CARGADA

$(function () {

  //OCULTO EL BOTON MEDIANTE LA FUNCION HIDE



  // $('#searchStudentButton').hide();


  //obteniendo un elemento mediante Vainilla JS

  var button = document.getElementById('searchStudentButton');
  // button.hide(); //ESTO NO FUNCIONA PORQUE HIDE ES DE JQUERY.
  console.log(button);

  //obteniendo un elemento mediante jquery

  var buttonJs = $('#searchStudentButton');
  $('#searchStudentButton').hide();
  console.log(buttonJs);



  //obtengo mediante jquery todos los elementos con clases .btn

  // $('.btn').hide();

  //PARA CADA ELEMENTO QUE CONTENGA LA CLASE .BTN, LE ASIGNO EL HANDLER SHOWMESSAGE AL EVENTO CLICK.
  // $('.btn').click(showMessage)

  // $('button').click(showMessage)


  // $('button').mouseover(showMessage)


  //FORMA ALTERNATIVA DE SUBSCRIBIRSE A EVENTOS.

  $('.btn').on('click', function () {
    alert('HI!!!')
  })


})

function showMessage() {
  alert('HI!!!')
}