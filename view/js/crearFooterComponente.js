var htmlCode; //Para guardar todo el codigo del footer en una variable

$(document).ready(function(){


    htmlCode=`<div  class="footerIndex">`; //Este es el contenedor que distribuira estos 3 bloques como queramos dandole forma de footer

    htmlCode+=`<div  class="footer1">`;  //Aqui cargaremos dos listas, una de viajes y otra de estancias

    htmlCode+=`<div  class="footerLeft">`;

    htmlCode+=`<ul>`; //Lista de Viajes
    
    htmlCode+=`<a href="../vViajes.html"><li>Viajes</li></a>`;

    htmlCode+=`<li>Europa</li>`;
    htmlCode+=`<li>America</li>`;
    htmlCode+=`<li>Asia</li>`;
    htmlCode+=`<li>Africa</li>`;
    htmlCode+=`<li>Oceania</li>`;

    htmlCode+=`</ul>`;

    htmlCode+=`</div>`;

    htmlCode+=`<div  class="footerRight">`;

    htmlCode+=`<ul>`; //Lista de Estancias
    
    htmlCode+=`<a href="../vEstancias.html"><li>Estancias</li></a>`;

    htmlCode+=`<li>Europa</li>`;
    htmlCode+=`<li>America</li>`;
    htmlCode+=`<li>Asia</li>`;
    htmlCode+=`<li>Africa</li>`;
    htmlCode+=`<li>Oceania</li>`;

    htmlCode+=`</ul>`;

    htmlCode+=`</div>`;

    htmlCode+=`</div>`; //Aqui termina el footer1

    htmlCode+=`<div  class="footer2">`; //Aqui dentro estaran las redes sociales y dos palabras que redireccionan

    htmlCode+=`<div class="footerSuperior">`;
    
    htmlCode+=`<a href="../vQuienesSomos.html"><p>Quienes somos</p></a>`; //Para redirigir a la pagina de Quienes Somos
    
    htmlCode+=`<p class="contact" data-toggle="modal" data-target="#exampleModal">Contactanos</p>`; //Para hacer aparecer el modal

    htmlCode+=`</div>`;

    htmlCode+=`<div class="footerInferior">`; //Iconos de redes sociales

    htmlCode+=`<img src="view/img/facebook.png">`; 

    htmlCode+=`<img src="view/img/instagram.png">`; 

    htmlCode+=`<img src="view/img/twitter.png">`; 

    htmlCode+=`</div>`;

    htmlCode+=`</div>`; //Aqui termina el footer2


    htmlCode+=`<div  class="footer3">`; //Aqui va el mapa de google maps
    htmlCode+=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46486.91698136106!2d-2.9685838242739644!3d43.263318158823765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e27664b89b9%3A0x6534acc41e95a645!2sBilbao%2C%20Vizcaya!5e0!3m2!1ses!2ses!4v1586264246969!5m2!1ses!2ses" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    htmlCode+=`</div>`;


    htmlCode+=`</div>`; //Aqui termina el footer3

    $("#FooterComponente").html(htmlCode); //Para escribir el footer en el div con esa id

});