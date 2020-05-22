var htmlCode;
var usuario;
var nombreFiltro;
var datosVuelos;
var tiposVuelos=[];

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");
  
  
  crearFiltro();
  cambiandoTamanioWindow();
  
  //Cuando cambia el tamaño del navegador esta funcion se activa
  $(window).resize( function(){
	  
	  cambiandoTamanioWindow();
	  
  });
});

//En esta funcion ajustamos la estructura de la vista para que se adapte
function cambiandoTamanioWindow(){
	 //console.log($(window).width());
	    if ($(window).width() < 1216) {
		  // console.log ("Pequeña") ;

			 $("#publicidadVuelos").addClass("margenes");
			 $("#publicidadVuelos").addClass("col-12");
			 $("#publicidadVuelos").removeClass("col-3");
			 $("#filtroVuelos").addClass("col-12");
			 $("#filtroVuelos").removeClass("col-3");
			 $("#filtradasVuelos").addClass("col-12");
			 $("#filtradasVuelos").removeClass("col-6");
			 $("#filtroVuelos").addClass("margenes");
		  }else {
			 if (screen.width < 1280) {
				 
				   //console.log ("Mediana") ;
					 $("#publicidadVuelos").removeClass("col-12");
					 $("#publicidadVuelos").addClass("col-3");
					 $("#filtroVuelos").removeClass("col-12");
					 $("#filtroVuelos").addClass("col-3");
					 $("#filtradasVuelos").removeClass("col-12");
					 $("#filtradasVuelos").addClass("col-6");
					$("#publicidadVuelos").removeClass("margenes");
					$("#filtroVuelos").removeClass("margenes");

					
			 } else {
					//console.log ("Grande") ; 
					 $("#publicidadVuelos").removeClass("col-12");
					 $("#publicidadVuelos").addClass("col-3");
					 $("#filtroVuelos").removeClass("col-12");
					 $("#filtroVuelos").addClass("col-3");
					 $("#filtradasVuelos").removeClass("col-12");
					 $("#filtradasVuelos").addClass("col-6");
					$("#publicidadVuelos").removeClass("margenes");
					$("#filtroVuelos").removeClass("margenes");

				}					

			 }
}

