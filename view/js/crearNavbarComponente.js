var paginas;
var titulo;
var htmlCode;
var paginaActual;
var nombrePaginas;
var adminPagina="ADMIN";
var nombreAdminPagina="vAdmin.html";
var tituloPaginaActual;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("tipo");

  
  titulo=window.location.pathname.split("/");
  
  //Se crean dos Arrays distintos
  paginas=["HOME","VIAJES","ESTANCIAS","ADMIN","QUIENESSOMOS"];
  nombrePaginas=["index.html","vViajes.html","vEstancias.html","vAdmin.html","vQuienesSomos.html"];
 
  if(titulo[1]=="index.html" || titulo[2]==""|| titulo[2]=="index.html"){
	  //si la parte 2 del array pone index.html, si la parte 3 del arrray esta vacia,
	  //o si la parte 3 del array pone index.html, la pagina actual será HOME
    paginaActual="HOME";
    tituloPaginaActual="index.html";
  }
  if(titulo[2]=="view"){
	  //si en el array, la parte 3 es view,
	  //es decir, esta en alguna vista dentro de esa carpeta, 
	  //el tituloActual se convertira en la parte 4 de ese array,
	  //ya que ahi va el nombre de la pagina en la que estamos,
	  //en caso de que no tenga view, la parte 3 del array se quedará como
	  //pagina actual
	  tituloPaginaActual=titulo[3];
  }else{
	  tituloPaginaActual=titulo[2];
  }
  if(paginaActual!="HOME"){
	  //si no estamos en la pagina principal, 
	  //la parte 3 del array sera el nombre de la pagina actual
	  //y guardaremos el nombre con mayusculas y sin el .html 
    paginaActual=tituloPaginaActual.replace(".html","").slice(1).toUpperCase();
  }

  if(titulo[2]=="view"){
	  tituloPaginaActual=titulo[3];
}else{
	  tituloPaginaActual=titulo[2];
}
  //utilizaremos las variables creadas anteriormente para quitarlas de su respectivo array
  paginas = $.grep(paginas, function(value) {
    return value != paginaActual;
  });
  if(tituloPaginaActual==""){
	  tituloPaginaActual="index.html";
  }
  nombrePaginas = $.grep(nombrePaginas, function(value) {
    return value != tituloPaginaActual;
  });
  
  //si el usuario es normal, no se monstrara en el navbar el boton de admin, ya que borraremos
  //de los arrays el nombre de la pagina y la pagina
  if(usuario==="1" || usuario === null || usuario === undefined){
	  
    paginas = $.grep(paginas, function(value) {
      return value != adminPagina;
    });
    nombrePaginas = $.grep(nombrePaginas, function(value) {
      return value != nombreAdminPagina;
    });
  }
   crearNavbar();
   logOut();
   logOutVistas();

  
});
function crearNavbar(){
  var usuario=localStorage.getItem("usuario");
  //console.log("pagina actual");
 //console.log(paginaActual); 
 
if(paginaActual!="HOME"){
	//Aqui si está en la pagina principal, no se mostrara en el navbar HOME, 
	//en caso de que no este en la pagina principal, saldra HOME
  htmlCode=`<a class="navbar-brand" href="../index.html" id="LinkImgLogo">`;
  htmlCode+=`<img src="img/logoBlancoEspacio.png" id="ImgLogo" >`;
 
}else{
  htmlCode=`<a class="navbar-brand" href="index.html" id="LinkImgLogo">`;
  htmlCode+=`<img src="view/img/logoBlancoEspacio.png" id="ImgLogo">`;
}
htmlCode+=` </a>`;

htmlCode+=`<ul class="navbar-nav mr-auto">`;
    for(var i=0;i<paginas.length;i++){
      htmlCode+=`<li class="nav-item">`;

      if(paginaActual!="HOME"){//si no estamos en la pagina principal
        if(paginas[i]=="HOME"){
        	//si en el array en el que estamos, es HOME, se pondrá un
        	//href diferente que si no lo es, para poder ir a esa pagina
          htmlCode+=`<a class="nav-link" href="../`+nombrePaginas[i]+`">`+paginas[i]+`</a>`;
        }else{
          if(paginas[i]=="QUIENESSOMOS"){
            htmlCode+=`<a class="nav-link" href="`+nombrePaginas[i]+`">QUIENES SOMOS</a>`;
          }else{
            htmlCode+=`<a class="nav-link" href="`+nombrePaginas[i]+`">`+paginas[i]+`</a>`;
           }
        }
      }else{
        if(paginas[i]=="QUIENESSOMOS"){
          htmlCode+=`<a class="nav-link" href="view/`+nombrePaginas[i]+`">QUIENES SOMOS</a>`;
        }else{
        	htmlCode+=`<a class="nav-link" href="view/`+nombrePaginas[i]+`">`+paginas[i]+`</a>`;
        }
      }        
      htmlCode+=`</li>`;
    }
    //Se muestran dos botones a la derecha de la barra de navegacion
    if(localStorage.getItem("apodo") == null && tituloPaginaActual != "vViajes.html" && tituloPaginaActual != "vQuienesSomos.html" && tituloPaginaActual != "vEstancias.html" && tituloPaginaActual != "vAdmin.html"){
      
    htmlCode+= `</ul>
    <span id="zonaLogin" class="navbar-text">
        <a class="nav-link" data-toggle="modal" data-target="#modalLogin">ENTRAR</a>
      
        <a class="nav-link" data-toggle="modal" data-target="#modalRegister">REGISTRARSE</a>
    </span>`;
  }

  //Se muestran dos botones y el apodo del usuario a la derecha de la barra de navegacion
  if(localStorage.getItem("apodo") != null && tituloPaginaActual == "index.html"){
      
    htmlCode+= `</ul>
    <span id="zonaLogin" class="navbar-text">
        <a class="nav-link">`+localStorage.getItem("apodo")+`</a>

        <a class="nav-link" id="reservasIndex" href="index.html">Reservas</a>
      
        <a class="nav-link" id="cerrarSesion">CERRAR SESION</a>
    </span>`;
  }

  //Se muestran dos botones y el apodo del usuario a la derecha de la barra de navegacion
  if(localStorage.getItem("apodo") != null && tituloPaginaActual != "index.html"){ 
      
    htmlCode+= `</ul>
    <span id="zonaLogin" class="navbar-text">
        <a class="nav-link">`+localStorage.getItem("apodo")+`</a>

        <a class="nav-link" id="reservasIndex" href="../index.html"> Reservas</a>
      
        <a class="nav-link" id="cerrarSesion">CERRAR SESION</a>
    </span>`;
  }
  $("#NavbarComponente").html(htmlCode);
  
}

//Cerrar sesion del index
function logOut() {
	//forms values vars	
    $("#cerrarSesion").click(function() {	

    	localStorage.clear();

        $.ajax({     	
			url: "controller/login/cLogout.php",
			dataType:"json",
			success: function(result) {
        
          alert("Estamos cerrando tu sesion");
          //localStorage.clear();
          window.location.reload(true);

        	},
           	error: function(xhr) {
    			alert("An error occured: " + xhr.status + " " + xhr.statusText);
        	}      	
        });
    });
}

//Cerrar sesion en las demas vistas
function logOutVistas() {
	
    $("#cerrarSesion").click(function() {	

      //Aqui se borra todo el contenido de la sesion local
    	localStorage.clear(); 

        $.ajax({     	
			url: "../controller/login/cLogout.php",
			dataType:"json",
			success: function(result) {
        
          alert("Estamos cerrando tu sesion");
          //localStorage.clear();
          window.location.reload(true);

        	},
           	error: function(xhr) {
    			alert("An error occured: " + xhr.status + " " + xhr.statusText);
        	}      	
        });
    });
}

