
// variables globales
var score = 0;
var multiplicateur = 1;
//var div = document.getElementById("affichage");
var prix = 0;
var intervalId = null;
var bonusTimer = 0;
var intervalIdBonus = null;

// function aleatoire(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

function boutonClic() {
	//var btn = document.getElementById("clic");
	//var pscore = document.getElementById("score");
 	if (bonusTimer != 0){
	  score += multiplicateur*2;

	}else{
	  score += multiplicateur;

	}
	activerBoutons();
    //pscore.innerHTML = score;
    //btn.innerHTML = score;
    //autoClic();
}

function augmenterMultiplicateur() {
	var btn = document.getElementById("multiplier");
	//var pmultiplicateur = document.getElementById("multiplicateur");
 	if (score >= 50){
		prix = multiplicateur*50;
 		multiplicateur++;
    //pmultiplicateur.innerHTML = multiplicateur;
    score -= prix;
 	  btn.innerHTML = " Multiplicateur x " + multiplicateur + " (Prix : " + (multiplicateur*50) + ")";
    //autoClic();
	}
	activerBoutons();
}

// étape 11 et 12
function autoClic() {
   // if (score >= 200 && intervalId === null){
   	if (intervalId === null && score >= 500){
	  	intervalId = setInterval(boutonClic, 1000);
	  	document.getElementById("autoclic").disabled = true;
	    score -= 500;
	  }
		activerBoutons();
}

// étape 13
function bonusClic() {
	var btnBonus = document.getElementById("bonus");
 	if (score >= 50){
			bonusTimer = 30;
			btnBonus.disabled = true;
			btnBonus.innerHTML = bonusTimer;
    	score -= 5000;
	  	if (intervalIdBonus === null){
		  	intervalIdBonus = setInterval(autoBonus, 1000);
    }
 	}
	activerBoutons();
}

function autoBonus() {
	var btnBonus = document.getElementById("bonus");
	bonusTimer--;
	btnBonus.innerHTML = bonusTimer;

	if (bonusTimer === 0){
		btnBonus.innerHTML = "Bonus (Prix: 5000)";
		clearInterval(intervalIdBonus);
		btnBonus.disabled = false;
		intervalIdBonus = null;
	}
	activerBoutons();

}

function activerBoutons() {
    document.getElementById("clic").innerHTML = score;
    document.getElementById("score").innerHTML = score;
	document.getElementById("multiplier").disabled = (score < multiplicateur*50);
	document.getElementById("autoclic").disabled = (score < 500 || intervalId != null);
 	document.getElementById("bonus").disabled = (score < 5000);
}

function stopautoClic() {
	var btnBonus = document.getElementById("bonus");
	btnBonus.innerHTML = "Bonus (Prix: 5000)";
	btnBonus.disabled = false;
 	if (bonusTimer != 0){
		clearInterval(intervalIdBonus);
  		intervalIdBonus = null;
		bonusTimer = 0;
	}
    if (intervalId != null){
	 	clearInterval(intervalId);
	  	intervalId = null;
	}
	//multiplicateur = 1;
	activerBoutons();

}
