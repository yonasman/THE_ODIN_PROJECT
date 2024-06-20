// Pseudocode
// inputHandler function
// ****************************
// Define a function named inputHandler that takes user input as a parameter
// If the input is not number type:
//      alert("please enter valid number less than 100");
// Else if number is > 100:
//      alert("number should be equal or less than 100");
// Else:
//      return userInput;
// Update with slider

// gridGenerator function
// *****************************
// Define a function named gridGenerator that takes userInput
// Loop twice to generate n*n grid

// hoverHandler function
// *****************************
// Define a function named hoverHandler that takes even object as a parameter
// Attach a css class on hover

// CODE
// *********************************************
// gridGenerator function
// get the container to put divs
let container = document.getElementById("container");
function gridGenerator() {
    let slider = document.getElementById("resolution");
    let squares = slider.value;
    // clear content of container
    container.innerHTML = "";
    for(let i = 0;i < squares;i++) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row");
        for(let j = 0;j < squares;j++) {
            let div = document.createElement("div");
            div.classList.add("square");
            rowContainer.append(div);
        }
        container.appendChild(rowContainer);
    }
}
gridGenerator();
// function handling submit user input
// get submit btn
let form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    gridGenerator();
}
);
// mouse effect function
let opacity = 0.0015;
function mouseEffect(e) {
    // get color picker
    let color = document.getElementById("colorPicker");
    let colorValue = color.value.slice(1);
    // get colors for rgb using slicing
    let rValue = colorValue.slice(0,2);
    let gValue = colorValue.slice(2,4);
    let bValue = colorValue.slice(4,);

    // converting the color values to their hexadecimal equivalent
    let rHex = parseInt(rValue, 16);
    let gHex = parseInt(gValue, 16);
    let bHex = parseInt(bValue, 16);
    let div = e.target;
    // check and reset the opacity
    if(!div.hasAttribute('data-opacity')) {
        // reset opacity
        opacity = 0.002;
        div.setAttribute("data-opacity","0.005");
    } 

    let currentOpacity = parseFloat(div.getAttribute("data-opacity"));
    currentOpacity += 0.002;
    div.setAttribute("data-opacity",currentOpacity);
    div.style.backgroundColor = `rgba(${rHex}, ${gHex}, ${bHex}, ${currentOpacity})`
}

// clear gid function
// // get the borerOff class to toggle
// let borderOff = document.getElementById()
function clearGrid() {
    let squares = container.querySelectorAll('.square');
    let squaresToRemoveBorder = Array.from(squares);

    squaresToRemoveBorder.forEach((square) => {
        square.classList.toggle("borderOff");
    });
}
// get clear button
let clear = document.getElementById('clearBtn');
clear.addEventListener("click", clearGrid);

container.addEventListener("mousemove",(e) => {
    mouseEffect(e);
})