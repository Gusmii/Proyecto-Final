var htmlCode;
var usuario;
var nombreFiltro;
var datosEstancias;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearFiltro();
  generarEstanciasPrincipales();
  $("#myInput").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $("#myDIV *").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
	  });
});

function generarEstanciasPrincipales(){
	$.ajax({
		  type:"GET",
		    dataType:"json",
		    url:"../controller/estancias/cSelectEstancias.php",
		    success: function(datos){
		datosEstancias= jQuery.parseJSON(datos.datosEstancias);
		nombreFiltro=-1;  
		filtroUbicacion(nombreFiltro,datosEstancias);
	    	  
		 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
//	  
}
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
	    	datosEstancias= jQuery.parseJSON(datos.datosEstancias);

	    	for(var a=0;a<datosContinentes.length;a++){
	    		htmlCode+=`<optgroup  label="`+datosContinentes[a].nombre.toUpperCase()+`" style="font-size:24px; color:skyblue">`;
		    	for(var b=0;b<datosPaises.length;b++){

		    		if(datosContinentes[a].id==datosPaises[b].objectContinente.id){
	    				htmlCode+=`<option disabled value="`+datosPaises[b].id+`" label="`+datosPaises[b].nombre.toUpperCase()+`" style="font-size:18px; color:red"></option>`;


			    	for(var c=0;c<datosCiudades.length;c++){
			    		if(datosPaises[b].id==datosCiudades[c].objectPais.id){
			    		
					    	htmlCode+=`<option value="`+datosCiudades[c].id+`" id="`+datosCiudades[c].id+`" style="font-size:15px; color:gray">`+datosCiudades[c].nombre.toUpperCase()+` </option>`;
					    
		    			}
		    		}
	    		}
	    		}htmlCode+=` </optgroup>`;
	    	
	    }
	    	
	    	$(".selectCiudades").html(htmlCode);	
	    	$(".selectCiudades").on("change", function(){
	    		nombreFiltro=$(this).val();
//	    		alert(nombreFiltro);
	    		filtroUbicacion(nombreFiltro,datosEstancias);
	    	});
	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
	  
}

function filtroUbicacion(nombreFiltro,datosEstancias){
	  htmlCode =``;
	  nombreFiltro=parseInt(nombreFiltro);
	  $("#filtradasEstancias").html("");
			    	
			    	htmlCode ="";
			    	htmlCode+=`<div id="contenedorEstancias" >`;
			    	var i=-1;
			    	var x=-1;
			    	var z=0;
				    	for(var a=0;a<datosEstancias.length;a++){
							if(parseInt(datosEstancias[a].ubicacion)===nombreFiltro || nombreFiltro==-1){

								x++; 
				    	if(x%5===0 && x != 0){
				    		 i++;
				    		 htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`" >`;
				        	
				    	 }else if(x === 0){
				    		 i++;
					        	htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`">`;
					        	 
				    	 }
				    	 htmlCode +=`<div id="cardEstancias_`+a+`"  class="card mb-3 cardEstancias  tipoEstancia_`+datosEstancias[a].objectTipoEstancia.id+`" style="max-width: 540px;"> `;
				    		htmlCode +=` <div class="row no-gutters">`;
				    			htmlCode += `<div class="col-md-4">`;
				    					htmlCode +=`<img src="`+datosEstancias[a].imagen+`" class="card-img" alt="...">`;
				    			htmlCode +=`</div>`;
				    		    htmlCode +=`<div class="col-md-8">`;
				    		      		htmlCode +=`<div class="card-body">`;
							    		      htmlCode +=`<h5 class="card-title">`+datosEstancias[a].nombre+` / `+datosEstancias[a].objectUbicacion.nombre.toUpperCase()+`</h5>`;
							    		      htmlCode +=`<p class="card-text"> Tipo de estancia: `+datosEstancias[a].objectTipoEstancia.tipo+`</p>`;
							    		      htmlCode +=`<p class="card-text">Precio por noche: `+datosEstancias[a].precio+` </p>`;
							    		      htmlCode +=`<p class="card-text"><small class="text-muted"> Puntuación: `+datosEstancias[a].puntuacion+`</small></p>`;
							    		htmlCode +=`</div>`;
			    		        htmlCode +=`</div>`;
		    		        htmlCode +=`</div>`;
				        htmlCode +=`</div>`;
				       z=x+1;
				        if(z%5===0 && x != 0){
				        	htmlCode +=`<div id="verMasNumero`+i+`" class="text-center verMasEstancias"><button type="button" class="btn btn-primary active">VER MAS</button></div></div>`;
				        		}else if(x === 4){
							        	htmlCode += `<div id="verMasNumero`+i+`" class="text-center verMasEstancias"><button type="button" class="btn btn-primary active">VER MAS</button></div>`;
							        	 
						    	 }
				        }
				    	}
			    	htmlCode+=`</div>`;

			    	  $("#filtradasEstancias").html(htmlCode);
			    	  
		    		  $( ".Lotes").css({"display":"none!important"});
		    		  $( ".Lotes > .cardEstancias").addClass("d-none");
		    		  $( ".Lotes > .verMasEstancias").addClass("d-none");
		    		  
		    		  mostrarMas("0");
		    		  
		    		  function mostrarMas(numeroEstancias){
			    		  $( ".Lotes > .verMasEstancias").removeClass("d-block");
			    		  $( ".Lotes > .cardEstancias").removeClass("d-block");

		    			  $( ".LoteNumero"+numeroEstancias).css({"display":"block!important"});
			    		  $( ".LoteNumero"+numeroEstancias+" > .cardEstancias").addClass("d-block");
			    		  $( ".LoteNumero"+numeroEstancias+" > .verMasEstancias").last().addClass("d-block");
		    		  }

		    		  
			    	  $( ".verMasEstancias :button").click(function() {
			    		  
//			    		  alert(" id: "+ $( this ).parent().attr("id") );
//			    		  alert(" id Lote: "+ $( this ).parent().parent().attr("id") );
			    		  
			    		  var numeroEstancias=($( this ).parent().parent().attr("id")).split("Numero");
			    		  numeroEstancias=	(parseInt(numeroEstancias[1]))+1;
			    		  mostrarMas(numeroEstancias);
			    		});
			  
		
	  }