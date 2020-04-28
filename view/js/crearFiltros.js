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
	  type:"GET",
	    dataType:"json",
	    url:"../controller/ciudades/cSelectCiudades.php",
	    success: function(datos){

	    	datosCiudades= jQuery.parseJSON(datos.datosCiudades);
	    	datosPaises= jQuery.parseJSON(datos.datosPaises);
	    	datosContinentes= jQuery.parseJSON(datos.datosContinentes);
//	    	console.log(datosCiudades);
//	    	console.log(datosPaises);
//	    	console.log(datosContinentes);

	    	for(var a=0;a<datosContinentes.length;a++){
	    		htmlCode+=`<optgroup  label="`+datosContinentes[a].nombre.toUpperCase()+`" style="font-size:24px; color:skyblue">`;
		    	for(var b=0;b<datosPaises.length;b++){

		    		if(datosContinentes[a].id==datosPaises[b].objectContinente.id){
	    				htmlCode+=`<option  label="`+datosPaises[b].nombre.toUpperCase()+`" style="font-size:18px; color:red"></option>`;


			    	for(var c=0;c<datosCiudades.length;c++){
			    		if(datosPaises[b].id==datosCiudades[c].objectPais.id){
			    		
					    	htmlCode+=`<option id="`+datosCiudades[c].id+`" style="font-size:15px; color:gray">`+datosCiudades[c].nombre.toUpperCase()+` </option>`;
					    
		    			}
		    		}
	    		}
	    		}htmlCode+=` </optgroup>`;
	    	
	    }
	    	
	    	$(".selectCiudades").html(htmlCode);	

	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
	  

  
  
  
  
  
  
  
  
  
  
  
}