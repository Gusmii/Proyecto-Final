var htmlCode;
var usuario;

$(document).ready(function(){
  usuario=localStorage.getItem("usuario");


  crearFiltro();
  
  $("#myInput").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $("#myDIV *").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
	  });
});
function crearFiltro(){
  var usuario=localStorage.getItem("usuario");

  htmlCode= `<div class="container">`;
  htmlCode+= `<br> <input class="form-control" id="myInput" type="text" placeholder="Buscar por ciudad">`;
//  htmlCode+= ` <div id="myDIV">
//    <p>I am a paragraph.</p>
//    <div>I am a div element inside div.</div>
//    <button class="btn">I am a button</button>
//    <button class="btn btn-info">Another button</button>
//    <p>Another paragraph.</p>
//  </div>`;
  $("#filtroEstancias").html(htmlCode);
  
}