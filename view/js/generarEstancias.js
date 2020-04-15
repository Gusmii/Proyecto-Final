var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearContenidoEstancias();
  

});
function crearContenidoEstancias(){
  var usuario=localStorage.getItem("usuario");

  htmlCode= ` <div id="myDIV">
    <p>I am a paragraph.</p>
    <div>I am a div element inside div.</div>
    <button class="btn">I am a button</button>
    <button class="btn btn-info">Another button</button>
    <p>Another paragraph.</p>
  </div>`;
  $("#filtradasEstancias").html(htmlCode);
  
}