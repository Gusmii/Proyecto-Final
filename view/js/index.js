var htmlCode;
var usuario;

$(document).ready(function(){

  $.ajax({
		// check if somebody is  logged		
		url: "controller/login/cLoggedVerify.php",
		dataType: "json",
		success: function (result) {
			//console.log(result);

      if (result.error == "Logged") {  //Si esta logueado muestra los datos en la consola
        
        //alert("estas logueado");
      
        

			} else {
        //alert("logueate");		
			}
		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

  var verReservas = localStorage.getItem("verReservas");

  //console.log(verReservas);
  
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
	    	  $("#botonIndex").html(`<button type="button" class="btn btn-danger">Volver al inicio</button>`);
	    	  $("#botonIndex").on("click",function(){
	    		    localStorage.setItem("verReservas",false);  
	    		    $("#contenidoIndex").html("");
	    		    mostrarCards();
	    		    $("#botonIndex").html(``);
	    			$("#botonPagar").html(``);

	    	  });
	    		  


			var arrayIdCantidadEstanciasActuales=[];	
			var arrayIdCantidadVuelosActuales=[];	
			

			//recogemos del localsotrage todos los items que empiecen por estancia
			
	    	let estanciasActuales = Object.keys(localStorage).filter(v => v.startsWith("estancia"));
	    	
	    	//recorremos el array que se ha creado arriba con los item que empiezan por estancia
	    	
	    	$.each(estanciasActuales, function(index, valor) {

	    		var idEstancia=eval(valor.split("_")[1]);
	    		// cada item empieza por estancia_ y luego va seguido el numero,
	    		//nosotros recogemos el numero solamente separando el nombre con la barra baja del numero
	    		//despues introducimos la id de la estancia y su valor, que seria la cantidad de veces
	    		//que se han clickado en el boton de reservar una noche
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
	    	datosVuelos= jQuery.parseJSON(datos.datosVuelos);

	    	if(arrayIdCantidadVuelosActuales.length>0){
	    		//si hay al menos un vuelo entrara en este if que se utiliza para crear la tabla con los
	    		//vuelos que se desean reservar

		    	htmlCodeCabVuelos=`<div class="container"><table id="tablaVuelosReservaActual" class="table"> <thead> <tr><th>Precio (euros)</th><th>Ubicacion</th><th>CantidadVuelos</th><th>Dia de salida</th><th>Dia restantes para la salida</th></tr></thead><tbody>`;
		    	htmlCodeCuerVuelos="";
	
		    	for(var c=0;c<arrayIdCantidadVuelosActuales.length;c++){
		    		//recogemos la key del conjunto de la posicion C para los vuelos actuales,
		    		//ya que eso es la id del vuelo
		    		var idVuelo=Object.getOwnPropertyNames(arrayIdCantidadVuelosActuales[c]);

		    		//añadimos una nueva variable en la que se quedara guardado el nombre como 
		    		//Vuelo_ y el numero de la id del vuelo que esta en el array
		    		var itemName=$.parseHTML("Vuelo_"+idVuelo);
		    		
			    		for(var e=0;e<datosVuelos.length;e++){
			    			if((datosVuelos[e].id==idVuelo)){
			    				//si coincide el id del vuelo reservado o que se quiere reservar y los datos de la 
			    				//base de datos, se generara una linea en la tabla de vuelos reservados
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
	    	datosEstancias= jQuery.parseJSON(datos.datosEstancias);

	    	if(arrayIdCantidadEstanciasActuales.length>0){
	    	
		    	
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
	    		//cuando cambia cualquier campo de la tabla de los vuelos, se recogera la fecha actual
	    		//y se comparara con la fecha que se quiere marcar, en caso de que falte mas de un dia,
	    		//dejará esa fecha como seleccionada y saldrá a su derecha cuantos dias quedarán para
	    		// que coja el vuelo. En caso de que falte menos de un día, se vaciará la fecha que ha seleccionado
	    		//y le saldrá un mensaje parar indicarle como debe seleccionar la fecha
	    		var fecha =new Date($(this).val());
	    		
	    		if(fecha > fechaActual){
	    			var diferenciaDias=((fecha-fechaActual)/(1000 * 3600 * 24)).toFixed(0);
	    			if(diferenciaDias==0){
	    				diferenciaDias=1;
	    			}
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
	    		//Aqui lo que hacemos es crear un array con los datos relevantes de los vuelos
	    		//y de las estancias junto con la fecha de entrada en las estancias o de salidas 
	    		//de los vuelos, pero solo en caso de que haya seleccionado correctamente una fecha
	    		$('.fechasVuelos').each(function() {
	        		fechaVuelosCheck=false;
	        		var idVuelo= $(this).attr('id').split("_")[2];
	        		var precio= $(this).parent().siblings(".precio").text();

	        		var fecha=$(this).val();

	        		var cantidadVuelo=$(this).parent().siblings(".cantidadVuelos").text();

	        		if(fecha===""){
	    				return false; 
	    			}else{
	    			    fechaVuelosCheck=true;
	    			    arrayVuelos.push({"idVuelo": idVuelo, "fecha":fecha, "cantidadVuelo": cantidadVuelo, "precio": precio});
	    			}
	    		});


    			var fechaEstanciasCheck=false;
	    		var arrayEstancias=[];

	    		$('.fechasEstancias').each(function() {
	        		fechaEstanciasCheck=false;
	        		var idEstancia= $(this).attr('id').split("_")[2];
	        		var precio= $(this).parent().siblings(".precio").text();

	        		var fecha=$(this).val();

	        		var cantidadEstancia=$(this).parent().siblings(".cantidadEstancias").text();

	        		if(fecha===""){
	    				return false; 
	    			}else{
	    			    fechaEstanciasCheck=true;
	    			    arrayEstancias.push({"idEstancia": idEstancia, "fecha":fecha, "cantidadEstancia": cantidadEstancia, "precio": precio});
	    			}
	    		});

	    		//en caso de que se haya completado la seleccion de fechas y/o no haya vuelos o estancias,
	    		//se mostrará un boton de pagar en el cual a clickar te mostrará un formulario para realizar el pago
	    		//en el cual te saldrá el precio total de la reserva 
    			if((fechaEstanciasCheck && fechaVuelosCheck)||(fechaVuelosCheck && arrayIdCantidadEstanciasActuales.length==0)||(fechaEstanciasCheck && arrayIdCantidadVuelosActuales.length==0)){
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
				    <input type="number" class="form-control" id="codigoSeguridad" placeholder="Escriba el codigo de seguridad de la tarjeta">
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
    		nuevaReserva=ultimaReservaId++;

	    	//la ultima reserva + 1 será el id de reserva que habria que poner en las tablas enlazadas
	    	//ya que en la tabla reservas todavia no se ha insertado esta misma
	    	$("#botonTerminarPago").on("click",function(){
	    		
	    		var idUsuario=localStorage.getItem("idUser");
	//////////////////////FECHA MAXIMA Y MINIMA///////////////////////    		
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

		    		if(fechaSalidaEstancia.getTime() < fechaSalidaEstanciaMax.getTime()){
		    			maxDateIdEstancia=i;
		    		}
		    		if(fechaEntradaEstancia.getTime() > fechaEntradaEstanciaMin.getTime()){
		    			minDateIdEstancia=i;
		    		}
		    	}
	    		//////////////////////FECHA MAXIMA Y MINIMA///////////////////////    		

		    	$("#ContenidoIndex").html("");
	    		mostrarCards();

	    		var fechaMaxima=arrayEstancias[maxDateIdEstancia].fecha;
	    		var fechaMinima=arrayEstancias[minDateIdEstancia].fecha;
	    		$.ajax({     	
	    			data:{'idUser':idUsuario,'nuevaReserva':nuevaReserva,'fechaMaxima':fechaMaxima,'fechaMinima':fechaMinima,'arrayEstancias':arrayEstancias,'arrayVuelos':arrayVuelos}, 
	    			url: "controller/reservas/cNuevaReserva.php", 
	    			method:"POST",
	    			dataType:"json",
	    			success: function(result) {
	    				//console.log(result);
	    				alert("Tu reserva se ha realizado con exito");
	            	},
	               	error: function(xhr) {
	               		if(xhr.status==200){
	               			localStorage.clear();
	               		}
//	        			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	            	}      	
	            });
//
	    	});
	    }
	    	
	 },
	    error: function(xhr){
	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	    }
	});

}

//Iniciar sesion
function signIn() {
	
    $("#signIn").click(function() {	

		//Recoge las variables
		var user = $("#usuario").val();	
    	var password = $("#contrasenia").val();
  
        
        //console.log("UserJS: " + user);
        //console.log("PasswordJS: " + password);
       
		//Manda los datos introducidos del usuario para que se compruebe si estan bien o mal
        $.ajax({     	
			data:{'user':user,'password':password}, //Manda las variables 
			url: "controller/login/cSignIn.php", 
			method:"POST",
			dataType:"json",
			success: function(result) {
				//console.log(result);
				
				if(result.error == "No hay errores") {  //Si no hay ningun error manda a la vista y guarda en la sesion local los datos del usuario, despues recarga la pestaña
					localStorage.setItem("idUser",result.idUser);
					localStorage.setItem("apodo",result.username);
          			localStorage.setItem("tipo",result.tipo);
         	 		localStorage.setItem("verReservas",false);
					window.location.href="index.html";
				}else if(result.error == "El usuario o la contraseña estan mal") { //Saldra este error si el usuario o la contraseña estan mal
					alert(result.error);
				}else if(result.error == "No se han rellenado todos los campos") { //Saldra este error si algun campo esta vacio
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

//Registrarse
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
  
      
       
		//Aqui manda los datos del registro al controller para que se puedan insertar los datos en la bbdd
        $.ajax({     	
			data:{'apodo':apodo,'nombre':nombre,'apellidos':apellidos,'dni':dni,'correo':correo,'contra':contra}, //Manda las variables 
			url: "controller/login/cInsertarUsuario.php", 
			method:"POST",
			success: function(result) {
        //console.log(result);
        alert("Te has registrado con exito");
        window.location.reload();
			
        	},
           	error: function(xhr) {
    			alert("No te has podido registrar, error: " + xhr.status + " " + xhr.statusText);
				
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



//Aqui se mostraran dos cards de vuelos y estancias aleatorios
function mostrarCards(){ 

	$("#botonIndex").html("");

	htmlCode=`<div class="container"> `;

	for(var i=0;i<2;i++){
		htmlCode+=` <div id="contenidoIndex`+i+`" class="row mb-2 ">`;

		

		htmlCode+=` </div>`;

	}

	htmlCode+=` </div>`;

	$("#ContenidoIndex").html(htmlCode);

	//Aqui se llama al controller para que reciva los datos
	$.ajax({
		// call 	
		url: "controller/vuelos/cSelect2Vuelos.php",
		dataType: "json",
		success: function (result) {
			
			htmlCode="";

			//console.log(result.datosSeleccionados);
			datosVuelos= jQuery.parseJSON(result.datosSeleccionados);

			for (let i = 0; i < datosVuelos.length; i++) {
				
				htmlCode+=`
          <div class="col-md-6  ">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h3 class="mb-0">
                  <a class="text-dark" href="#">`+datosVuelos[i].objectUbicacion.nombre+`</a>
                </h3>
                <p class="card-text mb-auto">Precio: `+datosVuelos[i].precio+`</p>
              </div>
            </div>
          </div> `;
				
			}

			$("#contenidoIndex0").html(htmlCode);

		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

	//Aqui se llama al controller para que reciva los datos
	$.ajax({
		// call 	
		url: "controller/estancias/cSelect2Estancias.php",
		dataType: "json",
		success: function (result) {
			
			htmlCode="";

			//console.log(result.datosSeleccionados);
			datosEstancias= jQuery.parseJSON(result.datosSeleccionados);

			for (let i = 0; i < datosEstancias.length; i++) {
				
				htmlCode+=`
				<div class="col-md-6  ">
				  <div class="card flex-md-row mb-4 box-shadow h-md-250">
					<div class="card-body d-flex flex-column align-items-start">
					  <h3 class="mb-0">
						<a class="text-dark card-title" href="#">`+datosEstancias[i].nombre+` / `+datosEstancias[i].objectUbicacion.nombre+`</a>
					  </h3>
					  <p class="card-text mb-auto">Tipo de estancia:`+datosEstancias[i].objectTipoEstancia.tipo+`</p>
					  <p class="card-text mb-auto">Precio por noche:`+datosEstancias[i].precio+`€ </p>
					  <p class="card-text mb-auto"><small class="text-muted">Puntuacion:`+datosEstancias[i].puntuacion+`</small></p>
					</div>
					<img class="ImagenesIndex card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" src="`+datosEstancias[i].imagen+`" alt="Card image cap">
				  </div>
				</div> `;
				
			}

			$("#contenidoIndex1").html(htmlCode);

		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});


}
