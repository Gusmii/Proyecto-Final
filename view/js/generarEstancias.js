var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearContenidoEstancias();
  

});
function crearContenidoEstancias(){
//  var usuario=localStorage.getItem("usuario");
//
//  htmlCode= ` <div id="myDIV">
//    <p>I am a paragraph.</p>
//    <div>I am a div element inside div.</div>
//    <button class="btn">I am a button</button>
//    <button class="btn btn-info">Another button</button>
//    <p>Another paragraph.</p>
//  </div>`;
//  $("#filtradasEstancias").html(htmlCode);
  
	
	
	htmlCode +=``;
	
	$.ajax({
		  type:"GET",
		    dataType:"json",
		    url:"../controller/estancias/cSelectEstancias.php",
		    success: function(datos){

		    	datosEstancias= jQuery.parseJSON(datos.datosEstancias);
//		    	console.log(datosEstancias);
		    	
		    	htmlCode ="";
		    	htmlCode+=`<div id="contenedorEstancias" >`;
		    	var i=-1;
		    	var x=0;
		    	var z=0;
			    	for(var a=0;a<datosEstancias.length;a++){
			    	x++; 
			    	if(x%5===0 && a != 0){
			    		 i++;
			    		 htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`" >`;
			        	
			    	 }else if(a === 0){
			    		 i++;
				        	htmlCode += `<div id="LoteNumero`+i+`" class="Lotes LoteNumero`+i+`">`;
				        	 
			    	 }
			    	 htmlCode +=`<div id="cardEstancias_`+a+`"  class="card mb-3 cardEstancias" style="max-width: 540px;"> `;
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
			        if(z%5===0 && a != 0){
			        	htmlCode +=`<div id="verMasNumero`+i+`" class="text-center verMasEstancias"><button type="button" class="btn btn-primary active">VER MAS</button></div></div>`;
			        		}else if(a === 4){
					    		 i++;
						        	htmlCode += `<div id="verMasNumero`+i+`" class="text-center verMasEstancias"><button type="button" class="btn btn-primary active">VER MAS</button></div>`;
						        	 
					    	 }
			        }
		    	htmlCode+=`</div>`;

		    	  $("#filtradasEstancias").html(htmlCode);
		    	  for(var b=1;b<i+1;b++){
			    		
		    		  $( ".LoteNumero"+b).css({"display":"none!important"});
		    		  $(".LoteNumero"+b+" > .cardEstancias").addClass("d-none");
		    		  $(".LoteNumero"+b+" > .verMasEstancias").addClass("d-none");
		    		  
		    		  b--;
		    		  if(b!=0){
			    		  $(".LoteNumero"+b+" > .verMasEstancias > button").addClass("invisible");
 
		    		  }
		    		  b++;
		    	  	}
		    	  $( ".verMasEstancias :button").click(function() {
		    		  
		    		  alert(" id: "+ $( this ).parent().attr("id") );
		    		  alert(" id Lote: "+ $( this ).parent().parent().attr("id") );
		    		});
	    		  

		    	  
		    	  
		 },
		    error: function(xhr){
		        alert("An error occured: "+xhr.status+" "+xhr.statusText);
		    }
		});
		  
	
	

	
}