
function iluminar(){ 
    document.getElementById('contenedor1').classList.toggle('animar')
    document.getElementById('contenedor3').classList.toggle('animar')
}
setInterval(iluminar, 1000);

function iluminar2(){ 
    document.getElementById('contenedor2').classList.toggle('animar')
   }  
setInterval(iluminar2, 2000);

// SEGUNDO GRUPO DE TARJETAS
function iluminar3(){ 
    document.getElementById('contenedor4').classList.toggle('animar2')
    document.getElementById('contenedor6').classList.toggle('animar2')
   }  
setInterval(iluminar3, 1500);

function iluminar4(){ 
    document.getElementById('contenedor5').classList.toggle('animar2')
    document.getElementById('contenedor7').classList.toggle('animar2')
   }  
setInterval(iluminar4, 3000);

