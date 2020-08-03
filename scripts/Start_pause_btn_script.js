//Javascript for HTML Pairs Game
//Function that triggers when the start/pause/resume button is pressed

//Set variable for the button pressed and create an event listener for click events
var button_pressed = document.getElementById("start_pause_btn");
button_pressed.addEventListener("click", pressStartPauseButton);

//The button value variable determines whether the button functions as a start, pause or resume button
var btn_value = button_pressed.innerHTML;

function pressStartPauseButton(){
	
	//Function of Start Button
	if(btn_value == "Start"){
		//Set button value to Pause
		button_pressed.innerHTML = "Pause";
		
		//Start Timer with interval 1000ms
		timer = setInterval(timerOn,1000);
		
		//Start button triggers cards to be generated on game table
		initiate_cards(5,10);
	}
	
	
	
}