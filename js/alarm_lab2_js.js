
$(".alarm_wrapping").hide();
$(".input_chack").hide();
$(".input_form").hide();
$(".dialog").hide();

$(".alarm_wrapping").fadeIn(500);



$(".set_button").click(function() {
	$( ".input_form" ).fadeIn(500);
	$(".set_button").hide();
	$(".reset_button").hide();
	$(".back_to_main").fadeIn(500);

 
;})


$(".ass").keyup(function(){
	$(".accept_alarm").fadeIn(500);
	$(".decline_alarm").fadeIn(500);
	$(".back_to_main").hide();
})

$(".reset_button").click(function(){
	setTimeout(function() {
		window.location.reload();}, 5);

})


$(".back_to_main").click(function() {
	$(".input_form").hide();
	$(".back_to_main").hide();
	$(".set_button").fadeIn(500);
	$(".reset_button").fadeIn(500);

})

$(".decline_alarm").click(function(){
	$(".input_form").hide();
	$(".set_button").fadeIn(500);
	$(".reset_button").fadeIn(500);
	$(".accept_alarm").hide();
	$(".decline_alarm").hide();
})


setInterval(function() {
	$(".current_time_s").html(getDate());

	$(".accept_alarm").click(function() {
		var alarmii = $(".ass").val();

		if(alarmii) {
			$(".alarted_text").append(alarmii);				
    		$(".input_form").html("I will call you at" +" "+ alarmii);
    		$(".back_to_main").fadeIn(500);
    		$(".accept_alarm").hide();
     		$(".decline_alarm").hide();
        }
        else{
        return false;
        }
	    });
	    
		var alarm_fin = $(".alarted_text").html();
		if (getDate() == alarm_fin) {
			alert("Get up, sweaty =_=");
			setTimeout(function() {window.location.reload();}, 5);

		} 

	}, 500);





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


