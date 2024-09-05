var ligaSelecionada;
var idAnterior;
function selecionarImgLiga(id, liga, tipoLiga){
  alert(tipoLiga);
    ligaSelecionada = liga;
      if(liga != 'mestre' && liga != 'grao-mestre'){  
      document.getElementById(id).src = 'http://localhost/EloFast/images/'+liga+'_IV.png';   
      document.getElementById(tipoLiga).style.display = 'block'; 
}
      else{
                  document.getElementById(id).src = 'http://localhost/EloFast/images/'+liga+'.png';  
                  document.getElementById(tipoLiga).style.display = 'none';          
      }
}  

function selecionarImgDivisao(id, divElo){

      document.getElementById(id).src = 'http://localhost/EloFast/images/'+ligaSelecionada+'_'+divElo+'.png'; 

} 