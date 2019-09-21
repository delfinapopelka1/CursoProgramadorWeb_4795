//CLASE OBJECTOS

// var persona = {nombre : 'Pedro',
// edad: 28}

// var edadPersona = persona.edad

//FUNCTION CONSTRUCTORA

function Persona (nombre, edad) {
  var prueba = false
}

var persona1 = new Persona('Pedro', 28)

console.log(persona1.prueba)

console.log('La edad de la persona creada es: ' + persona1.edad)

persona1.nombre = 'Pepito'

// console.log()

function User (name) {
  this.age = 45

  this.showInfo = function () {
    console.log('Hola mi nombre es ' + name + ' y mi edad es ' + this.age)
  }

  this.addYear = function () {
    this.age = this.age + 1
  }
}

var user = new User('Mónica') // Crea una nueva instancia de un objeto User

console.log(user.age) // Muestra en consola el number 45

user.addYear() // Agrega uno a la propiedad publica age
user.addYear()
user.addYear()

user.showInfo() // Muestra en consola 'Hola mi nombre es Mónica y mi edad es 46'

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

//function constructora de objecto Car
function Car (model, brand, year) {
  //defino propiedades publicas
  this.model = model
  this.brand = brand
  this.year = year

  //defino propiedad privada
  var id = Math.random()

  //defino metodo publico
  this.getCarName = function () {
    console.log(
      `El modelo es: ${this.model} La marca es: ${this.brand} 
      El año es: ${this.year}`
    )
  }
}

cars.forEach((car) => {
  var carObject = new Car(car.model, car.brand, car.year)
  carObject.getCarName()
})
