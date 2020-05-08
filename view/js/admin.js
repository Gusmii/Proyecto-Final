$(document).ready(function(){
   
  
showSelected();
  
  });

  function showSelected(){

    $("#seleccionado").change(function(){
       
        var selected = $("#seleccionado").val();
        var selectedText = selected.substring(1);
        var selectedTextMayus = selected.substring(0,1).toUpperCase();
        var selectedText=selectedTextMayus.concat(selectedText);
//        console.log(selected);
//        console.log(selectedText);
        
        $.ajax({
      	  type:"GET",
      	    dataType:"json",
      	    url:"../controller/"+selected+"/cSelect"+selectedText+".php",
      	    success: function(datos){
      	    	
//      	    	console.log(datos);
//      	    	if(selected==="estacias" || selected==="vuelos"  || selected==="reservas"){
//      	    	datosCiudades= jQuery.parseJSON(datos.datosCiudades);
//    	    	datosPaises= jQuery.parseJSON(datos.datosPaises);
//    	    	datosContinentes= jQuery.parseJSON(datos.datosContinentes);
//      	    	}
//      	    	
      	    	datosSeleccionados= jQuery.parseJSON(datos.datosSeleccionados);
      	    	console.log("datos seleccionados: ");
    	    	console.log(datosSeleccionados);
    	    	var keys=Object.getOwnPropertyNames(datosSeleccionados[0]);
//    	    	console.log("keys:"+keys);
    	    	
    	    	//cabecera de la tabla
    	    	
    	    	var objectExist=false;
    	    	
    	    	htmlCodeCabecera=`<table class="table"> <thead> <tr>`;
    	    	htmlCodeCabeceraObject="";
    	    	$.each(keys, function(index, value) {
    	    		
  	    		  if(value.startsWith("object")){
  	    			  
  	    			  var val=value.replace("object","");
  	  	    		  htmlCodeCabeceraObject+=`<th scope="col">`+val+``;

  	    		  }else{
  	    			htmlCodeCabecera+=`<th scope="col">`+value+`</th>`;
  	    		  }
  	    		});	
    	    	
    	    	//fin cabecera de la tabla
    	    	
    	    	htmlCodeCuerpo=` <tbody>`;
    	    	for(var a=0;a<datosSeleccionados.length;a++){
    	    		htmlCodeCuerpo+=`<tr>`;	    	
        	    	$.each(keys, function(index, value) {
    	  	    		  
    	    		  //console.log("valor keys no object: "+value);
    	    		  
    	    		  var data=$.parseHTML("datosSeleccionados["+[a]+"]."+value);
	    			  var nombreAtributo=data;
    	    		  data=eval(data[0].data);
	    			  
    	    		  if(value.startsWith("object")){ //si es un objeto 

    	    			  var llaves=Object.getOwnPropertyNames(data);
    	      	    	//console.log("object keys: "+llaves);
	    	    		var arrayKeysNombre=[];
	    	    		var arrayKeysValue=[];
	    	    		for(var i=0;i<llaves.length;i++){
    	    	    		

	      	    			htmlCodeCabeceraObjectName="";
    	      	    		$.each(llaves, function(index, valor_llave) {
    	      	    			//console.log("DATA: "+nombreAtributo[0].data);
			      	    		  var dato=$.parseHTML(nombreAtributo[0].data+"."+valor_llave);
				    			  dato=eval(dato[0].data);
			    	    		  if(dato !=null && dato !="null" && dato!=undefined && dato !="undefined" ){

			    	    		  
			    	    			  var val=Object.getOwnPropertyNames(dato);
			    	    			  
				    	    		  if((!( $.isNumeric(dato))) && ($.inArray(dato,arrayKeysNombre)==-1)){
				    	    			  htmlCodeCabeceraObjectName+=htmlCodeCabeceraObject+`_`+valor_llave+`</th>`;
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
				    	    		  }
			    	    		  }
    	      	    		});
    	      	    	}
	    	      	  	
    	    		  }else{
    	    			  //si el atributo al que accede no tiene mas atributos dentro vendra a este else
    	    			  if(data.startsWith("http")){
		    	    			 htmlCodeCuerpo+=`<td scope="col"><img class="imagenesTablaAdmin" src="`+data+`"></td>`;

	 	    			  }else{
			    	    			 htmlCodeCuerpo+=`<td scope="col">`+data+`</td>`;
	 	    			  }    	  	    		
    	  	    		

    	    		  }
    	    		  
    	    		});	
        	    	htmlCodeCuerpo+=`</tr>`;	    	

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
	      	  },
	  	    error: function(xhr){
	  	        alert("An error occured: "+xhr.status+" "+xhr.statusText);
	  	    }
	  	});
      }); 

      

  }