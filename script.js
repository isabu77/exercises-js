var button = document.getElementById("clic");
var buttonMultiplier = document.getElementById("multiplier");
var buttonAutoClic = document.getElementById("autoclick");
var buttonBonus = document.getElementById("bonus");
var div = document.getElementById("affichage") ;
var score = 0;
var multiplicateur =1
var prixMultiplicateur= 50;
//autoclick arreter 0 sinon 1
var autoclick = 0;

var timer;
var bonusActif = 1;
var nbSec = 30;


function clic() { 
	score += multiplicateur * bonusActif;
	//score+multiplicateur
	div.innerHTML = score;
	verifScore();
};

function augmenterMultiplicateur() {
	if(score >= prixMultiplicateur){
		//retire 50 au score
		score -= prixMultiplicateur;
		verifScore();
		//affiche le score dans la div
		div.innerHTML = score;
		// ajoute +1 au multiplicateur
		multiplicateur++;

		prixMultiplicateur *= 2;
		//affiche la valeur multiplicateur sur le bouton
		buttonMultiplier.innerHTML =  "Multiplicateur x" + multiplicateur + " (-"+ prixMultiplicateur +" clics)";
		
	}
}

function achatAutoclick(){
	if (score >= 500){
		//si pas deja d'autoclic
		if(autoclick === 0){
			autoclick = 1;
			buttonAutoClic.setAttribute("disabled", "");
			score-=500;
			div.innerHTML = score;
			
			intervalIDclic = setInterval(clic, 1000);
		}
	}
}

function bonus(){
		//bonus non activé
		if (bonusActif == 1){
			//activation
			bonusActif = 2;
			buttonBonus.setAttribute("disabled", "");
		}else{
			//sinon désactivation
			bonusActif = 1;
			buttonBonus.removeAttribute("disabled");
		}
}

function achatBonus() {
	if(score >= 5000){
		score-=5000;
		verifScore()
		div.innerHTML = score;
		bonus();
		//solution sans timer
		//var chrono = setTimeout(bonus, 30000);
		timer = setInterval(timerCount, 1000);
	}
}

function timerCount(){
	nbSec--;
	buttonBonus.innerHTML = nbSec + " s";
	if (nbSec === 0){
  		clearInterval(timer);
  		bonus();
  		verifScore()
  		buttonBonus.innerHTML = "BONUS (5000 clics)";
  		nbSec = 30;
  	}
}

function verifScore(){
	if (score >= prixMultiplicateur){
		buttonMultiplier.removeAttribute("disabled");
	}else{
		buttonMultiplier.setAttribute("disabled", "");
	}
	if (score >= 5000 && bonusActif === 1){
		buttonBonus.removeAttribute("disabled");
	}else{
		buttonBonus.setAttribute("disabled", "");
	}
	if (score >= 500 && autoclick === 0){
		buttonAutoClic.removeAttribute("disabled");
	}else{
		buttonAutoClic.setAttribute("disabled", "");
	}
	
}


