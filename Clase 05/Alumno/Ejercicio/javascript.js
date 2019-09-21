
var cars = [
    {
      model:'Suran',
      brand: 'volkswagen',
      year: 2015
    },
    {
      model:`Audi TT`,
      brand:'Audi',
      year: 2017
    },
    {
      model:`Gran turismo`,
      brand:'Maserati',
      year: 2018
    }
  ]



function Car(modelo,marca,year) {
    this.modelo = modelo
    this.marca = marca
    this.year = year

    var id = Math.random()
    this.getCarName = function() {
        console.log(
            "el modelo es" + this.modelo, "la marca es: " + this.marca, "El año es" + this.year
        )
    }
}

cars.forEach((auto) => {
    var nuevoAuto = new Car(auto.model, auto.brand, auto.year)
    nuevoAuto.getCarName()
})

