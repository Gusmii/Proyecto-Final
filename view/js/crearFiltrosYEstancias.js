var htmlCode;
var usuario;
var nombreFiltro;
var datosEstancias;
var tiposEstancias=[];
var filtroTipoEstancias;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");
  
  filtroTipoEstancias="nada";
  
  crearFiltro();
  cambiandoTamanioWindow();
  
  $(window).resize( function(){
	  
	  cambiandoTamanioWindow();
	  
  });
});

function cambiandoTamanioWindow(){
	 console.log($(window).width());
	    if ($(window).width() < 1216) {
		   console.log ("Pequeña") ;

			 $("#publicidadEstancias").addClass("margenes");
			 $("#publicidadEstancias").addClass("col-12");
			 $("#publicidadEstancias").removeClass("col-3");
			 $("#filtroEstancias").addClass("col-12");
			 $("#filtroEstancias").removeClass("col-3");
			 $("#filtradasEstancias").addClass("col-12");
			 $("#filtradasEstancias").removeClass("col-6");
			 $("#filtroEstancias").addClass("margenes");
		  }else {
			 if (screen.width < 1280) {
				 
				   console.log ("Mediana") ;
					 $("#publicidadEstancias").removeClass("col-12");
					 $("#publicidadEstancias").addClass("col-3");
					 $("#filtroEstancias").removeClass("col-12");
					 $("#filtroEstancias").addClass("col-3");
					 $("#filtradasEstancias").removeClass("col-12");
					 $("#filtradasEstancias").addClass("col-6");
					$("#publicidadEstancias").removeClass("margenes");
					$("#filtroEstancias").removeClass("margenes");

					
			 } else {
					console.log ("Grande") ; 
					 $("#publicidadEstancias").removeClass("col-12");
					 $("#publicidadEstancias").addClass("col-3");
					 $("#filtroEstancias").removeClass("col-12");
					 $("#filtroEstancias").addClass("col-3");
					 $("#filtradasEstancias").removeClass("col-12");
					 $("#filtradasEstancias").addClass("col-6");
					$("#publicidadEstancias").removeClass("margenes");
					$("#filtroEstancias").removeClass("margenes");

				}					

			 }
}

