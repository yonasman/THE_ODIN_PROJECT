let result = document.getElementById("result");
let answer = document.getElementById("answer");
let total = document.getElementById("total");
let playAgain = document.getElementById("play-text");
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
    answer.style.color = "";
    if(humanChoice == computerChoice) {
        // console.log("It's a draw.");
        answer.textContent = "It's a draw.";
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        // console.log("You won!. Rock beats scissors");
        answer.textContent = "You won! Rock beats scissors";
        answer.style.color = "green";
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        // console.log("You lose!. Rock beats scissors");
        answer.textContent = "You lose! Rock beats scissors";
        answer.style.color = "red";
        computerScore++;    
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        // console.log("You won!. scissors beats papper.");
        answer.textContent = "You won! scissors beats papper.";
        answer.style.color = "green";
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        // console.log("You lose!. scissors beats paper.");
        answer.textContent = "You lose!. scissors beats paper.";
        answer.style.color = "red";
        computerScore++;       
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        // console.log("You won!. Paper beats Rock");
        answer.textContent = "You won!. Paper beats Rock";
        answer.style.color = "green";
        humanScore++;
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        // console.log("You lose!. Paper beats Rock.");
        answer.textContent = "You lose!. Paper beats Rock.";
        answer.style.color = "red";
        computerScore++;
    }

}
// function play game
// Pseudocode
// ***********************************
// Define a function named playGame that takes function playRound as a parameter
// Loop 5 times and print the result
let clickCount = 0;
function playGame(e) {
    let userChoice = e.target.value;
    clickCount++;
    total.textContent = "";
    playAgain.textContent = "";
    playRound(getHumanChoice(userChoice),getComputerChoice());
    if(clickCount > 5) {
        if(humanScore > computerScore) {
        // console.log(`You won him With total score of ${humanScore}`);
        total.textContent = `You won the computer With total score of ${humanScore}.`;
        total.style.color = "green";
        } else if(computerScore > humanScore) {
        // console.log(`The computer won you with total score of ${computerScore}`);
        total.textContent = `The computer won you with total score of ${computerScore}.`;
        total.style.color = "red";
        } else if(humanScore == computerScore) {
        // console.log(`Both scored the same score ${humanScore}`);
        total.textContent = `It's a draw with score of ${humanScore}.`
        total.style.color = "black";
        }
        humanScore = 0;
        computerScore = 0;
        clickCount = 0
        playAgain.textContent = "Let's play it Again."
        answer.textContent = "";
    }
}
// playGame(playRound)
let buttons = document.getElementById("buttons");
buttons.addEventListener("click",playGame);