var operacion =prompt("ingresar operacion")

var numero1 = parseInt(prompt("ingrese numero 1"))
var numero2 = parseInt(prompt("ingrese numero 2"))

var resultado 



switch (operacion) {
    case '+':

 resultado = numero1 + numero2 
     
   break

   case '-':

    resultado = numero1 - numero2 
            
    break

    case '*':

    resultado = numero1 * numero2 
                    
    break

    case '/':
while(numero2 == 0) {
    numero2 = parseInt(prompt("ingrese numero 2"))
}
    resultado = numero1 / numero2 

                            
    break

    default:
      console.log("operacion invalida")
      break
  }

  alert("el resultado es: " + resultado)

  
  