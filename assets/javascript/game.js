


$(document).ready(function() {

var targetNumberOptions = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,116, 117, 118, 119, 120];
var targetIncrement = targetNumberOptions[Math.floor(Math.random())];
var counter = 0;
var targetNumber = 0;
var userScore = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var increment = numberOptions[Math.floor(Math.random() * numberOptions.length)];




	$(".btn1").on("click", function() {
	var increment = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	alert("Your score: " + increment);

	document.getElementById("#userTotal").innerHTML = btnOneValue;
	
	

});


	$(".btn2").on("click", function() {
	var increment = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	alert("Your score: " + increment);
	


});
	


	$(".btn3").on("click", function() {
	var increment = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	alert("Your score: " + increment);

});



	$(".btn4").on("click", function() {
	var increment = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	alert("Your score: " + increment);
});


});	



	

	



