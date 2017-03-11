
$(".heading_current_time_container").hide();
$(".heading_current_time_container").fadeIn(5000);

setInterval(function() {
	$(".current_time_s").html(getDate()); } , 1000);



 function getDate() {
 	
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	var res_current_time;

	if (minute < 10) {
		minute = '0'+ minute;
	}

	if (hour < 10) {
		hour = '0' + hour;
	}

	if (second < 10) {
		second = '0' + second;
	}

	return res_current_time = hour +':'+ minute+':'+ second; 
}