var num = Math.floor(Math.random() * 10) + 1;  // generate random #
var guess;
var guessCount = 0;
var correctGuess = false;
var diff;

guess = prompt('I am thinking of a number between 1 and 10. What is it?');
guessCount += 1;
if (parseInt(guess) === num) {
correctGuess = true;

function hint() {
var guessInt = parseInt(guess);  //turn guesses into interger

if (guess == num){			//which number is bigger, guess or number
	alert(“Correct!”);
} else if (guessInt > number) {
diff = guessInt – number;
} else if (guessInt < number) {
diff = number – guessInt;
}

if (diff >= 1 && diff <= 10) {
	alert(“Very Hot”);
} else if (diff < 10 && diff <= 20){
	alert(“Hot”);
} else if (diff < 20 && diff <= 30){
	alert(“Warm”);
} else if (diff < 30 && diff <= 50){
	alert(“Cold”);
} else if ( diff > 50){
	alert(“Ice Cold”);
}	
	 }
