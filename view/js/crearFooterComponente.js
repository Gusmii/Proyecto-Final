var htmlCode; //Para guardar todo el codigo del footer en una variable

$(document).ready(function(){


    htmlCode=`<div  class="footer">`; //Este es el contenedor que distribuira estos 3 bloques como queramos dandole forma de footer

    htmlCode=`<div  class="footer1">`;  //Aqui cargaremos dos listas, una de viajes y otra de estancias

    htmlCode=`</div>`;

    htmlCode=`<div  class="footer2">`; //Aqui dentro estaran las redes sociales y dos palabras que redireccionan


    htmlCode=`</div>`;


    htmlCode=`<div  class="footer3">`; //Aqui va el mapa de google maps
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46486.91698136106!2d-2.9685838242739644!3d43.263318158823765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e27664b89b9%3A0x6534acc41e95a645!2sBilbao%2C%20Vizcaya!5e0!3m2!1ses!2ses!4v1586264246969!5m2!1ses!2ses" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    htmlCode=`</div>`;


    htmlCode=`</div>`;

    $("#FooterComponente").html(htmlCode); //Para escribir el footer en el div con esa id

});