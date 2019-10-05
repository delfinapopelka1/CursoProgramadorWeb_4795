
//aca comparo los textos si pa esta adentro de patricia y a su vez si es un string
function comparacion(primertexto, segundotexto) {
    if (typeof primertexto == 'string' && typeof segundotexto == 'string') {
      var resultado = segundotexto.indexOf(primertexto);
      if (resultado > -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
   }
   
   //aca hago el resultado y lo muestro en consola if si texto uno esta en texto dos es verdadero y si no else y te muestra que no hay coincidencia 
   var resultado = comparacion(texto1, texto2);
   if (resultado == true) {
    console.log('Hubo coincidencia.');
   } else {
    console.log('No hubo coincidencia.');
   }