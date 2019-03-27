
// variables globales
var score = 0;
var multiplicateur = 1;
//var div = document.getElementById("affichage");
var prix = 50;
var intervalId = null;
var bonusTimer = 0;
var intervalIdBonus = null;
var bAutoclick = 0;
var bonus = 1;
var btnBonus = document.getElementById("bonus");
var btnMultiplier = document.getElementById("multiplier");

// function aleatoire(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

function boutonClic() {
	//var btn = document.getElementById("clic");
	//var pscore = document.getElementById("score");
 	//if (bonusTimer != 0){
	  score += multiplicateur*bonus;

	//}else{
	  //score += multiplicateur;

	//}
		activerBoutons();
    //pscore.innerHTML = score;
    //btn.innerHTML = score;
    //autoClic();
}

function augmenterMultiplicateur() {
	//var pmultiplicateur = document.getElementById("multiplicateur");
 	if (score >= prix){
			//prix = multiplicateur*50;
    	//pmultiplicateur.innerHTML = multiplicateur;
    	score -= prix;
			prix *= 2;
 			multiplicateur++;
 	 		btnMultiplier.innerHTML = " Multiplicateur x" + multiplicateur + " (" + prix + " clics)";
    	//autoClic();
	}
	activerBoutons();
}

// étape 11 et 12
function autoClic() {
   // if (score >= 200 && intervalId === null){
		// if (score >= 500 && bAutoclick === 0 )
		// {
		// 		setInterval(boutonClic, 1000);
	 //  		//autoClic();
		// 		bAutoclick = 1;
		// }
   	if (intervalId === null && score >= 500){
	  	intervalId = setInterval(boutonClic, 1000);
	  	document.getElementById("autoclic").disabled = true;
	    score -= 500;
	  }
		activerBoutons();
}

function setBonus() {
		if (bonus == 1){
 			bonus = 2;
			btnBonus.disabled = true;
 		}else{
 			bonus = 1;
			btnBonus.disabled = false;
 		}

}

// étape 13
function bonusClic() {
 	if (score >= 5000){
 			setBonus();

			bonusTimer = 30;
			btnBonus.innerHTML = bonusTimer;
    	score -= 5000;
    	//setTimeOut(setBonus, 30000);
	  	if (intervalIdBonus === null){
		  	intervalIdBonus = setInterval(autoBonus, 1000);
    	}

 	}
	activerBoutons();
}

function autoBonus() {
	bonusTimer--;
	btnBonus.innerHTML = bonusTimer + " s";

	if (bonusTimer === 0){
			bonusTimer = 30;
		btnBonus.innerHTML = "BONUS (5000 clics)";
		clearInterval(intervalIdBonus);
		intervalIdBonus = null;
		setBonus();
	}
	activerBoutons();

}

function activerBoutons() {
    document.getElementById("clic").innerHTML = score;
    document.getElementById("score").innerHTML = score;
	document.getElementById("multiplier").disabled = (score < prix);
	document.getElementById("autoclic").disabled = (score < 500 || intervalId != null);
 	document.getElementById("bonus").disabled = (score < 5000);
}

function stopautoClic() {
	var btnBonus = document.getElementById("bonus");
	btnBonus.innerHTML = "BONUS (5000 clics)";
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
