function saut() {
$('#oiseau').animate({marginBottom: '+=100px'},500);
}

$(document).keydown(function (e){
if (e.keyCode == 40){
//alert(e.keyCode);
$('#oiseau').animate({marginTop: '+=50px'},100);
}   //fleche du bas
else if (e.keyCode == 38){
  $('#oiseau').animate({marginTop: '-=50px'},100);
}   //fleche du haut
else if (e.keyCode == 39){
  $('#oiseau').animate({marginLeft: '+=50px'},20);
}  //fleche droite
else if (e.keyCode == 37){
  $('#oiseau').animate({marginLeft: '-=50px'},20);
 }  //fleche gauche
});

function a_tuyau() {
    $('#tuyau').animate({right: '+=400px'},3000,'linear');
}

//console.log() pour voir ce qui est à l'intérieur de quoi
