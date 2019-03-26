
// variables globales
var score = 0;
var multiplicateur = 1;
var div = document.getElementById("affichage");
var prix = 0;

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
    btn.innerHTML = " Multiplicateur x " + multiplicateur;
}
