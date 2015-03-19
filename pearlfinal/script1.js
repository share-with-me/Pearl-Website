var i = 0;
var classname = ["first","second"];

$(document).ready(function(){
	myVar = setInterval(function(){classChange()}, 500);
		function classChange() {
			$("#loader").attr("class", classname[i]);
				if (i == 1){
					i = 0;
				} else {
					i++;
				}
		} 
 });