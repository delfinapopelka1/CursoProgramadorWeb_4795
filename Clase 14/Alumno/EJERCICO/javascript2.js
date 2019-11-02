var people = $('#inputNode')

$(function(){
    
    

    var request = $.ajax({
        url: "https://swapi.co/api/people/" + people,
        method: "GET"
      })

      

      request.done(function( data ) { 
       $('#nombre').html (data.name);
        $('#genero').html (data.gender);

      });
      

      
    
    
    
    
    
    
    
    })