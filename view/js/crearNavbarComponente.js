var paginas;
var titulo;
var htmlCode;
var paginaActual;
var nombrePaginas;
var nombrePaginaActual;

$(document).ready(function(){
  var usuario=localStorage.setItem("usuario","admin");
  usuario=localStorage.getItem("usuario");

  titulo=window.location.pathname.split("/");
  
  paginas=["HOME","VIAJES","ESTANCIAS","ADMIN","QUIENESSOMOS"];
  nombrePaginas=["index.html","vViajes.html","vEstancias.html","vAdmin.html","vQuienesSomos.html"];
 
  if(titulo[1]=="index.html" || titulo[2]==""|| titulo[2]=="index.html"){
    paginaActual="HOME";
    nombrePaginaActual="index.html";
  }
  
  if(paginaActual!="HOME"){
    nombrePaginaActual=titulo[2];
    paginaActual=titulo[2].replace(".html","").slice(1).toUpperCase();
  }
  paginas = $.grep(paginas, function(value) {
    return value != paginaActual;
  });
  nombrePaginas = $.grep(nombrePaginas, function(value) {
    return value != nombrePaginaActual;
  });
  if(usuario=="normal"){
    paginas = $.grep(paginas, function(value) {
      return value != paginaActual;
    });
    nombrePaginas = $.grep(nombrePaginas, function(value) {
      return value != nombrePaginaActual;
    });
  }
   crearNavbar();
  
});
function crearNavbar(){
  var usuario=localStorage.getItem("usuario");
  console.log("pagina actual");
 console.log(paginaActual); 
if(paginaActual!="HOME"){
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

      if(paginaActual!="HOME"){
        if(paginas[i]=="HOME"){
          htmlCode+=`<a class="nav-link" href="../`+nombrePaginas[i]+`">`+paginas[i]+`</a>`;
        }else{
          if(paginas[i]=="QUIENESSOMOS"){
            htmlCode+=`<a class="nav-link" href="`+nombrePaginas[i]+`">QUIENES SOMOS</a>`;
          }else{
            if(usuario!="admin"){
              htmlCode+=``;
            }else{
              htmlCode+=`<a class="nav-link" href="`+nombrePaginas[i]+`">`+paginas[i]+`</a>`;
            }
          }
        }
      }else{
        if(paginas[i]=="QUIENESSOMOS"){
          htmlCode+=`<a class="nav-link" href="view/`+nombrePaginas[i]+`">QUIENES SOMOS</a>`;
        }else{
          if(usuario!="admin" && paginas[i]!="ADMIN"){
            htmlCode+=``;
          }else{
            htmlCode+=`<a class="nav-link" href="view/`+nombrePaginas[i]+`">`+paginas[i]+`</a>`;
          }
        }
      }        
      htmlCode+=`</li>`;
    }

    htmlCode+= `</ul>
    <span class="navbar-text">
        <a class="nav-link" href="#">ENTRAR</a>
      
        <a class="nav-link" href="#">REGISTRARSE</a>
    </span>`;
  $("#NavbarComponente").html(htmlCode);
}