
// variables globales
var score = 150;
var multiplicateur = 1;
var div = document.getElementById("affichage");
var prix = 0;
var intevalId = null;

function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function boutonClic() {
	var btn = document.getElementById("clic");
	var pscore = document.getElementById("score");
    score += multiplicateur;
    console.log(score);
    pscore.innerHTML = score;
    btn.innerHTML = score;
    autoClic();

}

function augmenterMultiplicateur() {
	var btn = document.getElementById("multiplier");
	//var pmultiplicateur = document.getElementById("multiplicateur");
 	prix = multiplicateur*50;
 	multiplicateur++;
    //pmultiplicateur.innerHTML = multiplicateur;
    score -= prix;
    if (score < 0){
    	score = 0;
    }
    document.getElementById("score").innerHTML = score;
    btn.innerHTML = " Multiplicateur x " + multiplicateur + " Prix : " + (multiplicateur*50);
    autoClic();
}

// étape 11
function autoClic() {
   if (score >= 200 && intevalId === null){
	  	intervalID = setInterval(boutonClic, 1000);
    }
}

function stopautoClic() {
  clearInterval(intervalID);
}
