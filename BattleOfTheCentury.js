/*
	Battle of the Century
	---------------------------------------
	The time has come for the most anticipated boxing match of
	the 21st century. 

	Fat Ronald vs Skinny Joe!

	Fat Ronald hits like a truck, but he has little in the way of speed
	and accuracy.

	Skinny Joe doesn't have much meat on his bones, but his boxing
	skills are top notch and he can get in and out quickly.

	== INSTRUCTIONS ==
	Design a game that allows Fat Ronald and Skinny Joe to duke it out!

	Fat Ronald lands his punches 25% of the time, but he hits for 2 HP
	Skinny Joe lands his punches 50% of the time, but he hits for 1 HP

	Once one of their HP's reaches 0 you should stop the game a declare a winner!

	Be sure to add some fun commentary when they land a punch or miss.

	== HINT == 
	getRandom returns a random number between the min and max inclusive.
	so for getRandom(1, 2) it could return either a 1 or a 2
*/

var joeHP = 4;
var ronaldHP = 4;
var game = true;

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//Has to type 'exit' a total of four times for game to exit.
function fight() {
    var joeRand1, joeRand2, ronaldRand, joeInput, ronaldInput;
    joeRand1 = getRandom(1, 2);
    joeRand2 = getRandom(3, 4);
    ronaldRand = getRandom(1, 4);

      do {
        joeInput = prompt("Enter Joe's punch number!");

    } while (!(joeInput == "1" || joeInput == "2" || joeInput == "3" || joeInput == "4" || joeInput == "exit"));

         do {
        ronaldInput = prompt("Enter Ronald's punch number!");

    } while (!(ronaldInput == "1" || ronaldInput == "2" || ronaldInput == "3" || ronaldInput == "4" || ronaldInput == "exit"));
    if (joeInput == "exit" || ronaldInput == "exit"){
    	return false;
    }


    if (joeRand1 == joeInput || joeRand2 == joeInput) {
        ronaldHP -= 1;
        console.log("Joe Throws a Jab..."); //hit
    } else {
        console.log("Joe wiffs the impossibly hard to miss Fat Ronald!"); //miss
    }
    if (ronaldInput == ronaldRand) {
        joeHP -= 2;
        console.log("Here comes Fat Ronald..."); //hit
    } else {
        console.log("Fat Ronlad rolls past Nimle Joe!"); //miiss
    }
    // Round Recap
    console.log("After that round Joe's HP is at " + joeHP + " and Ronald's is at " + ronaldHP + "\n\n");
    if (joeHP == 0 || ronaldHP == 0) {
        return false;
    }
    // Keep the loop going
    return true;
}
alert("Welcome to the Battle of the Century!\nEnter a number between 1-4 for each player to fight!\n\n To exit, type 'exit' at least one and up to twice :)");
var gameLoop = setInterval(function() {
    if (!fight()) {
        clearInterval(gameLoop); // clears the interval and stops the game
        if (joeHP == 0) {
            console.log("\n\nFat Ronld rolls over Joe's body in triumph!");
        } else if (ronaldHP == 0) {
            console.log("\n\nJoe pops Fat Ronald like a balloon!");
        }else{
        	console.log("you have exited the game.");
        }
    } else {
        fight();
    }
}, 1000); //pauses the loop for 1 second and then reruns
