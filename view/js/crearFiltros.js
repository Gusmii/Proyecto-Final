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
  
  htmlCode+=`<select class="selectpicker"> `;
  htmlCode+=`</select> `;

  
  $("#filtroEstancias").html(htmlCode);
  htmlCode="<option hidden selected>CONTINENTES</option>";
  
  $.ajax({
	    dataType:"json",
	    url:"../controller/ciudades/cSelectCiudades.php",
	    success: function(datosContinente){
	    	console.log(datosContinente);
	    	$.each(datosContinente,function(i,datoContinente){

	        	htmlCode+=`<option >`+datoContinente.nombre+`</option>`;
	      });//FIN DE GENERAR 

	    	$(".selectpicker").html(htmlCode);	

	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
	  

  
  
  
  
  
  
  
  
  
  
  
}