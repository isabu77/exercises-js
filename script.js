var button = document.getElementById("clic");
var buttonMultiplier = document.getElementById("multiplier");
var div = document.getElementById("affichage") ;
var score = 0;
var multiplicateur =1
var prixMultiplicateur= 50;
//autoclick arreter 0 sinon 1
var autoclick = 0;


function clic() { 
	score += multiplicateur;
	//score+multiplicateur
	div.innerHTML = score;
	//score supérieur à 200
	if (score >= 200){
		//si pas deja d'autoclic
		if(autoclick === 0){
			autoclick = 1;
			intervalID = setInterval(clic, 1000);
		}
	}

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





