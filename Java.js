function myFunction() {
   let x = document.getElementById("snackbar");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   
   let textoCopiado = document.getElementById("texto-usuario");
   textoCopiado.select();
   textoCopiado.setSelectionRange(0,99999);
   document.execCommand('copy');
  }
 
