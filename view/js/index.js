var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.setItem("usuario","normal");
  usuario=localStorage.getItem("usuario");

  $.ajax({
		// check if somebody is  logged		
		url: "controller/login/cLoggedVerify.php",
		dataType: "json",
		success: function (result) {
			console.log(result);

      if (result.error == "Logged") {  //Si esta logueado muestra los datos en la consola
        
        alert("estas logueado");
      
        

			} else {
        alert("logueate");		
			}
		},
		error: function (xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
	});

  mostrarCards();
  signIn();
  signUp();

});

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

//
//  $.ajax({
//    type:"JSON",
//    url:"../controller/equipos/cSeleccionarEquipos.php",
//    success: function(datosEquipos){
//
//      miDatosEquipos=JSON.parse(datosEquipos);
//      ContenidoTablas=`<tr><th>IDEQUIPO</th><th>NOMBRE</th><th>LOGO</th><th>CATEGORIA</th><th>ACCION</th></tr>`;
//      NombreTabla="equipos";
//      $.each(miDatosEquipos,function(i,datosEquipo){
//        ContenidoTablas+=`<tr><td>`+datosEquipo.idEquipo+`</td><td>`+datosEquipo.nombre+`</td><td><img src="`+datosEquipo.logo+`" style="width:100px; height:auto;"></td><td>`+datosEquipo.objectCategoria.nombre+`</td><td><div onclick="editarElemento(`+datosEquipo.idEquipo+`,'`+NombreTabla+`')" style="display:inline-block" class="editar" id="`+datosEquipo.idEquipo+`"><i class="fas fa-edit"></i></div><div onclick="borrarElemento(`+datosEquipo.idEquipo+`,'`+NombreTabla+`')" style="display:inline-block" class="borrar" id="`+datosEquipo.idEquipo+`"><i class="fas fa-trash-alt" ></i></div></td></tr>`;
//   
//      });//FIN DE GENERAR LA TABLA DE EQUIPOS
//      $(".panelEq .divTablaAdmin table").html(ContenidoTablas);	
// },
//    error: function(xhr){
//        alert("An error occured: "+xhr.status+" "+xhr.statusText);
//    }
//});//FIN DEL AJAX DE GENERAR LA TABLA EQUIPOS




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
