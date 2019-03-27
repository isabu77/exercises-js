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
	if(score >= 50){
		//retire 50 au score
		score -= 50;
		//affiche le score dans la div
		div.innerHTML = score;
		// ajoute +1 au multiplicateur
		multiplicateur++;
		//affiche la valeur multiplicateur sur le bouton
		buttonMultiplier.innerHTML = multiplicateur;
	}
	
	
}