
// variables globales
var score = 0;
var div = document.getElementById("affichage");

function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function boutonClic() {
	var btn = document.getElementById("clic");
	var pscore = document.getElementById("score");
    score++;
    console.log(score);
    pscore.innerHTML = "Score : " + score;
    btn.innerHTML = score;

}
