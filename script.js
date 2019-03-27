var button = document.getElementById("clic");
var buttonMultiplier = document.getElementById("multiplier");
var div = document.getElementById("affichage") ;
var score = 0;
var multiplicateur =1
var prixMultiplicateur= 50;

function clic() { 
	score += multiplicateur;
	//score+multiplicateur
	div.innerHTML = score;
};

function augmenterMultiplicateur() {
	if(score >= prixMultiplicateur){
		//retire 50 au score
		score -= prixMultiplicateur;
		//affiche le score dans la div
		div.innerHTML = score;
		// ajoute +1 au multiplicateur
		multiplicateur++;

		prixMultiplicateur *= 2;
		//affiche la valeur multiplicateur sur le bouton
		buttonMultiplier.innerHTML =  "Multiplicateur x" + multiplicateur + " (-"+ prixMultiplicateur +" clics)";
		
	}
	
	
}