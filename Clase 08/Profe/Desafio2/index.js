function createHtmlNode (tag, contenidoHtml, contenedor) {
  //Creando elemento HTML basado en el parametro tag recibido.
  var nuevoElemento = document.createElement(tag)

  //asigno el contenido recibido en el segundo parametro.
  nuevoElemento.innerHTML = contenidoHtml

  //Agrego el elemento elemento generado al contenedor.
  contenedor.appendChild(nuevoElemento)
}

function createStudentNode (estudiante) {
  var listParentNode = document.getElementById('listaAlumnos')

  //Creando el elemento HTML li
  var listItem = document.createElement('li')

  listItem.className = 'list-group-item'

  //Llamo a la funcion createHtmlNode para el elemento h1, con el contenido del nombre y apellido y lo agrego al lisItem
  createHtmlNode(
    'h1',
    `${estudiante.firstName} ${estudiante.lastName}`,
    listItem
  )

  //Llamo a la funcion createHtmlNode para el elemento h3, con el contenido del DNI lo agrego al lisItem
  createHtmlNode('h3', `DNI: ${estudiante.dni}`, listItem)

  //Llamo a la funcion createHtmlNode para el elemento p, con el contenido del email y lo agrego al lisItem
  createHtmlNode('p', `Email: ${estudiante.email}`, listItem)

  //Agrego el nuevo nodo lisItem a la lista del documento.
  listParentNode.appendChild(listItem)
}

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

createStudentNode(student)
