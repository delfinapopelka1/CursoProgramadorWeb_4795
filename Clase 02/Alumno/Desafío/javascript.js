var genero = prompt("ingrese su genero")
var edad = prompt("ingrese su edad")

var mensaje = "Hola,"

switch (genero) {
    case female:
        mensaje = mensaje + "Sra."
        break

    case male:
        mensaje = mensaje + "Sr."
        break

    case otrogenero:
        mensaje = mensaje + "Sx."
        break

    default:
        mensaje = mensaje + "Genero Inválido"
        break
}



if (edad >= 18) {
    console.log = mensaje + "ustedes es mayor de edad puede ingresar"
} else {
    console.log = mensaje + "ustedes es menor de edad no puede ingresar"
}

console.log(mensaje)