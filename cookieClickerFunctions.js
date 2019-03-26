
// variables globales
var score = 0;
var multiplicateur = 1;
var div = document.getElementById("affichage");
var prix = 0;
var intevalId = null;
var bonusTimer = 0;
var intevalIdBonus = null;

function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function boutonClic() {
	var btn = document.getElementById("clic");
	var pscore = document.getElementById("score");
 	if (bonusTimer != 0){
	  score += multiplicateur*2;
		
	}else{
	  score += multiplicateur;

	}
    pscore.innerHTML = score;
    btn.innerHTML = score;
    //autoClic();

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
    //autoClic();
}

// étape 11 et 12
function autoClic() {
   // if (score >= 200 && intevalId === null){
   	if (intevalId === null){
	  	intervalID = setInterval(boutonClic, 1000);
	  	document.getElementById("autoclic").disabled = true;
	    score -= 500;
	    if (score < 0){
	    	score = 0;
	    }
    }
}

// étape 13
function bonusClic() {
	var btnBonus = document.getElementById("bonus");
	bonusTimer = 30;
	btnBonus.disabled = true;
	btnBonus.innerHTML = bonusTimer;
    score -= 5000;
    if (score < 0){
    	score = 0;

   	if (intevalIdBonus === null){
	  	intevalIdBonus = setInterval(autoBonus, 1000);
	    }
    }
}

function autoBonus() {
	var btnBonus = document.getElementById("bonus");
	bonusTimer--;
	btnBonus.innerHTML = bonusTimer;

	if (bonusTimer === 0){
		btnBonus.innerHTML = "bonus Prix: 5000";
		clearInterval(intevalIdBonus);
		btnBonus.disabled = false;
	}

}

function stopautoClic() {
  clearInterval(intervalID);
}
