var number = Math.floor(Math.random() * 100) + 1;  // generate random #
var guess;
var guessCount = 0;
var correctGuess = false;
var diff;

var correct = false;
while (!correct) {
    correct = guessFunction();

}

function guessFunction(){

    guess = prompt('I am thinking of a number between 1 and 100. What is it?');
    guessCount += 1;

    var guessInt = parseInt(guess);  //turn guesses into interger

    if (guess == number){           //which number is bigger, guess or number
        alert('Correct!' + 'That was a total of ' + guessCount + ' guesses.');  
        correctGuess = true;
    } 
    else if (guessInt > number) {
        diff = guessInt - number;
    } 
    else if (guessInt < number) {
        diff = number - guessInt;
    }

    if (diff >= 1 && diff <= 10 && !correctGuess) {
        alert('Very Hot');
    } 
    else if (diff < 10 && diff <= 20 && !correctGuess){
        alert('Hot');
    } 
    else if (diff < 20 && diff <= 30 && !correctGuess){
        alert('Warm');
    } 
    else if (diff < 30 && diff <= 50 && !correctGuess){
        alert('Cold');
    } 
    else if (diff > 50 && !correctGuess){
        alert('Ice Cold');
    }

}
