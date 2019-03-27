var button = document.getElementById("clic");
var buttonMultiplier = document.getElementById("multiplier");
var div = document.getElementById("affichage") ;
var score = 0;
var multiplicateur =1;

function clic() { 
	score += multiplicateur;
	//score+multiplicateur
	div.innerHTML = score;
};

function augmenterMultiplicateur() {
	multiplicateur++;
	buttonMultiplier.innerHTML = multiplicateur;
	
}