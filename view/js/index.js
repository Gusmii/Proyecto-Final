var htmlCode;
var usuario;

$(document).ready(function(){

  $.ajax({
		// check if somebody is  logged		
		url: "controller/login/cLoggedVerify.php",
		dataType: "json",
		success: function (result) {
			console.log(result);

      if (result.error == "Logged") {  //Si esta logueado muestra los datos en la consola
        
//        alert("estas logueado");
      
        

			} else {
        alert("logueate");		
			}
		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

  var verReservas = localStorage.getItem("verReservas");

  console.log(verReservas);
  
  $("#reservasIndex").click(function() {	
	    
	    localStorage.setItem("verReservas",true);  
  });
  
  if(verReservas === "true" ){

     ShowReservas();

  }else{
    mostrarCards();
  }
  
  signIn();
  
  signUp();

});

//Show Reservas
function ShowReservas() {

  
 
  htmlCode+= '<a id="volverIndex">Volver al inicio</a>';
  $.ajax({
	  type:"GET",
	    dataType:"json",
	    url:"controller/reservas/cSelectEstanciasYVuelos.php",
	    success: function(datos){
	    	var htmlCode="";
	    	  $("#botonIndex").html(`<button type="button" class="btn btn-danger">Volver al index</button>`);
	    	  $("#botonIndex").on("click",function(){
	    		    localStorage.setItem("verReservas",false);  
	    		    $("#contenidoIndex").html("");
	    		    mostrarCards();
	    		    $("#botonIndex").html(``);
	    			$("#botonPagar").html(``);

	    	  });
	    		  


			var arrayIdCantidadEstanciasActuales=[];	
			var arrayIdCantidadVuelosActuales=[];	
			


	    	let estanciasActuales = Object.keys(localStorage).filter(v => v.startsWith("estancia"));
	    	
	    	$.each(estanciasActuales, function(index, valor) {

	    		var idEstancia=eval(valor.split("_")[1]);
	    		arrayIdCantidadEstanciasActuales.push(
	    				{
	    					[idEstancia]:(localStorage.getItem(valor))
	    				});
	    	});
	    	
	    	let vuelosActuales = Object.keys(localStorage).filter(v => v.startsWith("Vuelo"));
	    	
	    	$.each(vuelosActuales, function(index, valor) {

	    		var idVuelo=eval(valor.split("_")[1]);
	    		arrayIdCantidadVuelosActuales.push(
	    				{
	    					[idVuelo]:(localStorage.getItem(valor))
	    				});
	    	});
	    	htmlCodeVuelos="";
	    	if(arrayIdCantidadVuelosActuales.length>0){
	    		
		    	datosVuelos= jQuery.parseJSON(datos.datosVuelos);

		    	htmlCodeCabVuelos=`<div class="container"><table id="tablaVuelosReservaActual" class="table"> <thead> <tr><th>Precio (euros)</th><th>Ubicacion</th><th>CantidadVuelos</th><th>Dia de salida</th><th>Dia restantes para la salida</th></tr></thead><tbody>`;
		    	htmlCodeCuerVuelos="";
	
		    	for(var c=0;c<arrayIdCantidadVuelosActuales.length;c++){
		    		
		    		var idVuelo=Object.getOwnPropertyNames(arrayIdCantidadVuelosActuales[c]);
	//	    		console.log(arrayIdCantidadVuelosActuales);
		    		var itemName=$.parseHTML("Vuelo_"+idVuelo);
		    		
			    		for(var e=0;e<datosVuelos.length;e++){
			    			if((datosVuelos[e].id==idVuelo)){
			    				htmlCodeCuerVuelos+=`<tr id="`+itemName[0].data+`">`;
			    				htmlCodeCuerVuelos+=`<td scope="col" class="precio">`+datosVuelos[e].precio+`</td>`;
		      	    			 htmlCodeCuerVuelos+=`<td scope="col">`+datosVuelos[e].objectUbicacion.nombre+`</td>`;
		      	    			 htmlCodeCuerVuelos+=`<td scope="col" class="cantidadVuelos">`+localStorage.getItem(itemName[0].data)+`</td>`;
		      	    			 htmlCodeCuerVuelos+=`<td scope="col"><input type="date"  class="fechasVuelos" id="fechaSalida_`+(itemName[0].data)+`"><br><br></td>`;
		      	    			 htmlCodeCuerVuelos+=`<td scope="col" class="diasSalidaVuelos"></td>`;
		      	    			 htmlCodeCuerVuelos+=`</tr>`;
			    			}
	
			    		}
		
		    	}
	
		    	htmlCodeCuerVuelos+=`</tbody>`;
		    	htmlCodeVuelos=htmlCodeCabVuelos+``+htmlCodeCuerVuelos+``+`</tbody></html>`;
	    	}
	    	
	    	htmlCodeEstancias="";
	    	if(arrayIdCantidadEstanciasActuales.length>0){
	    	
		    	datosEstancias= jQuery.parseJSON(datos.datosEstancias);
		    	
		    	htmlCodeCabEstancias=`<table id="tablaEstanciasReservaActual" class="table"> <thead> <tr><th>Imagen</th><th>Nombre Estancia</th><th>Precio (euros)</th><th>Ubicacion</th><th>Cantidad Noches Estancias</th><th>Dia de entrada</th><th>Dia restantes para la entrada</th></tr></thead><tbody>`;
		    	htmlCodeCuerEstancias="";

		    	for(var c=0;c<arrayIdCantidadEstanciasActuales.length;c++){
		    		
		    		var idEstancia=Object.getOwnPropertyNames(arrayIdCantidadEstanciasActuales[c]);
	//	    		console.log(arrayIdCantidadVuelosActuales);
		    		var itemName=$.parseHTML("estancia_"+idEstancia);
		    		
			    		for(var e=0;e<datosEstancias.length;e++){
			    			if((datosEstancias[e].id==idEstancia)){
			    				htmlCodeCuerEstancias+=`<tr id="`+itemName[0].data+`">`;
			    				htmlCodeCuerEstancias+=`<td scope="col"><img class="imagenesTablaIndex" src="`+datosEstancias[e].imagen+`"></td>`;
			    				htmlCodeCuerEstancias+=`<td scope="col">`+datosEstancias[e].nombre+`</td>`;
			    				htmlCodeCuerEstancias+=`<td scope="col" class="precio">`+datosEstancias[e].precio+`</td>`;
		      	    			 htmlCodeCuerEstancias+=`<td scope="col">`+datosEstancias[e].objectUbicacion.nombre+`</td>`;
		      	    			 htmlCodeCuerEstancias+=`<td scope="col" class="cantidadEstancias">`+localStorage.getItem(itemName[0].data)+`</td>`;
		      	    			 htmlCodeCuerEstancias+=`<td scope="col"><input type="date" class="fechasEstancias" id="fechaEntrada_`+(itemName[0].data)+`"><br><br></td>`;
		      	    			 htmlCodeCuerEstancias+=`<td scope="col" class="diasEntradaEstancias"></td>`;
		      	    			 htmlCodeCuerEstancias+=`</tr>`;
			    			}
	
			    		}
		
		    	}
	    	}
	    	htmlCodeCuerEstancias+=`</tbody>`;
	    	htmlCodeEstancias=htmlCodeCabEstancias+``+htmlCodeCuerEstancias+``+`</tbody></div>`;
	    	htmlCode=htmlCodeVuelos+"<br>"+htmlCodeEstancias;
	    	$("#ContenidoIndex").html(htmlCode);
	    	


	    	var fechaActual = new Date($.now());

	    	$(".fechasVuelos").on("change",function(){
	    		var fecha =new Date($(this).val());
	    		
	    		if(fecha > fechaActual){
	    			var diferenciaDias=((fecha-fechaActual)/(1000 * 3600 * 24)).toFixed(0);
	    			$(this).parent().siblings(".diasSalidaVuelos").text("el vuelo saldrá dentro de: "+diferenciaDias+" dias");

	    		}else if(fecha == fechaActual){
	    			alert("Debe seleccionar un dia a partir de mañana, por favor introduzca una fecha valida");
	    			$(this).val("");
	    		}else{
	    			alert("Debe seleccionar un dia a partir de mañana, por favor introduzca una fecha valida");
	    			$(this).val("");
	    		}
	    		
	    		comprobarFechas();

	    	});
	    	
	    	$(".fechasEstancias").on("change",function(){
	    		var fecha =new Date($(this).val());
	    		
	    		if(fecha > fechaActual){
	    			var diferenciaDias=((fecha-fechaActual)/(1000 * 3600 * 24)).toFixed(0);
	    			if(diferenciaDias==0){
	    				diferenciaDias=1;
	    			}
	    			$(this).parent().siblings(".diasEntradaEstancias").text("La estancia estará disponible dentro de: "+diferenciaDias+" dias");
	    			
	    		}else if(fecha == fechaActual){
	    			alert("Debe seleccionar un dia a partir de mañana, por favor introduzca una fecha valida");
	    			$(this).val("");
	    		}else{
	    			alert("Debe seleccionar un dia a partir de mañana, por favor introduzca una fecha valida");
	    			$(this).val("");
	    		}
	    		
	    		comprobarFechas();
	    		
	    	});

	    	function comprobarFechas(){
	    		var fechaVuelosCheck=false;
	    		var arrayVuelos=[];

	    		$('.fechasVuelos').each(function() {
	        		fechaVuelosCheck=false;
	        		var idVuelo= $(this).attr('id').split("_")[2];
	        		var precio= $(this).parent().siblings(".precio").text();
//	        		console.log("idVuelo: "+idVuelo);
	        		var fecha=$(this).val();
//	    			console.log(fecha);
	    			var cantidadVuelo=$(this).parent().siblings(".cantidadVuelos").text();
//	    			console.log(cantidadVuelo);
	    			if(fecha===""){
	    				return false; 
	    			}else{
	    			    fechaVuelosCheck=true;
	    			    arrayVuelos.push({"idVuelo": idVuelo, "fecha":fecha, "cantidadVuelo": cantidadVuelo, "precio": precio});
	    			}
	    		});
//	    		console.log(arrayVuelos);
//	    		console.log("checkeados: ");
//    			console.log(fechaVuelosCheck);

    			var fechaEstanciasCheck=false;
	    		var arrayEstancias=[];

	    		$('.fechasEstancias').each(function() {
	        		fechaEstanciasCheck=false;
	        		var idEstancia= $(this).attr('id').split("_")[2];
	        		var precio= $(this).parent().siblings(".precio").text();
//	        		console.log("idEstancia: "+idEstancia);
	        		var fecha=$(this).val();
//	    			console.log(fecha);
	    			var cantidadEstancia=$(this).parent().siblings(".cantidadEstancias").text();
//	    			console.log(cantidadEstancia);
	    			if(fecha===""){
	    				return false; 
	    			}else{
	    			    fechaEstanciasCheck=true;
	    			    arrayEstancias.push({"idEstancia": idEstancia, "fecha":fecha, "cantidadEstancia": cantidadEstancia, "precio": precio});
	    			}
	    		});
//	    		console.log(arrayEstancias);
//	    		console.log("checkeados: ");
//    			console.log(fechaEstanciasCheck);
//    			
    			if((fechaEstanciasCheck && fechaVuelosCheck)||(fechaVuelosCheck && datosEstancias.length==0)||(fechaEstanciasCheck && datosVuelos.length==0)){
    				$("#botonPagar").html(`<button type="button" class="btn btn-info">Pagar</button>`);
    				$("#botonPagar").on("click",function(){
        				pagar(arrayEstancias, arrayVuelos);
    				});
    			}
    		
	    	}
	    	

	    function pagar(arrayEstancias, arrayVuelos){
	    	
	    	var sumaEstanciasPrecio=0;
	    	var sumaVuelosPrecio=0;
	    	for(var i=0;i<arrayEstancias.length;i++){
	    		sumaEstanciasPrecio+=((parseInt(arrayEstancias[i].precio))*(parseInt(arrayEstancias[i].cantidadEstancia)));
	    	}
	    	
	    	for(var i=0;i<arrayVuelos.length;i++){
	    		sumaVuelosPrecio+=((parseInt(arrayVuelos[i].precio))*(parseInt(arrayVuelos[i].cantidadVuelo)));
	    	}
	    	
	    	var sumaTotal=sumaEstanciasPrecio+sumaVuelosPrecio;
	    	$("#botonPagar").html("");
	    	htmlCode=`<div class="container FormularioPagar"><h1 class="text-center">AFLOJA LA PANOJA</h1>
	    	<div class="container formularioPago">
				  <div class="form-group">
				    <label >TITULAR DE LA TARJETA</label>
				    <input type="text" class="form-control" id="titular" placeholder="Escriba el titular de la tarjeta">
				  </div>
				    <div class="form-group">
				    <label >NUMERO DE LA TARJETA</label>
				    <input type="number" class="form-control" id="numeroTarjeta" placeholder="Escriba el numero de la tarjeta">
				  </div>
				    <div class="form-group">
				    <label >FECHA DE CADUCIDAD DE LA TARJETA</label>
				    <input type="text" class="form-control" id="fechaCaducidad" placeholder="00/00">
				  </div>
				    <div class="form-group">
				    <label >CODIGO DE SEGURIDAD DE LA TARJETA</label>
				    <input type="text" class="form-control" id="codigoSeguridad" placeholder="Escriba el codigo de seguridad de la tarjeta">
				  </div>
				  <div class="form-group">
				  	<label >Suma total a pagar: `+sumaTotal+` €</label>
				  </div>
				  <button type="button" id="botonTerminarPago" class="btn btn-primary">TERMINAR PAGO</button>
				</div></div>`;
	    	
	    	
	    	$("#ContenidoIndex").html(htmlCode);
	    	
	    	datosReservas= jQuery.parseJSON(datos.datosReservas);
	    	var ultimaReservaId;
	    	for(var i=0;i<datosReservas.length;i++){
	    		ultimaReservaId=datosReservas[i].id;
	    	}
	    	
	    	$("#botonTerminarPago").on("click",function(){
	    		
	    		var idUsuario=localStorage.getItem("idUser");
	    		var maxDateIdEstancia=0;
	    		var minDateIdEstancia=0;
	    		var fechaSalidaEstancia= new Date();
	    		var fechaEntradaEstancia= new Date();
	    		var fechaSalidaEstanciaMax= new Date();
	    		var fechaEntradaEstanciaMin= new Date();
	    		
	    		for(var i=0;i<arrayEstancias.length;i++){

	    			fechaId= new Date(arrayEstancias[i].fecha);
	    			fechaMaxima=new Date(arrayEstancias[maxDateIdEstancia].fecha);
	    			fechaMinima=new Date(arrayEstancias[minDateIdEstancia].fecha);
	    			
	    			fechaSalidaEstancia.setDate(fechaId.getDate()+parseInt(arrayEstancias[i].cantidadEstancia));
	    			
	    			fechaSalidaEstanciaMax.setDate(fechaMaxima.getDate()+parseInt(arrayEstancias[maxDateIdEstancia].cantidadEstancia));
	    			
	    			fechaEntradaEstancia.setDate(fechaId.getDate());

	    			fechaEntradaEstanciaMin.setDate(fechaMinima.getDate());

		    		if(fechaSalidaEstancia > fechaSalidaEstanciaMax){
		    			maxDateIdEstancia=i;
		    		}
		    		if(fechaEntradaEstancia < fechaEntradaEstanciaMin){
		    			minDateIdEstancia=i;
		    		}
		    	}
		 		
//		    	$("#ContenidoIndex").html("");
//	    		mostrarCards();
	    		nuevaReserva=ultimaReservaId++;
//	    		console.log("ultima reserva id: " +nuevaReserva);
	    		var fechaMaxima=arrayEstancias[maxDateIdEstancia].fecha;
	    		var fechaMinima=arrayEstancias[minDateIdEstancia].fecha;
	    		$.ajax({     	
	    			data:{'idUser':idUsuario,'nuevaReserva':nuevaReserva,'fechaMaxima':fechaMaxima,'fechaMinima':fechaMinima,'arrayEstancias':arrayEstancias,'arrayVuelos':arrayVuelos}, 
	    			url: "controller/reservas/cNuevaReserva.php", 
	    			method:"POST",
	    			dataType:"json",
	    			success: function(result) {
	    				console.log(result);
	    				
	            	},
	               	error: function(xhr) {
	        			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	            	}      	
	            });

	    	});
	    }
	    	
	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});

}

//Login
function signIn() {
	//forms values vars	
    $("#signIn").click(function() {	

		//Recoge las variables
		var user = $("#usuario").val();	
    var password = $("#contrasenia").val();
  
        
        console.log("UserJS: " + user);
        console.log("PasswordJS: " + password);
       
		
        $.ajax({     	
			data:{'user':user,'password':password}, //Manda las variables 
			url: "controller/login/cSignIn.php", 
			method:"POST",
			dataType:"json",
			success: function(result) {
				console.log(result);
				
				if(result.error == "No hay errores") {  //Si no hay ningun error manda a la vista
					localStorage.setItem("idUser",result.idUser);
					localStorage.setItem("apodo",result.username);
          localStorage.setItem("tipo",result.tipo);
          localStorage.setItem("verReservas",false);
					window.location.href="index.html";
				}else if(result.error == "El usuario o la contraseña estan mal") {
					alert(result.error);
				}else if(result.error == "No se han rellenado todos los campos") {
					alert(result.error);
				}
        	},
           	error: function(xhr) {
    			alert("An error occured: " + xhr.status + " " + xhr.statusText);
				
				//Si hay algun error vacia los inputs
    			$("#inUser").val("");
    			$("#inPass").val("");
        	}      	
        });
    });
}

//Register
function signUp() {
	//forms values vars	
    $("#signUp").click(function() {	

		//Recoge las variables
    var apodo = $("#apodo").val();
    var nombre = $("#nombre").val();
    var apellidos = $("#apellidos").val();
    var dni = $("#dni").val();
    var correo = $("#correo").val();	
    var contra = $("#contra").val();
  
      
       
		
        $.ajax({     	
			data:{'apodo':apodo,'nombre':nombre,'apellidos':apellidos,'dni':dni,'correo':correo,'contra':contra}, //Manda las variables 
			url: "controller/login/cInsertarUsuario.php", 
			method:"POST",
			success: function(result) {
        console.log(result);
        
        window.location.reload();
			
        	},
           	error: function(xhr) {
    			alert("An error occured: " + xhr.status + " " + xhr.statusText);
				
				//Si hay algun error vacia los inputs
          $("#apodo").val("");
          $("#nombre").val("");
          $("#apellidos").val("");
          $("#dni").val("");
          $("#correo").val("");
    			$("#contra").val("");
        	}      	
        });
    });
}



//Show Cards
function mostrarCards(){
	$("#botonIndex").html("");
  htmlCode=`<div class="container "> `;

  for(var i=0;i<2;i++){
    htmlCode+=` <div class="row mb-2 ">`;
    for(var x=0;x<2;x++){
      htmlCode+=`
          <div class="col-md-6  ">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">
                  <a class="text-dark" href="#">Featured post</a>
                </h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#">Continue reading</a>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap">
            </div>
          </div> `;
    }
    htmlCode+=` </div>`;

  }

  $("#ContenidoIndex").html(htmlCode);

}