function crearFiltro(){
  var usuario=localStorage.getItem("usuario");

  htmlCode= `<div class="container Filtros">`;
  htmlCode+= `<div class="container selectCities">`;
  
  htmlCode+=`<select class="selectCiudades"> `;
  htmlCode+=`</select> `;
  htmlCode+= `<div class="container tiposEstanciasFilter"></div>`;

  
  $("#filtroEstancias").html(htmlCode);
  htmlCode="<option hidden id='TituloSelect' selected>Ciudades por paises y continentes</option>";
  
  $.ajax({
	  type:"GET",
	    dataType:"json",
	    url:"../controller/estancias/cSelectEstanciasYSelectCiudades.php",
	    success: function(datos){

	    	datosCiudades= jQuery.parseJSON(datos.datosCiudades);
	    	datosPaises= jQuery.parseJSON(datos.datosPaises);
	    	datosContinentes= jQuery.parseJSON(datos.datosContinentes);
	    	datosEstancias= jQuery.parseJSON(datos.datosEstancias);

	    	for(var a=0;a<datosContinentes.length;a++){
	    		htmlCode+=`<optgroup class="filtroContinentes"  label="`+datosContinentes[a].nombre.toUpperCase()+`" >`;
		    	for(var b=0;b<datosPaises.length;b++){

		    		if(datosContinentes[a].id==datosPaises[b].objectContinente.id){
	    				htmlCode+=`<option disabled class="filtroPaises" value="`+datosPaises[b].id+`" label="`+datosPaises[b].nombre.toUpperCase()+`" ></option>`;

	
				    	for(var c=0;c<datosCiudades.length;c++){
				    		if(datosPaises[b].id==datosCiudades[c].objectPais.id){
				    		
						    	htmlCode+=`<option class="filtroCiudades" value="`+datosCiudades[c].id+`" id="`+datosCiudades[c].id+`">`+datosCiudades[c].nombre.toUpperCase()+` </option>`;
						    
			    			}
			    		}
		    		}
	    		}
		    	htmlCode+=` </optgroup>`;
	    	
	    	}
	    	
	    	$(".selectCiudades").html(htmlCode);	
			   filtroUbicacion("-1",datosEstancias,filtroTipoEstancias);
	
	    	$("#TituloSelect").hide();
	    	
	    	$(".selectCiudades").on("change", function(){
				$(".tiposEstanciasFilter").html("");
				tiposEstancias=[];
				nombreFiltro=$(this).val();
				
				filtroUbicacion(nombreFiltro,datosEstancias,"nada");
				
				var tamanio=$(".Lotes > .cardEstancias").length;
				for(var a=0;a<datosEstancias.length;a++){
					
					if((parseInt(datosEstancias[a].ubicacion))==nombreFiltro){
	    
	    				var posicion=  $.inArray(datosEstancias[a].objectTipoEstancia.tipo,tiposEstancias);
	    					if(posicion==-1){
	    						tiposEstancias.push(datosEstancias[a].objectTipoEstancia.tipo);
	    					}
				    			  
					}
			    }
		    	  htmlCode=`<ul id="filtrarTipoEstancia" >`;
		    	  for(var a=0;a<tiposEstancias.length;a++){

		    		  htmlCode+=`<li> <div id="valor_`+a+`"> <input type="checkbox" value="`+tiposEstancias[a]+`" id="`+tiposEstancias[a]+`" /><label for="`+tiposEstancias[a]+`">`+tiposEstancias[a]+`</label></div></li>`;
					console.log("tiposEstancias: "+tiposEstancias);
		    	  }		 
		    	  htmlCode+="</ul >";

		    	  $(".tiposEstanciasFilter").html(htmlCode);
		    	  
		    	  $(".tiposEstanciasFilter :checkbox").click(function() {
			    	  $(".tiposEstanciasFilter :checkbox:checked").prop("checked", false);
			    	  $(this).prop("checked", true);

		    		   $("#filtrarTipoEstancia :checkbox:checked").each(function() {
		    			   console.log("esto es un checked de "+ $(this).val());
		    			   filtroTipoEstancias=$(this).val();
		    			   console.log(filtroTipoEstancias);
		    			   filtroUbicacion(nombreFiltro,datosEstancias,filtroTipoEstancias);

		    		   });
		    		});
	    	});
	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
	  
}

function filtroUbicacion(nombreFiltro,datosEstancias,filtroTipoEstancias){
	  htmlCode =``;
	  nombreFiltro=parseInt(nombreFiltro);
	  $("#filtradasEstancias").html("");
	 
			    	htmlCode ="";
			    	htmlCode+=`<div id="contenedorEstancias" >`;
			    	var i=-1;
			    	var x=-1;
			    	var z=0;
				    	for(var a=0;a<datosEstancias.length;a++){
				    		
							if(((parseInt(datosEstancias[a].ubicacion)===nombreFiltro || nombreFiltro==-1)&&filtroTipoEstancias==="nada") ||( (filtroTipoEstancias==datosEstancias[a].objectTipoEstancia.tipo && (parseInt(datosEstancias[a].ubicacion)===nombreFiltro || nombreFiltro==-1)))){
					    		if(filtroTipoEstancias!="nada"){
									console.log("Tipo estancia: "+datosEstancias[a].objectTipoEstancia.tipo+ " FiltroTipoEstancia: "+filtroTipoEstancias);
					    		}

								x++; 
				    	if(x%5===0 && x != 0){
				    		 i++;
				    		 htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`" >`;
				        	
				    	 }else if(x === 0){
				    		 i++;
					        	htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`">`;
					        	 
				    	 }
				    	 htmlCode +=`<div id="cardEstancias_`+a+`"  class="card mb-3 cardEstancias text-center idEstancia_`+datosEstancias[a].id+`"> `;
				    		htmlCode +=` <div class="row no-gutters contenidoImagenTexto">`;
				    			htmlCode += `<div class="col-md-4 contenidoImagen">`;
				    					htmlCode +=`<img src="`+datosEstancias[a].imagen+`" class="card-img">`;
				    			htmlCode +=`</div>`;
				    		    htmlCode +=`<div class="col-md-8 contenidoTexto">`;
				    		      		htmlCode +=`<div class="card-body">`;
							    		      htmlCode +=`<h5 class="card-title nombreEstancia UbicacionEstancia">`+datosEstancias[a].nombre+` / `+datosEstancias[a].objectUbicacion.nombre.toUpperCase()+`</h5>`;
							    		      htmlCode +=`<p class="card-text tipoEstancia"> Tipo de estancia: `+datosEstancias[a].objectTipoEstancia.tipo+`</p>`;
							    		      htmlCode +=`<p class="card-text precioEstancia">Precio por noche: `+datosEstancias[a].precio+` </p>`;
							    		      htmlCode +=`<p class="card-text puntuacionEstancia"><small class="text-muted"> Puntuación: `+datosEstancias[a].puntuacion+`</small></p>`;
							    		      var estanciaReservada=localStorage.getItem("estancia_"+datosEstancias[a].id);
								    		  console.log("antes: "+estanciaReservada);
								    		  
								    		  if(estanciaReservada==="null" || estanciaReservada ==null){
								    			  
								    		      htmlCode +=`<p id="idEstanciaCantidadReserva_`+datosEstancias[a].id+`" class="card-text cantidadReservarNoche"></p>`;
								    		      htmlCode +=`<div id="borrarUnaReservaIdEstancia_`+datosEstancias[a].id+`" class="text-center borrarUnaReserva"></div>`;

								    		  }else{
								    		      htmlCode +=`<p id="idEstanciaCantidadReserva_`+datosEstancias[a].id+`" class="card-text cantidadReservarNoche">Noches reservadas: `+estanciaReservada+`</p>`;
								    		      htmlCode +=`<div id="borrarUnaReservaIdEstancia_`+datosEstancias[a].id+`" class="text-center borrarUnaReserva"><button type="button" class="btn btn-danger active">Cancelar una noche</button></div>`;

								    		  }
							    		      htmlCode +=`<div id=" idEstancia_`+datosEstancias[a].id+`" class="text-center reservarNoche"><button type="button" class="btn btn-primary active">Reservar una noche</button></div>`;

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
			    		  			    		  
			    		  var numeroEstancias=($( this ).parent().parent().attr("id")).split("Numero");
			    		  numeroEstancias=	(parseInt(numeroEstancias[1]))+1;
			    		  mostrarMas(numeroEstancias);
			    		});
			    	  
			    	  $( ".card > .contenidoImagenTexto > .contenidoTexto > div > .reservarNoche").click(function() {
  			    		  
			    		  var idEstancia=($( this ).attr("id").split(" "));
			    		  idEstancia=(idEstancia[1]).split("_");
			    		  idEstancia=idEstancia[1];
			    		  
//			    		  var precio=$(".idEstancia_"+idEstancia+" > .contenidoImagenTexto > .contenidoTexto > div > .precioEstancia").text().split(": ");
//			    		  console.log(precio[1]);
			    		  
			    		  var estanciaReservada=localStorage.getItem("estancia_"+idEstancia);
			    		  console.log("antes: "+estanciaReservada);
			    		  
			    		  if(estanciaReservada==="null"  || estanciaReservada ==null){
			    			  localStorage.setItem("estancia_"+idEstancia,1);

			    		  }else{
			    			  estanciaReservada++;
			    			  localStorage.setItem("estancia_"+idEstancia,estanciaReservada);
			    		  }
			    		  var estanciaReservada=localStorage.getItem("estancia_"+idEstancia);
  
			    		  $("#idEstanciaCantidadReserva_"+idEstancia).html("Noches reservadas: "+estanciaReservada);
			    		  $("#borrarUnaReservaIdEstancia_"+idEstancia).html(`<button type="button" class="btn btn-danger active">Cancelar una noche</button>`);
			    		 });

			    	  $( ".card > .contenidoImagenTexto > .contenidoTexto > div > .borrarUnaReserva").click(function() {
  			    		  
			    		  var idEstancia=($( this ).attr("id").split("_"));
			    		  idEstancia=idEstancia[1];
			    		  
			    		  var estanciaReservada=localStorage.getItem("estancia_"+idEstancia);
			    		  console.log("antes: "+estanciaReservada);
			    		  
			    		  if((estanciaReservada!="null"  || estanciaReservada != null )&& estanciaReservada !=1){

			    			 estanciaReservada--;
			    			 
			    			 localStorage.setItem("estancia_"+idEstancia,estanciaReservada);
			    			  
			    			 $("#idEstanciaCantidadReserva_"+idEstancia).html("Noches reservadas: "+estanciaReservada);
			    			  
			    		  }else if(estanciaReservada==1 ){
			    			  
			    			 localStorage.removeItem("estancia_"+idEstancia);
			    			 $("#idEstanciaCantidadReserva_"+idEstancia).html("");
			    			 $("#borrarUnaReservaIdEstancia_"+idEstancia).html("");
			    		  }
			    		
			    		  
			    		  
			    		  
			    		 });
			    	  
			    	 
	  }