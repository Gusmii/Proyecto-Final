$(document).ready(function(){
   

showSelected();
  
  });

  function showSelected(){

    $("#seleccionado").change(function(){
       
        var selected = $("#seleccionado").val();//aqui se guarda el nombre seleccionado en el select de la tabla deseada
        var selectedText = selected.substring(1);
        var selectedTextMayus = selected.substring(0,1).toUpperCase();
        var selectedText=selectedTextMayus.concat(selectedText);
//        console.log(selected);
//        console.log(selectedText);
        
      //dependiendo de la seleccion te mandara a un controlador u otro
        $.ajax({
      	  type:"GET",
      	    dataType:"json",
      	    url:"../controller/"+selected+"/cSelect"+selectedText+".php",
      	    success: function(datos){
      	    	      	    	
      	    	datosSeleccionados= jQuery.parseJSON(datos.datosSeleccionados);
      	    	console.log("datos seleccionados: ");
    	    	console.log(datosSeleccionados);
    	    	var keys=Object.getOwnPropertyNames(datosSeleccionados[0]);
    	    	//aqui recogemos las claves de el json de la posicion 0, ya que todos tienen las mismas claves
    	    	
//    	    	console.log("keys:"+keys);
    	    	
    	    	//se crea cabecera de la tabla sin las keys del objeto
    	    	
    	    	var objectExist=false;
    	    	
    	    	htmlCodeCabecera=`<table class="table"> <thead> <tr>`;
    	    	htmlCodeCabeceraObject="";
    	    	$.each(keys, function(index, value) {
    	    		
  	    		  if(value.startsWith("object")){
  	    			  
  	    			  var val=value.replace("object","");
  	  	    		  htmlCodeCabeceraObject+=`<th scope="col">`+val+``;

  	    		  }else if (value==="tipo"||value==="ubicacion" || value==="id_usuario" || value.startsWith("codigo")){
  	    			  htmlCodeCabecera+=""; 
  	    		  }else{
  	    			  htmlCodeCabecera+=`<th scope="col">`+value+`</th>`;
  	    		  }
  	    		});	
    	    	
    	    	//fin de se crea cabecera de la tabla sin las keys del objeto
    	    	
    	    	htmlCodeCuerpo=` <tbody>`;
    	    	for(var a=0;a<datosSeleccionados.length;a++){
    	    		htmlCodeCuerpo+=`<tr>`;	    	
        	    	$.each(keys, function(index, value) {
    	  	    		  
    	    		  //console.log("valor keys no object: "+value);
    	    		  
    	    		  var data=$.parseHTML("datosSeleccionados["+[a]+"]."+value);
    	    		  //creamos una variable nueva la cual se guardara el datosSeleccionados con la llave correspondiente cada vez que pase
    	    		  
	    			  var nombreAtributo=data;
    	    		  data=eval(data[0].data);
    	    		  //convertir un string en una variable
    	    		  
    	    		  if(value.startsWith("object")){ //si es un objeto 

    	    			  var llaves=Object.getOwnPropertyNames(data);
    	      	    	//console.log("object keys: "+llaves);
	    	    		var arrayKeysNombre=[];
	    	    		var arrayKeysValue=[];
	    	    		for(var i=0;i<llaves.length;i++){//recorremos llaves de objectLoquesea
    	    	    		
	      	    			htmlCodeCabeceraObjectName="";
    	      	    		$.each(llaves, function(index, valor_llave) {

    	      	    			var dato=$.parseHTML(nombreAtributo[0].data+"."+valor_llave);//datosSeleccionado[0].object lo que sea
				    			  dato=eval(dato[0].data);
			    	    		  if(dato !=null && dato !="null" && dato!=undefined && dato !="undefined" ){

			    	    		  
			    	    			  var val=Object.getOwnPropertyNames(dato);
			    	      	    	//se añade a la cabecera de la tabla las keys del objeto

				    	    		  if((!( $.isNumeric(dato))) && ($.inArray(dato,arrayKeysNombre)==-1) && valor_llave!="contrasenia"){//si es numerico y (si no esta en el array el dato siempre dara -1)
				    	    			  htmlCodeCabeceraObjectName+=htmlCodeCabeceraObject+`_`+valor_llave+`</th>`;
					    	    			 arrayKeysValue.push(valor_llave);
					    	  	  	    		objectExist=true;

				    	    		  }
				    	      	    	//fin de se añade a la cabecera de la tabla las keys del objeto

				    	    		  if((!( $.isNumeric(dato))) && ($.inArray(dato,arrayKeysValue)==-1)){
				    	    			  if(dato.startsWith("http")){//esto es para las imagenes
						    	    			 htmlCodeCuerpo+=`<td scope="col"><img src="`+dato+`"></td>`;
	
				    	    			  }else{
						    	    			 htmlCodeCuerpo+=`<td scope="col">`+dato+`</td>`;
				    	    			  }
				    	    			 arrayKeysValue.push(dato);
				    	    		  }
			    	    		  }
    	      	    		});
    	      	    	}
	    	      	  	if(selectedText==="Reservas"){

    	      	    			htmlCodeCuerpo+=`<td class="button-box" scope="col"><button type="button" id="vuelosReservados_`+data.id+`" class="vuelosReservados btn btn-primary btn-sm">Vuelos</button><br> <button type="button" id="estanciasReservadas_`+data.id+`" class="estanciasReservadas btn btn-secondary btn-sm">Estancias</button></td>`;
    	      	    		}
	    	      	  	
    	    		  }else if (value==="tipo" || value==="ubicacion" || value==="id_usuario" || value.startsWith("codigo")){//este if va con el de startwithobjecto
    	    			  htmlCodeCuerpo+="";
      	    		  }else{
    	    			  //si el atributo al que accede no tiene mas atributos dentro vendra a este else
    	    			  if(data.startsWith("http")){
		    	    			 htmlCodeCuerpo+=`<td scope="col"><img class="imagenesTablaAdmin" src="`+data+`"></td>`;

	 	    			  }else{
			    	    			 htmlCodeCuerpo+=`<td scope="col">`+data+`</td>`;
	 	    			  }
    	    		  } 
    	    		});	//aqui termina de crear las lineas de td
        	    	htmlCodeCuerpo+=`</tr>`;	    	
        	    	//aqui se cierra con tr cada linea
        	    	}
    	    	htmlCodeCuerpo+=`</tbody>`;
    	    	if(objectExist){
    	    		htmlCodeCabeceraObjectName+=` <th scope="col">#</th></tr> </thead>`;	    	

        	    	htmlCodeAdmin=htmlCodeCabecera+``+htmlCodeCabeceraObjectName+""+htmlCodeCuerpo+`</table>`;

    	    	}else{    	    	
    	    		htmlCodeCabecera+=`<th scope="col">#</th> </tr> </thead> `;
    	    		htmlCodeAdmin=htmlCodeCabecera+""+htmlCodeCuerpo+`</table>`;

    	    	}
    	    	$("#tablasVistaAdmin").html(htmlCodeAdmin);
    	    	
    	    	/////AQUI TERMINA EL GENERADOR DE TABLA DEPENDIENDO DE CUAL ELIGAS EN EL SELECT
    	    	
    	    	
    	    	$(".vuelosReservados").on("click",function(){
    	    		var idReserva=$(this).attr("id").split("_");
    	    		idReserva=idReserva[1];
    	        	
    	    		datosReservas_viajes= jQuery.parseJSON(datos.datosReservas_viajes);
          	    	console.log("datos Reservas viajes: ");
        	    	console.log(datosReservas_viajes);
        	    	var keys=Object.getOwnPropertyNames(datosReservas_viajes[0]);
        	    	console.log("keys:"+keys);
        	    	var objectExist=false;
        	    	var arrayCabecera=[];
        	    	htmlCodeCabecera=`<table class="table"> <thead> <tr>`;
        	    	htmlCodeCabeceraObject="";
        	    	$.each(keys, function(index, value) {
        	    		
      	    		  if(value.startsWith("object")){
      	    			  if($.inArray(value,arrayCabecera)==-1){
      	    				  
      	    			  var val=value.replace("object","");
      	  	    		  htmlCodeCabeceraObject+=`<th scope="col">`+val+`</th>`;
      	  	    		  arrayCabecera.push(value);
      	    			  }
      	    		  }else if (value==="tipo"||value==="ubicacion" || value==="id_usuario" || value.startsWith("codigo")|| value.startsWith("id")){
      	    			  htmlCodeCabecera+=""; 
      	    		  }else{
      	    			  htmlCodeCabecera+=`<th scope="col">`+value+`</th>`;
      	    		  }
      	    		});	
        	    	
        	    	//fin cabecera de la tabla
        	    	
        	    	htmlCodeCuerpo=` <tbody>`;
        	    	for(var a=0;a<datosReservas_viajes.length;a++){
        	    		arrayCabecera=[];
        	    		htmlCodeCuerpo+=`<tr>`;
        	    		var idVueloReservado=datosReservas_viajes[a].id_viaje;
        	    		var idReservada=datosReservas_viajes[a].id_reserva;
            	    	
        	    		if(idReservada==idReserva){
	        	    		$.each(keys, function(index, value) {
	        	  	    		  
	        	    		  console.log("valor keys no object: "+value);
	        	    		  
	        	    		  var data=$.parseHTML("datosReservas_viajes["+[a]+"]."+value);
	    	    			  var nombreAtributo=data;
	        	    		  data=eval(data[0].data);
	    	    			  
	        	    		  if(value.startsWith("object")){ //si es un objeto 
	        	    			  if($.inArray(value,arrayCabecera)==-1){
	          	    				  
	              	    		
	              	  	    		  arrayCabecera.push(value);
	              	    			  
		        	    			  var llaves=Object.getOwnPropertyNames(data);
		        	      	    	console.log("object keys: "+llaves);
		    	    	    		var arrayKeysNombre=[];
		    	    	    		var arrayKeysValue=[];
		    	    	    		for(var i=0;i<llaves.length;i++){
		        	    	    		
		
		    	      	    			htmlCodeCabeceraObjectName="";
		        	      	    		$.each(llaves, function(index, valor_llave) {
		
		        	      	    			var dato=$.parseHTML(nombreAtributo[0].data+"."+valor_llave);
		    				    			  dato=eval(dato[0].data);
		    			    	    		  if(dato !=null && dato !="null" && dato!=undefined && dato !="undefined" ){
		
		    			    	    		  
		    			    	    			  var val=Object.getOwnPropertyNames(dato);
		    			    	    			  
		    				    	    		  if(((!( $.isNumeric(dato))) && ($.inArray(dato,arrayKeysNombre)==-1))){
		    				    	    			  htmlCodeCabeceraObjectName+=htmlCodeCabeceraObject+`_`+valor_llave+`</th>`;
		    					    	    			 arrayKeysValue.push(valor_llave);
		    					    	  	  	    		objectExist=true;
		
		    				    	    		  }
		    				    	    		  if(valor_llave==="precio"){
		    				    	    			  htmlCodeCabeceraObjectName+=`<th>`+valor_llave+`</th>`;
		    					    	    			 arrayKeysValue.push(valor_llave);
		    					    	  	  	    		objectExist=true;
		    				    	    		  }
		    				    	    		  
		    				    	    		  if((!( $.isNumeric(dato))) && ($.inArray(dato,arrayKeysValue)==-1)){
		    				    	    			  if(dato.startsWith("http")){
		    						    	    			 htmlCodeCuerpo+=`<td scope="col"><img src="`+dato+`"></td>`;
		    	
		    				    	    			  }else{
		    						    	    			 htmlCodeCuerpo+=`<td scope="col">`+dato+`</td>`;
		    				    	    			  }
		    				    	    			 arrayKeysValue.push(dato);
		    				    	    		  }else if(valor_llave==="precio"){
	    						    	    			 htmlCodeCuerpo+=`<td scope="col">`+dato+`</td>`;
	    						    	    			 arrayKeysValue.push(dato);
	    				    	    			  }
		    			    	    		  }
		        	      	    		});
		        	      	    		
		        	      	    	}
		        	    		  }
	        	    		  }else if (value==="tipo" || value==="ubicacion" || value==="id_usuario" || value.startsWith("codigo") || value.startsWith("id")){
	        	    			  htmlCodeCuerpo+="";
	          	    		  }else{
	        	    			  //si el atributo al que accede no tiene mas atributos dentro vendra a este else
	        	    			  if(data.startsWith("http")){
	    		    	    			 htmlCodeCuerpo+=`<td scope="col"><img class="imagenesTablaAdmin" src="`+data+`"></td>`;
	
	    	 	    			  }else{
	    			    	    			 htmlCodeCuerpo+=`<td scope="col">`+data+`</td>`;
	    	 	    			  }    	  	    		
	        	  	    		
	
	        	    		  }
	        	    		 
	        	    		});		
            	    	
            	    	 if(selectedText==="Reservas"){
             	    		htmlCodeCuerpo+=`<td class="button-box_Edit_Delete" scope="col"><button type="button" class="DeleteIdVuelo_`+idVueloReservado+` DeleteIdReservada_`+idReservada+` btn btn-danger btn-sm">Borrar</button><br> <button type="button" class="EditIdVuelo_`+idVueloReservado+` EditIdReservada_`+idReservada+` btn btn-warning btn-sm">Editar</button></td>`;
         	      	    }
            	    	htmlCodeCuerpo+=`</tr>`;	    	

            	    	}
        	    	}
        	    	htmlCodeCuerpo+=`</tbody>`;
        	    	if(objectExist){
        	    		htmlCodeCabeceraObjectName+=` <th scope="col">#</th></tr> </thead>`;	    	

        	    		htmlCodeVuelos=htmlCodeCabecera+``+htmlCodeCabeceraObjectName+""+htmlCodeCuerpo+`</table>`;

        	    	}else{    	    	
        	    		htmlCodeCabecera+=`<th scope="col">#</th> </tr> </thead> `;
        	    		htmlCodeVuelos=htmlCodeCabecera+""+htmlCodeCuerpo+`</table>`;

        	    	}
        	    	
        	    	$("#mostrarVuelos").html(htmlCodeVuelos);

    	    	});
    	    	
    	    	
    	    	
	      	  },
	  	    error: function(xhr){
	  	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	  	    }
	  	});
      }); 

      

  }