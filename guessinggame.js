var computerChoice = Math.floor(Math.random() * 100) + 1;
var guess = prompt("chose a number between 1 and 100");
var totalGuesses = 0;
		
totalGuesses++;
guess = Number(guess);
	
if (guess <= computerChoice + 10 || guess >= computerChoice + 10) {
	alert ("Getting warm! "+"That's" + totalGuesses + " guesses.");
	    
} else if (guess === computerChoice) {
    alert ("You got it! " + " That was " + 
	      totalGuesses + " guesses.");     
} else {
	alert ("Your cold, keep trying");
}
