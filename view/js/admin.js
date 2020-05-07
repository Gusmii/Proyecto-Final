$(document).ready(function(){
   
  
showSelected();
  
  });

  function showSelected(){

    $("#seleccionado").change(function(){
       
        var selected = document.getElementById("seleccionado").value;

        console.log(selected);


      }); 

      

  }