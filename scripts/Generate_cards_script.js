//Javascript for HTML Pairs Game
//Initial setup of cards on table before game starts


//The number of rows and colums are defined here as a global variable that many functions in the program use
var rows = 5;
var columns = 10;

//Image and text array generated through function
var back_card_img = [];
var front_card_img = [];
var front_card_text = [];

function initiate_cards(){
	
	//Image variables of cards that remain constant
	var img_width = 7;
	var img_height = 16;
	
	//Number Text Variable declarations
	var number_range = [], range_index, half_way_index, txt_left_val, txt_top_val, text_index, number_value;
	
	//Image variables declarations
	var img_left_val, img_top_val, id_value;
	
	
	//Create the random matrix of values depending on the number of rows and columns
	for(var range_row = 0; range_row < rows; range_row++){
		for(var range_column = 0; range_column < columns; range_column++){
			
			range_index = range_row*columns + range_column;
			half_way_index = rows*columns/2;
			
			//For the pairs they must repeat so start numbers again once half-way point is reached
			if(range_index < (half_way_index)) number_range[range_index] = range_index+1;
			else number_range[range_index] = range_index - (half_way_index)+1;
		}
	}
	
	
	//Card Image and number assignment Generator
	for(var front_back = 0; front_back < 2; front_back++){
		
		for(var row = 0; row < rows; row++){
			for(var column = 0; column < columns; column++){
				id_value = row*columns + column;
				
				//Set image variables of cards depending on position on table
				img_left_val = 10 + (img_width+1)*column;
				img_top_val = 7.5 + (img_height+1)*row;
				
				
				
				
				
				//Conditions for back of card image
				if(front_back == 0){
					
					//Create the image instances for back card image
					back_card_img[id_value] = document.createElement('img');
					back_card_img[id_value].style = "position:absolute; top: " + img_top_val + "%; left: " + img_left_val + "% ;width: " + img_width + "%; height:auto; max-width:100px; max-height:200px;";
					
					back_card_img[id_value].src = "images/card_back.svg";
					back_card_img[id_value].id = "back_card"+id_value;
					back_card_img[id_value].style.cursor = "pointer";
					//back_card_img.onclick = pressBackCard;
					//back_card_img.style.visibility = "hidden";
					
					
					//Add card image to the table area div
					document.getElementById('table_image_div').insertBefore(back_card_img[id_value],null);
				}
				
				
				//Conditions for front of card image
				else if(front_back == 1){
					//Create the image and text instances for front and back card image
					front_card_img[id_value] = document.createElement('img');
					front_card_text[id_value] = document.createElement('span'); //Will contain the number to match the pairs
					front_card_img[id_value].style = "position:absolute; top: " + img_top_val + "%; left: " + img_left_val + "% ;width: " + img_width + "%; height:auto; max-width:100px; max-height:200px;";
					
					front_card_img[id_value].src = "images/card_front.svg";
					front_card_img[id_value].id = "front_card"+id_value;
					front_card_img[id_value].style.visibility = "hidden";
					
					//Number to match on card front image
					text_index = Math.floor(Math.random() * number_range.length);
					number_value = number_range[text_index];
					number_range.splice(text_index,1); //Removes this value from the range so it can't repeat
					front_card_text[id_value].innerHTML = number_value;
					front_card_text[id_value].id = "txt_number"+id_value;
					
					//Set text variables of cards depending on position on table and number of digits
					if(number_value < 10) txt_left_val = img_left_val + 2.5;
					else txt_left_val = img_left_val + 1.9;
					txt_top_val = img_top_val + 5;
					front_card_text[id_value].style = "position:absolute; top:" + txt_top_val + "%; left:" + txt_left_val + "% ;width: 5%; height:auto; ";
					front_card_text[id_value].style.visibility = "hidden";
					
					
					//Add card image to the table area div
					document.getElementById('table_image_div').insertBefore(front_card_img[id_value],null);
					
					//Add card text to the table area div after images
					document.getElementById('table_image_div').insertBefore(front_card_text[id_value],null);
				}
				
			}
		}
	}
}