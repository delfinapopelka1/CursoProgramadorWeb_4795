function Alumnolista(alumnoObj){
   var li = document.createElement('li') 
   var h1 = document.createElement('h1')
   h1.innerHTML = alumnoObj.firstName
   li.appendChild(h1)
    var h3 = document.createElement('h3')
    h3.innerHTML = alumnoObj.dni
    var p = document.createElement('p')
    p.innerHTML = alumnoObj.p
    lista.appendChild(li)

}





