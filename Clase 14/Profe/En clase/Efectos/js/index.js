$(function () {

  //OCULTAR EL ELEMENTO CON ID COVER1
  $('#cover1').slideUp(3000, function () {
    $('#cover1').slideDown(3000, function () {
      alert('EL ELEMENTO AHORA SE VE DE NUEVO')
    });
  })
})