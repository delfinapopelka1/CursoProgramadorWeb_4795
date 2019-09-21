var students = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
    ,  {
       
        dni: 45678956,
        email: 'pedro2@gmail.com'
      }
  ]

  function Estudiante(nombre,apellido,año) {
    this.nombre = nombre
    this.apellido = apellido
    this.año = año

    var id = Math.random()

    this.getId = function(){
        console.log(id)
    }


    this.getFullName = function() {
       if(this.nombre != undefined && this.apellido != undefined){
          console.log(
            "Su nombre es: " + this.nombre, "Su apellido es: " + this.apellido
        )   
       }
      
    }
}

students.forEach((alumno) => {
    var alumnobusqueda = new Estudiante(alumno.firstName, alumno.lastName)
    alumnobusqueda.getFullName()
    alumnobusqueda.getId()
})

