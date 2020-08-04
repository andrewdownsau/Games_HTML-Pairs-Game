//Javascript for HTML Pairs Game
//Function used to toggle the visibility of all number values

//Listener for checked box event for toggle
var number_checkbox = document.getElementById("number_toggle").addEventListener("change", show_hide_numbers);
var default_number_state;

//Show or hide numbers that aren't paired (paired numbers should always be shown)
function show_hide_numbers() {
	
	
	//If the toggle is changed to checked show all numbers
	if(this.checked){
		for(var number_row = 0; number_row < rows; number_row++){
			for(var number_column = 0; number_column < columns; number_column++){
				id_value = number_row*columns + number_column;
				document.getElementById("txt_number"+id_value).style.visibility = "visible";
			}
		}
	}
	
	//If the toggle is changed to unchecked, set number visibility to default values
	else if(this.checked == false){
		for(var number_row = 0; number_row < rows; number_row++){
			for(var number_column = 0; number_column < columns; number_column++){
				id_value = number_row*columns + number_column;
				default_number_state = document.getElementById("front_card"+id_value).style.visibility;
				document.getElementById("txt_number"+id_value).style.visibility = default_number_state;
			}
		}	
	}
	
	
}