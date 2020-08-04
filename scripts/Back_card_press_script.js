//Javascript for HTML Pairs Game
//Function that triggers when any back of card image is pressed to show text number value


//Create the onclick event listeners for the back card images
var card_pressed = [];

function generateCardPressListeners(){
	for(var listener_row = 0; listener_row < rows; listener_row++){
		for(var listener_column = 0; listener_column < columns; listener_column++){
			id_value = listener_row*columns + listener_column;
			card_pressed[id_value] = document.getElementById("back_card"+id_value);
			card_pressed[id_value].addEventListener("click", pressBackCard);
		}
	}
}

//Variables for the pressBackCard function
var firstCardNumber, secondCardNumber;
var cardCounter = 0;
var img_pressed = [];
var img_txt_pressed = [];
var pairsNum = 0;
var turnsNum = 0;

function pressBackCard(){
	
	//Conditions of card back press as long as no more than two are pressed at once
	if(cardCounter < 2){
		id_val = this.id.substring(9,12);
		img_pressed[cardCounter] = document.getElementById("front_card"+id_val)
		img_txt_pressed[cardCounter] = document.getElementById("txt_number"+id_val)
		
		//Change the card to front facing and number visible
		img_pressed[cardCounter].style.visibility = "visible";
		img_txt_pressed[cardCounter].style.visibility = "visible";
		
		//Grab first number to match against second
		if(cardCounter == 0) {
			firstCardNumber = img_txt_pressed[cardCounter].innerHTML;
			cardCounter++;
			//alert("here");
		}
		
		//Grab second number to match against first
		else if(cardCounter == 1) {
			secondCardNumber = img_txt_pressed[cardCounter].innerHTML;
			cardCounter++;
		
			//If the cards do not match, hide both cards after a 2 second delay
			if(firstCardNumber != secondCardNumber){
				setTimeout(function(){
					img_pressed[0].style.visibility = "hidden";
					img_txt_pressed[0].style.visibility = "hidden";
					img_pressed[1].style.visibility = "hidden";
					img_txt_pressed[1].style.visibility = "hidden";
					cardCounter -= 2;
				}, 500); // 2 second delay
			} 
			else{
				//Pairs match so increase counter
				pairsNum++;
				document.getElementById("pairs_output").innerHTML = pairsNum + " Pairs";
				cardCounter -= 2
			}
			//After 2 cards are pressed that counts as a turn and results in the turn counter incrementing
			turnsNum++;
			document.getElementById("turn_output").innerHTML = turnsNum + " Turns";
			
			//Win Condition of matching all of the pairs
			if(pairsNum == (rows*columns/2)){
				document.getElementById("message").innerHTML = "Congrats you did it!";
				clearInterval(timer);
				start_pause_resume_btn.innerHTML = "Start";
				reset_btn.disabled = true;
			}
		}
	}
}