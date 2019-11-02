// $(function () {

//   //SUBSCRIBIMOS AL EVENTO CLICK DE LOS ELEMENTOS CON CLASE SQUARE.

//   var ultimaClase = 'circle'

//   $('.square').on('click', function () {

//     //OBTENGO EL ELEMENTO EN DONDE ESTA SUCEDIENDO EL EVENTO.
//     var elemento = $(this);

//     //Si el elemento no tiene ninguna de las 2 clases en cuestion , veo que clase ponerle.
//     if (!(elemento.hasClass('circle') || elemento.hasClass('cross'))) {
//       if (ultimaClase == 'cross') {
//         elemento.addClass('circle')
//         ultimaClase = 'circle';
//       }
//       else {
//         elemento.addClass('cross');
//         ultimaClase = 'cross'
//       }
//     }
//   })

// })

$(function () {
  //suscribirse adentro para asegurarse que el elemento este cargado
  var ultimoClick = 'circle'
  //on recibe dos parametros el elemeno al cual me quiero suscribir y una funcion nueva
  $('.square').on('click', function () {
    //darme el elemento donde esta pasando el evento
    var elemento = $(this);
    // ! es para negar
    //si el elemento no tiene ninguna de las dos clases en cuestion, veo que clase ponerle
    if (!(elemento.hasClass('circle') || elemento.hasClass('cross'))) {
      if (ultimoClick == 'cross') {
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