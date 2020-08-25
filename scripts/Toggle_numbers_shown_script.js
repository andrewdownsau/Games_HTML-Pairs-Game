//Javascript for HTML Pairs Game
//Function used to toggle the visibility of all number values

//Listener for checked box event for toggle
var number_checkbox = document.getElementById("number_toggle").addEventListener("change", show_hide_numbers);
var default_number_state;

//Show or hide numbers that aren't paired (paired numbers should always be shown)
function show_hide_numbers() {
	
	
	//If the toggle is changed to checked show all numbers by changing the opacity of the back of card images
	if(this.checked){
		for(var number_row = 0; number_row < rows; number_row++){
			for(var number_column = 0; number_column < columns; number_column++){
				id_value = number_row*columns + number_column;
				document.getElementById("back_card"+id_value).style.opacity = 0.5;
			}
		}
	}
	
	//If the toggle is changed to unchecked, set opacity to default values
	else if(this.checked == false){
		for(var number_row = 0; number_row < rows; number_row++){
			for(var number_column = 0; number_column < columns; number_column++){
				id_value = number_row*columns + number_column;
				document.getElementById("back_card"+id_value).style.opacity = 1;
			}
		}	
	}
	
	
}