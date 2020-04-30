var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearContenidoVuelos();
  

});

function crearContenidoEstancias(){
	$.ajax({
        type:"GET",
          dataType:"json",
          url:"../controller/vuelos/cSelectVuelos.php",
          success: function(datos){

              datosVuelos= jQuery.parseJSON(datos.datosVuelos);
//		    	console.log(datosVuelos);    
                
       },
          error: function(xhr){
              alert("An error occured: "+xhr.status+" "+xhr.statusText);
          }
      });

}




