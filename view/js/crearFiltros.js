var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearFiltro();
  
  $("#myInput").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $("#myDIV *").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
	  });
});
function crearFiltro(){
  var usuario=localStorage.getItem("usuario");

  htmlCode= `<div class="container">`;
  htmlCode+= `<br> <input class="form-control" id="myInput" type="text" placeholder="Buscar por ciudad">`;
  htmlCode+= `<div class="container">`;
  
  htmlCode+=`<select class="selectCiudades"> `;
  htmlCode+=`</select> `;

  
  $("#filtroEstancias").html(htmlCode);
  htmlCode="<option hidden selected>Ciudades</option>";
  
  $.ajax({
	    dataType:"json",
	    url:"../controller/ciudades/cSelectCiudades.php",
	    success: function(datosCiudades){
	    	console.log(datosCiudades);
	    	var continentes=0;
	    	var paises;
	    	var ciudades;
	    	for(var c=0;c<datosCiudades.length;c++){

    			
		    	for(var d=0;d<datosCiudades.length;d++){
		    			if(datosCiudades[c].objectContinente.id==datosCiudades[d].objectContinente.id){
		        			if(datosCiudades[c].objectPais.id==datosCiudades[d].objectPais.id){
			        			if(datosCiudades[c].nombre==datosCiudades[d].nombre){
				        			htmlCode+=`<optgroup  label="`+datosCiudades[c].objectContinente.nombre.toUpperCase()+`" style="font-size:24px; color:skyblue">`;
				        			htmlCode+=`<optgroup  label="`+datosCiudades[c].objectPais.nombre.toUpperCase()+`" style="font-size:18px; color:green">`;

						    	htmlCode+=`<option id="`+datosCiudades[d].id+`" style="font-size:15px; color:gray">`+datosCiudades[d].nombre.toUpperCase()+` </option>`;
						    	
//				    		console.log("C id continente"+datosCiudades[c].objectContinente.nombre+" //// d id continente"+datosCiudades[d].objectContinente.nombre);
//				    		console.log("C id continente"+datosCiudades[c].nombre+" //// d id continente"+datosCiudades[d].nombre);
				    			}
			    			}

		    	}
		    			htmlCode+=` </optgroup>`;
		    	}		    	
		    	
		    	htmlCode+=` </optgroup>`;

	    	}		    	

	    	
	    	$(".selectCiudades").html(htmlCode);	

	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
	  

  
  
  
  
  
  
  
  
  
  
  
}