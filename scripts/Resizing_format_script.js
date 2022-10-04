//Javascript for HTML Pairs Game
//Font resize method that limits the font size to a maximum value when window width exceeds game table width

document.getElementsByTagName("BODY")[0].onresize = function() {fontController()};

var max_table_width = 1400;

function fontController() {
	if(cards_generated == 1){
		for(j=0;j<5;j++){
			for(i=0;i<10;i++){
				id_val = j*10+i;
				var img_table_width = document.getElementById("table_image").offsetWidth;
				var txt_num = document.getElementById("txt_number"+id_val);
				txt_num.style.fontSize = img_table_width >= max_table_width ? "42px" : "3vw";
			}
		}
	}
}