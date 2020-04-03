
$(document).ready(function(){
    console.log("hola");
    $("#NavbarComponente").html(`<a class="navbar-brand" href="#" id="LinkImgLogo">
    <img src="/view/img/logoBlancoEspacio.png" id="ImgLogo" alt="">
  </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">VIAJES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ESTANCIAS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">QUIENES SOMOS</a>
        </li>
        
      </ul>
      <span class="navbar-text">
          <a class="nav-link" href="#">ENTRAR</a>
        
          <a class="nav-link" href="#">REGISTRARSE</a>
      </span>
    `);

});