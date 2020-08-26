//Javascript for HTML Pairs Game
//Function that triggers when the start/pause/resume button is pressed

//Set variable for the button pressed and create an event listener for click events
var start_pause_resume_btn = document.getElementById("start_pause_btn");
start_pause_resume_btn.addEventListener("click", pressMainButton);
var reset_btn = document.getElementById("reset_btn");
reset_btn.addEventListener("click", pressSecondaryButton);

//Array to retain values of cards already paired
var paired_card_visbility = [];
var paired_card_number_visbility = [];
var faded_row, faded_column;

function pressMainButton(){
	
	//The button value variable determines whether the button functions as a start, pause or resume button
	var btn1_value = start_pause_resume_btn.innerHTML;
	
	//The button value of reset button
	var btn2_value = reset_btn.innerHTML;
	
	
	//Function of Start or Reset
	if(btn1_value == "Start"){
		//Clear the game in case there already was one previously
		if(document.getElementById("message").innerHTML == "Congrats you did it!") clearGame();
		
		initiateGame();
	}
	
	else if(btn1_value == "Pause"){
		
		//Set button value to Resume
		start_pause_resume_btn.innerHTML = "Resume";
		
		//Pause Timer interval ticks
		clearInterval(timer);
		
		//Flip cards to all face their back to avoid cheating
		for(faded_row = 0; faded_row < rows; faded_row++){
			for(faded_column = 0; faded_column < columns; faded_column++){
					id_value = faded_row*columns + faded_column;
					
					//Archive current visibility states so that resume brings game to original position
					paired_card_visbility[id_value] = document.getElementById("back_card"+id_value).style.visibility;
					
					//Makes only the back of cards visible (number toggle is disabled)
					document.getElementById("back_card"+id_value).style.opacity = 1;
					document.getElementById("back_card"+id_value).style.visibility = "visible";
					number_toggle.disabled = true;
			}
		}
		//Fade the table div to show that the game has been paused
		document.getElementById("table_image_div").style.opacity = 0.5;
		
	}
	
	else if(btn1_value == "Resume"){
		//Set button value to Pause
		start_pause_resume_btn.innerHTML = "Pause";
		
		//Start Timer with interval 1000ms
		timer = setInterval(timerOn,1000);
		
		//Flip cards that are paired back to front facing
		for(faded_row = 0; faded_row < rows; faded_row++){
			for(faded_column = 0; faded_column < columns; faded_column++){
					id_value = faded_row*columns + faded_column;
					
					//Matches the archived visibility values and assigns them to the corresponding paired cards
					document.getElementById("back_card"+id_value).style.visibility = paired_card_visbility[id_value];
					if(number_toggle.checked) document.getElementById("back_card"+id_value).style.opacity = 0.5;
					
					//Number toggle can again be used now the game is active
					number_toggle.disabled = false;
			}
		}
		
		//Unfade table div for resuming game option
		document.getElementById("table_image_div").style.opacity = 1;
		
	}
	
}

//Reset Button Functionality
function pressSecondaryButton(){
	clearGame();
	initiateGame();
}


function initiateGame(){
	//Set button value to Pause
	start_pause_resume_btn.innerHTML = "Pause";
	
	//Start Timer with interval 1000ms
	timer = setInterval(timerOn,1000);
	
	//Start button triggers cards to be generated on game table
	initiate_cards();
	setTimeout(generateCardDefaults, 200);

	//Game can be reset and numbers can be toggled whenever active
	reset_btn.disabled = false;
	number_toggle.disabled = false;
}

function clearGame(){
	//Clear any previous timers that may be running before reset
	clearInterval(timer);
	
	//Unfade table div for resuming game option
	document.getElementById("table_image_div").style.opacity = 1;
	
	//Reset the show_number_toggle checkbox to unchecked
	document.getElementById("number_toggle").checked = false;
	
	//Remove all previous images and text generated
	for(var row = 0; row < rows; row++){
		for(var column = 0; column < columns; column++){
			id_value = row*columns + column;
			back_card_img[id_value].parentNode.removeChild( back_card_img[id_value] );
			front_card_img[id_value].parentNode.removeChild( front_card_img[id_value] );
			front_card_text[id_value].parentNode.removeChild( front_card_text[id_value] );
		}
	}
	
	//Clear previous messages and counters (if win condition or reset pressed)
	second_output = 0;
	minute_output = 0;
	document.getElementById("timer_output").innerHTML = "00:00";
	document.getElementById("message").innerHTML = "";
	pairsNum=0;
	document.getElementById("pairs_output").innerHTML = pairsNum;
	turnsNum=0;
	document.getElementById("turn_output").innerHTML = turnsNum;
}