/*
	Hangman
	---------------------------------------
	Let's make Hangman! Some code is already provided for printing
	a simple man as you guess wrong. Using the printHangman(count)
	function, add the code the print the man as someone gets
	wrong answers as well as the logic for the game.

	THIS ONE MUST BE DONE USING JSFIDDLE SINCE PROMPT IS USED.

	It would be helpful to write a command that allows you to stop 
	the game incase someone wants to quit.

	Your game wont be perfect but do your best!

	HINT: What type of conditional would be best for implementing
	the printHangman function? 
*/

function printHangman(count) {
    var man = "Wrong Guess \n";
    var head = " ( ) \n";
    var arms = " \\|/\n";
    var belly = "  |\n";
    var legs = " / \\";
    switch (count) {
        case 1:
            break;
        case 2:
            man = head;
            break;
        case 3:
            man = head + arms;
            break;
        case 4:
            man = head + arms + belly;
            break;
        case 5:
            man = head + arms + belly + legs;
            break;
    }
    alert(man);
}

function isWin(guess, answer) {
    if (guess.length != answer.length) {
        return false;
    } else {
        for (var i = 0; i < answer.length; i++) {
            if (guess[i] != answer[i]) {
                return false;
            }
        }
        return true;
    }
}

var game = true;
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

while (game) {
    if (start == undefined) {
        var count = 0;
        var win = 0;
        var guessedArr = [];
        var word = prompt("Pick a word!");
        var wordLength = word.length;
        var wordArr = word.split("");
    }
    var guess = prompt("Pick a letter! \nType 'exit' to exit!");
    var start = true;
    var goodGuess = false;


    //valiadation check here
    if (alphabet.indexOf(guess) > -1 && guess != "exit" && guess !="") {
        for (var i = 0; i < wordLength; i++) {
            if (guess == wordArr[i]) {
                guessedArr[i] = guess;
                goodGuess = true;
            }
        }
        if (!goodGuess) {
            count++;
            printHangman(count);
        } else {
            alert("That was a good guess!");
        }
        if (count == 5) {
            alert("You loose!");
            guess = "exit";
        }

        if (isWin(guessedArr, wordArr)) {
            alert("Yay you ween!");
            game = false;
        }
    } else if (guess == "exit") {
        game = false;
    }else{
     alert("That is not a valid guess. Try again!");   
    }
}
