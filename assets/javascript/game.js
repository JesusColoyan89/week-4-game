


$(document).ready(function() {

var targetNumberOptions = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,116, 117, 118, 119, 120];
var targetIncrement = targetNumberOptions[Math.floor(Math.random() * targetNumberOptions.length)];
var counter = 0;
var targetNumber = 0;
var userScore = $("#user-score");
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var increment1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
var increment2 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
var increment3 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
var increment4 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
var total = 0;


	$("#numberToGuess").text("Number to guess: " + targetIncrement);


	$(".btn1").on("click", function() {
	
	total = total + increment1;
	
	$("#userTotal").text("Your total score is: " + total)
	if (total === targetIncrement) {
		alert("Whoa, We've got a badass over here!!");
		location.reload();
	}
	else if (total > targetIncrement) {
		alert("Wow, you profoundly suck!!");
		location.reload();
	}


});


	$(".btn2").on("click", function() {
	
	total = total + increment2;
	
	$("#userTotal").text("Your total score is: " + total)
	if (total === targetIncrement) {
		alert("Whoa, We've got a badass over here!!");
		location.reload();
	}
	else if (total > targetIncrement) {
		alert("Wow, you profoundly suck!!");
		location.reload();
	}

		
	
	


});
	


	$(".btn3").on("click", function() {
	
	total = total + increment3;
	
	$("#userTotal").text("Your total score is: " + total)
	if (total === targetIncrement) {
		alert("Whoa, We've got a badass over here!!");
		location.reload();
	}
	else if (total > targetIncrement) {
		alert("Wow, you profoundly suck!!");
		location.reload();
	}
	
	

});



	$(".btn4").on("click", function() {
	
	total = total + increment4;
	
	$("#userTotal").text("Your total score is: " + total)
	
	if (total === targetIncrement) {
		alert("Whoa, We've got a badass over here!!");
		location.reload();
	}
	else if (total > targetIncrement) {
		alert("Wow, you profoundly suck!!");
		location.reload();
	}

});

	

	});
	



	

	



