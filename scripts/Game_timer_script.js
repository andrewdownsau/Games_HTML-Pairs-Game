//Javascript for HTML Pairs Game
//Function that starts the timer of the game

var output = 0;

function timerOn(){
	output++;
	document.getElementById("timer_output").innerHTML = output + " seconds";
}