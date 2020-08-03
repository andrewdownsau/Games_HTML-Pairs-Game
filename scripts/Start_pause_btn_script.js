//Javascript for HTML Pairs Game
//Function that triggers when the start/pause/resume button is pressed

//Set variable for the button pressed and create an event listener for click events
var button_pressed = document.getElementById("start_pause_btn");
button_pressed.addEventListener("click", pressStartPauseButton);



function pressStartPauseButton(){
	
	//The button value variable determines whether the button functions as a start, pause or resume button
	var btn_value = button_pressed.innerHTML;
	
	//The number of rows and colums are defined here as the start button calls the card generation function
	var rows = 5;
	var columns = 10;
	
	//Function of Start Button
	if(btn_value == "Start"){
		//Set button value to Pause
		button_pressed.innerHTML = "Pause";
		
		//Start Timer with interval 1000ms
		timer = setInterval(timerOn,1000);
		
		//Start button triggers cards to be generated on game table
		initiate_cards(rows,columns);
	}
	
	if(btn_value == "Pause"){
		//Set button value to Resume
		button_pressed.innerHTML = "Resume";
		
		//Pause Timer interval ticks
		clearInterval(timer);
		
		//Flip and fade cards to all face their back to avoid cheating
		for(var faded_row = 0; faded_row < rows; faded_row++){
			for(var faded_column = 0; faded_column < columns; faded_column++){
					id_value = faded_row*columns + faded_column;
					
					//Makes only the back of cards visible
					document.getElementById("back_card"+id_value).style.visibility = "visible";
					document.getElementById("front_card"+id_value).style.visibility = "hidden";
					document.getElementById("txt_number"+id_value).style.visibility = "hidden";
			}
		}
		document.getElementById("table_image_div").style.opacity = 0.5;
		
	}
	
	if(btn_value == "Resume"){
		//Set button value to Pause
		button_pressed.innerHTML = "Pause";
		
		//Start Timer with interval 1000ms
		timer = setInterval(timerOn,1000);
		
		//Unfade table div for resuming game option
		document.getElementById("table_image_div").style.opacity = 1;
		
	}
	
}