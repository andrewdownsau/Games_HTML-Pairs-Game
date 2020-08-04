//Javascript for HTML Pairs Game
//Function that triggers when the start/pause/resume button is pressed

//Set variable for the button pressed and create an event listener for click events
var start_pause_resume_btn = document.getElementById("start_pause_btn");
start_pause_resume_btn.addEventListener("click", pressStartPauseButton);

//Array to retain values of cards already paired
var paired_card_visbility = [];
var faded_row, faded_column;

function pressStartPauseButton(){
	
	//The button value variable determines whether the button functions as a start, pause or resume button
	var btn_value = start_pause_resume_btn.innerHTML;
	
	
	//Function of Start Button
	if(btn_value == "Start"){
		//Set button value to Pause
		start_pause_resume_btn.innerHTML = "Pause";
		
		//Start Timer with interval 1000ms
		timer = setInterval(timerOn,1000);
		
		//Start button triggers cards to be generated on game table
		initiate_cards();
		generateCardPressListeners();
		
		//Clear previous messages (if win condition was met)
		document.getElementById("message").innerHTML = "";
	}
	
	if(btn_value == "Pause"){
		//Set button value to Resume
		start_pause_resume_btn.innerHTML = "Resume";
		
		//Pause Timer interval ticks
		clearInterval(timer);
		
		//Flip cards to all face their back to avoid cheating
		for(faded_row = 0; faded_row < rows; faded_row++){
			for(faded_column = 0; faded_column < columns; faded_column++){
					id_value = faded_row*columns + faded_column;
					
					//Archive current visibility states so that resume brings game to original position
					paired_card_visbility[id_value] = document.getElementById("front_card"+id_value).style.visibility;
					
					//Makes only the back of cards visible
					document.getElementById("front_card"+id_value).style.visibility = "hidden";
					document.getElementById("txt_number"+id_value).style.visibility = "hidden";
			}
		}
		//Fade the table div to show that the game has been paused
		document.getElementById("table_image_div").style.opacity = 0.5;
		
	}
	
	if(btn_value == "Resume"){
		//Set button value to Pause
		start_pause_resume_btn.innerHTML = "Pause";
		
		//Start Timer with interval 1000ms
		timer = setInterval(timerOn,1000);
		
		//Flip cards that are paired back to front facing
		for(faded_row = 0; faded_row < rows; faded_row++){
			for(faded_column = 0; faded_column < columns; faded_column++){
					id_value = faded_row*columns + faded_column;
					
					//Matches the archived visibility values and assigns them to the corresponding paired cards
					document.getElementById("front_card"+id_value).style.visibility = paired_card_visbility[id_value];
					document.getElementById("txt_number"+id_value).style.visibility = paired_card_visbility[id_value];
			}
		}
		
		//Unfade table div for resuming game option
		document.getElementById("table_image_div").style.opacity = 1;
		
	}
	
}