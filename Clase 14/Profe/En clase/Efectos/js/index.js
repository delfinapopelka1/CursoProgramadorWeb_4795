$(function () {

  $(window).on('click', function () {
    alert('click')
  })

  //OCULTAR EL ELEMENTO CON ID COVER1
  // $('#cover1').slideUp(3000, function () {
  //   $('#cover1').slideDown(3000, function () {
  //     alert('EL ELEMENTO AHORA SE VE DE NUEVO')
  //   });
  // })

  $('.figure-img').on('click', function () {

    var elementoQueEstaPasandoElEvento = $(this);

    elementoQueEstaPasandoElEvento.fadeOut(2000);

  })

  $('.figure-img').on('mouseover', function () {

    var elementoQueEstaPasandoElEvento = $(this);

    elementoQueEstaPasandoElEvento.hide();

  })

  $('.figure-img').click(function () {

    var elementoQueEstaPasandoElEvento = $(this);

    elementoQueEstaPasandoElEvento.fadeOut(2000);

  })
})