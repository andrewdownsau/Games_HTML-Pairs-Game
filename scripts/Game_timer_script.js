//Javascript for HTML Pairs Game
//Function that starts the timer of the game

var second_output = 0;
var minute_output = 0;
var second_prefix = ":0";
var minute_prefix = "0";

function timerOn(){
	//Counts up seconds on timer interval (1000 ms)
	second_output++;

	//Minute timer adds minute value and resets seconds at 60
	if(second_output == 60){
		second_output = 0; 
		minute_output++
	}

	//Conditions to output correct number of digits for single digit values
	if(second_output < 10){
		second_prefix = ":0";
	}else{
		second_prefix = ":";
	}
	if(minute_output < 10){
		minute_prefix = "0";
	}else{
		minute_prefix = "";
	}

	//Replace the timer values for the new interval
	document.getElementById("timer_output").innerHTML = minute_prefix + minute_output + second_prefix + second_output;
}