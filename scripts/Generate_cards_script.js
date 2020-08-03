//Javascript for HTML Pairs Game
//Initial setup of cards on table before game starts

//TODO:
//Currently the function just loads on the page at load, I want to change it so that the function is called on start press
//window.addEventListener("load", initiate_cards(5,10));

function initiate_cards (rows, columns){
	
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
				
				//Create the image and text instances for front and back card image
				img = document.createElement('img');
				txt = document.createElement('span'); //Will contain the number to match the pairs
				
				//Set image variables of cards depending on position on table
				img_left_val = 10 + (img_width+1)*column;
				img_top_val = 7.5 + (img_height+1)*row;
				id_value = row*columns + column;
				img.style = "position:absolute; top: " + img_top_val + "%; left: " + img_left_val + "% ;width: " + img_width + "%; height:auto; max-width:100px; max-height:200px;";
				
				
				
				//Conditions for back of card image
				if(front_back == 0){
					img.src = "images/card_back.svg";
					img.id = "back_card"+id_value;
					//img.style.visibility = "hidden";
				}
				
				//Conditions for front of card image
				else if(front_back == 1){
					img.src = "images/card_front.svg";
					img.id = "front_card"+id_value;
					img.style.visibility = "hidden";
					
					//Number to match on card front image
					text_index = Math.floor(Math.random() * number_range.length);
					number_value = number_range[text_index];
					number_range.splice(text_index,1); //Removes this value from the range so it can't repeat
					
					//if(column == 1) alert(number_value);
					txt.innerHTML = number_value;
					txt.id = "txt_number"+id_value;
					
					//Set text variables of cards depending on position on table and number of digits
					if(number_value < 10) txt_left_val = img_left_val + 2.5;
					else txt_left_val = img_left_val + 1.9;
					txt_top_val = img_top_val + 5;
					txt.style = "position:absolute; top:" + txt_top_val + "%; left:" + txt_left_val + "% ;width: 5%; height:auto; ";
					
					
				}
				
				//Add card image to the table area div
				document.getElementById('table_image_div').insertBefore(img,null);
				
				//Add card text to the table area div after images
				if(front_back == 1) document.getElementById('table_image_div').insertBefore(txt,null);
			}
		}
	}
}