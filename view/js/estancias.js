var htmlCode;
var usuario;

$(document).ready(function(){
//  usuario=localStorage.setItem("usuario","normal");
  usuario=localStorage.getItem("usuario");
  mostrarCards();
  
});
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




}