function crearFiltro(){
  var usuario=localStorage.getItem("usuario");

  //aqui se crea la base donde iran las cosas que se cargaran mediante llamadas
  htmlCode= `<div class="container Filtros">`;
  htmlCode+= `<div class="container selectCities">`;
  
  htmlCode+=`<select class="selectCiudades"> `;
  htmlCode+=`</select> `;
  htmlCode+= `<div class="container tiposVuelosFilter"></div>`;

  
  $("#filtroVuelos").html(htmlCode);
  htmlCode="<option hidden id='TituloSelect' selected>Ciudades por paises y continentes</option>";
  
  //Aqui se crea el filtro de ciudades por paises y continentes
  $.ajax({
	  type:"GET",
	    dataType:"json",
	    url:"../controller/vuelos/cSelectVuelosYSelectCiudades.php",
	    success: function(datos){

	    	datosCiudades= jQuery.parseJSON(datos.datosCiudades);
	    	datosPaises= jQuery.parseJSON(datos.datosPaises);
	    	datosContinentes= jQuery.parseJSON(datos.datosContinentes);
	    	datosVuelos= jQuery.parseJSON(datos.datosVuelos);
	    	
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
	    	
	    	$(".selectCiudades").html(htmlCode);	//Aqui aplicamos todos los datos recibidos y filtrados al select
			   filtroUbicacion("-1",datosVuelos);	//Si acaba de ingresar en la vista esto hara que todavia no se filtre la busqueda, por que en el option sale una frase por defecto
	
	    	$("#TituloSelect").hide();
	    	
	    	$(".selectCiudades").on("change", function(){ //En esta funcion se prepara el select para que al minimo cambio se vuelva a filtrar
				$(".tiposVuelosFilter").html("");
				tiposVuelos=[];
				nombreFiltro=$(this).val();
				
				filtroUbicacion(nombreFiltro,datosVuelos,"nada");
				
		    	  
		    	 
	    	});
	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});
	  
}

function filtroUbicacion(nombreFiltro,datosVuelos){
	  htmlCode =``;
	  nombreFiltro=parseInt(nombreFiltro);
	  $("#filtradasVuelos").html("");
	 
			    	htmlCode ="";
			    	htmlCode+=`<div id="contenedorVuelos" >`;
			    	var i=-1;
			    	var x=-1;
			    	var z=0;
			    	
				    	for(var a=0;a<datosVuelos.length;a++){
				    		
							if(parseInt(datosVuelos[a].ubicacion)===nombreFiltro || nombreFiltro==-1 ){
					    		

								x++; 
				    	if(x%5===0 && x != 0){
				    		 i++;
				    		 htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`" >`;
				        	
				    	 }else if(x === 0){
				    		 i++;
					        	htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`">`;
					        	 
				    	 }
				    	 htmlCode +=`<div id="cardVuelos_`+a+`"  class="card mb-3 cardVuelos text-center idVuelo_`+datosVuelos[a].id+`"> `;
				    		htmlCode +=` <div class="row no-gutters contenidoImagenTexto">`;
				    			
				    		    htmlCode +=`<div class="col-12 contenidoTexto">`;
				    		      		htmlCode +=`<div class="card-body">`;
							    		      htmlCode +=`<h5 class="card-title nombreVuelo UbicacionVuelo">`+datosVuelos[a].objectUbicacion.nombre.toUpperCase()+`</h5>`;
							    		      htmlCode +=`<p class="card-text precioVuelo">Precio: `+datosVuelos[a].precio+` </p>`;
							    		      var VueloReservada=localStorage.getItem("Vuelo_"+datosVuelos[a].id);
								    		  //console.log("antes: "+VueloReservada);
								    		  
								    		  if(VueloReservada==="null" || VueloReservada ==null){
								    			  
								    		      htmlCode +=`<p id="idVueloCantidadReserva_`+datosVuelos[a].id+`" class="card-text cantidadReservarVuelo"></p>`;
								    		      htmlCode +=`<div id="borrarUnaReservaIdVuelo_`+datosVuelos[a].id+`" class="text-center borrarUnaReserva"></div>`;

								    		  }else{
								    		      htmlCode +=`<p id="idVueloCantidadReserva_`+datosVuelos[a].id+`" class="card-text cantidadReservarVuelo">Vuelos reservadas: `+VueloReservada+`</p>`;
								    		      htmlCode +=`<div id="borrarUnaReservaIdVuelo_`+datosVuelos[a].id+`" class="text-center borrarUnaReserva"><button type="button" class="btn btn-danger active">Cancelar un vuelo</button></div>`;

								    		  }
							    		      htmlCode +=`<div id=" idVuelo_`+datosVuelos[a].id+`" class="text-center reservarVuelo"><button type="button" class="btn btn-primary active">Reservar un vuelo</button></div>`;

							    		htmlCode +=`</div>`;
			    		        htmlCode +=`</div>`;
		    		        htmlCode +=`</div>`;
				        htmlCode +=`</div>`;
				       z=x+1;
				        if(z%5===0 && x != 0){
				        	htmlCode +=`<div id="verMasNumero`+i+`" class="text-center verMasVuelos"><button type="button" class="btn btn-primary active">VER MAS</button></div></div>`;
				        		}else if(x === 4){
							        	htmlCode += `<div id="verMasNumero`+i+`" class="text-center verMasVuelos"><button type="button" class="btn btn-primary active">VER MAS</button></div>`;
							        	 
						    	 }
				        }
				    	}
			    	htmlCode+=`</div>`;

			    	  $("#filtradasVuelos").html(htmlCode);
					  
					  //Aqui hacemos que no aparezcan los lotes
		    		  $( ".Lotes").css({"display":"none!important"});
		    		  $( ".Lotes > .cardVuelos").addClass("d-none");
		    		  $( ".Lotes > .verMasVuelos").addClass("d-none");

		    		  mostrarMas("0");
		    		  
		    		  function mostrarMas(numeroVuelos){ //Con esto al hacer click desaparece lo que estaba y aparecen 5 siguientes
			    		  $( ".Lotes > .verMasVuelos").removeClass("d-block");
			    		  $( ".Lotes > .cardVuelos").removeClass("d-block");

		    			  $( ".LoteNumero"+numeroVuelos).css({"display":"block!important"});
			    		  $( ".LoteNumero"+numeroVuelos+" > .cardVuelos").addClass("d-block");
			    		  $( ".LoteNumero"+numeroVuelos+" > .verMasVuelos").last().addClass("d-block");
		    		  }
		    		  
			    	  $( ".verMasVuelos :button").click(function() { 
			    		  			    		  
			    		  var numeroVuelos=($( this ).parent().parent().attr("id")).split("Numero");
			    		  numeroVuelos=	(parseInt(numeroVuelos[1]))+1;
			    		  mostrarMas(numeroVuelos);
			    		});
			    	  
			    	  $( ".card > .contenidoImagenTexto > .contenidoTexto > div > .reservarVuelo").click(function() { //Aqui guardamos el vuelo y su id en la sesion local
  			    		  
			    		  var idVuelo=($( this ).attr("id").split(" "));
			    		  idVuelo=(idVuelo[1]).split("_");
			    		  idVuelo=idVuelo[1];
			    		  
			    		  //var precio=$(".idVuelo_"+idVuelo+" > .contenidoImagenTexto > .contenidoTexto > div > .precioVuelo").text().split(": ");
			    		  //console.log(precio[1]);
			    		  
			    		  var VueloReservada=localStorage.getItem("Vuelo_"+idVuelo);
			    		  //console.log("antes: "+VueloReservada);
			    		  
			    		  if(VueloReservada==="null"  || VueloReservada ==null){
			    			  localStorage.setItem("Vuelo_"+idVuelo,1);

			    		  }else{
			    			  VueloReservada++;
			    			  localStorage.setItem("Vuelo_"+idVuelo,VueloReservada);
			    		  }
			    		  var VueloReservada=localStorage.getItem("Vuelo_"+idVuelo);
  
			    		  $("#idVueloCantidadReserva_"+idVuelo).html("Vuelos reservadas: "+VueloReservada);
			    		  $("#borrarUnaReservaIdVuelo_"+idVuelo).html(`<button type="button" class="btn btn-danger active">Cancelar un vuelo</button>`);
			    		 });

			    	  $( ".card > .contenidoImagenTexto > .contenidoTexto > div > .borrarUnaReserva").click(function() { //Aqui quitamos una noche reservada de la sesion local
  			    		  
			    		  var idVuelo=($( this ).attr("id").split("_"));
			    		  idVuelo=idVuelo[1];
			    		  
			    		  var VueloReservada=localStorage.getItem("Vuelo_"+idVuelo);
			    		  //console.log("antes: "+VueloReservada);
			    		  
			    		  if((VueloReservada!="null"  || VueloReservada != null )&& VueloReservada !=1){

			    			 VueloReservada--;
			    			 
			    			 localStorage.setItem("Vuelo_"+idVuelo,VueloReservada);
			    			  
			    			 $("#idVueloCantidadReserva_"+idVuelo).html("Vuelos reservadas: "+VueloReservada);
			    			  
			    		  }else if(VueloReservada==1 ){
			    			  
			    			 localStorage.removeItem("Vuelo_"+idVuelo);
			    			 $("#idVueloCantidadReserva_"+idVuelo).html("");
			    			 $("#borrarUnaReservaIdVuelo_"+idVuelo).html("");
			    		  }
			    		
			    		  
			    		  
			    		  
			    		 });
			    	  
			    	 
	  }