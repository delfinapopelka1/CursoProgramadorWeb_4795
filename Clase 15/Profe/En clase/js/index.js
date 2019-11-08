
//PROMESA
//$.AJAX RETORNA UNA PROMESA Y DEBO SUBSCRIBIRME A LOS CALLBACKS
var request = $.ajax({
  url: "https://swapi.co/api/people/2",
  method: "GET"
})


request.done(function (response) {
  $('#errorMessage').hide();
})

request.fail(function (response) {
  $('#errorMessage').show();
})

// console.log('Respuesta', request)