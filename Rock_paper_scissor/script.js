// pseudocode for getComputerChoice function
// *****************************************
// Define a function named getComputerChoice
// Set a variable named choices that store a array of rock
// paper, and scissors
// Set a variable choice to Math.floor(Math.random() * 3);
// return choice at random index

// function
// *************************
function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

//Pseudocode for getHumanChoice function
// *************************************
// Get user input for three valid choices and store it in a variable userChoice
// Define a function named getHumanChoice that takes userChoice as a parameter
// IF the user input is capital:
//      convert it to lower case
// ENDIF
// Return userChoice

// function
// *****************************

function getHumanChoice(userChoice) {
    if(userChoice == null) {
        alert("You exit the game.")
        console.log("You exit the game");
    }
    userChoice = userChoice.toLowerCase();
    if(userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        alert("Please enter only the three valid choices!")
        console.log("Please enter only the three valid choices!");
    }
    return userChoice;
}


// player round function
// Pseudocode
// *********************
// Define a function that takes the computer and human choices as a parameter
// IF humanChoice == computerChoice:
//      console.log("It's a draw. Let's play again");
// ELSE IF humanChoice == rock and computerChoice == scissors:
//      console.log("You won!. Rock beats scissors")
//      humanScore++
// ELSE IF humanChoice == scissors and computerChoice == rock:
//      console.log("You lose!. Rock beats scissors")
//      computerScore++
// ELSE IF humanChoice == scissors and computerChoice == paper:
//      console.log("You won!. scissors beats papper.")
//      humanScore++
// ELSE IF humanChoice == paper and computerChoice == scissors:
//      console.log("You lose!. scissors beats paper.")
//      computerScore++
// ELSE IF humanChoice == paper and computerChoice == rock:
//      console.log("You won!. Paper beats Rock")
//      humanChoice++
// ELSE IF humanChoice == rock and computerChoice == paper:
//      console.log("You lose!. Paper beats Rock.")

// function
// ***********************
// variables to store the players game
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log("It's a draw.");
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You won!. Rock beats scissors");
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!. Rock beats scissors");
        computerScore++;    
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You won!. scissors beats papper.");
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose!. scissors beats paper.");
        computerScore++;       
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You won!. Paper beats Rock");
        humanScore++;
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose!. Paper beats Rock.");
        computerScore++;
    }

}
// function play game
// Pseudocode
// ***********************************
// Define a function named playGame that takes function playRound as a parameter
// Loop 5 times and print the result
function playGame(playRound) {
    for(let i = 0; i < 5;i++) {
        let userChoice = prompt("Enter your choice to start the game: ","Rock, Paper, or scissors");
        playRound(getHumanChoice(userChoice),getComputerChoice());
    }
    console.log(`You won ${humanScore} times!`);
    console.log(`Computer won ${computerScore} times`);
    if(humanScore > computerScore) {
        console.log(`You won him With total score of ${humanScore}`);
    } else if(computerScore > humanScore) {
        console.log(`The computer won you with total score of ${computerScore}`);
    } else {
        console.log(`Both scored the same score ${humanScore}`);
    }
}
playGame(playRound)