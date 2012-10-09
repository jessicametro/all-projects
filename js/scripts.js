$(document).ready(function() {

	$("#projects .tile").hover(function() {
		$(this).find(".hover").fadeIn(300);
		console.log("hover");
	}, function () {
		$(this).find(".hover").fadeOut(300);
		console.log("hover");
	});
	
	

});