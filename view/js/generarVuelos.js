var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearContenidoVuelos();
  

});


function crearContenidoVuelos(){
	$.ajax({
		  type:"GET",
		    dataType:"json",
		    url:"../controller/vuelos/cSelectVuelos.php",
		    success: function(datos){
          datosVuelos= jQuery.parseJSON(datos.datosVuelos);
          console.log(datosVuelos);   
		// filtroUbicacion(nombreFiltro,datosEstancias);
	    	  
		 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
//	  
}

// function crearContenidoVuelos(){
  
//   $.ajax({
//         type:"GET",
//           dataType:"json",
//           url:"../controller/vuelos/cSelectVuelos.php",
//           success: function(datos){

                 
                
//        },
//           error: function(xhr){
//               alert("An error occured: "+xhr.status+" "+xhr.statusText);
//           }
//       });

// }




