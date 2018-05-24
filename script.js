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

    /**********façon différente de faire bouger un tuyau*********/

// setInterval(function (e){
//  var p = $('#tuyau1');
//  var position = p.position();
//  console.log(position);
//  p.css({left: position.left-0.3},10);
// });

   /*******faire bouger tuyau + en faire défiler plusieurs*******/

var n = 0;

function generateObstacle(){

n = n +1;
    $('#section').append('<img src="https://image.ibb.co/iyJjRm/pipe.png"  class="obstacle" id="'+n+'">');
    $('#'+n).animate({right: '+500px'},5000,"linear");

    var taille = (Math.random()*13)-20;
    var taille = Math.round(taille);
      console.log(taille);

 $('#'+n).css('top', taille + 'em');

    function index(){
      return (n + n-1);
    }
n = index(n);
console.log(n);
}

setInterval(function(){generateObstacle();}, 2000);

        /********Tuyaux en haut et en bas********/

//
// if (n+1 = ) {
//  $()
//
// }

        /****** Randomiser les tuyaux******/



//console.log() pour voir ce qui est à l'intérieur de quoi
