/**
 * 
 * @param  {...any} args 
 * @returns 
 */

// calculator
// ******************************
// functions for calculator
// sum
function sum(...args) {
    let answer = args.reduce((result,current) => result += current,0)
    return answer;
}

// subtract
function subtract(...args) {
    let answer = args.reduce((result,current) => result - current);
    return answer;
}

// multiple
function multiply(...args) {
    let answer = args.reduce((result, current) => result *= current)
    return answer;
}

// divide
function division(...args) {
    let answer = args.reduce((result, current) =>
        {
            if(current === 0) {
                return "Can't divide by zero";
            } else {
                return result / current;
            }
        });
    return answer;
}

// inverse
function inverse(arg) {
    if(arg === 0) {
        return "Can't divide by zero";
    } else {
        return 1 / arg;
    }
}

// square
function square(num) {
    return num ** 2;
}

// square root
function squareRoot(num) {
    return Math.sqrt(num);
}

// function percent
function percent(num) {
    return num / 100;
}

// operate function
function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator) {
        case "+":
            return sum(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return division(num1, num2);
        case "1/x":
            return inverse(num1);
        case "x^2":
            return square(num1);
        case "%":
            return percent(num1, num2);
        case "sqrt":
            return squareRoot(num1);
        default:
            return "Nothing to operate";
    }
}

// variables to store values
let firstOperand = "";
let secondOperand = "";
let  currentOperator = "";
let result = 0;

// display elements
let priDisplay = document.querySelector(".primary-display");
let secDisplay = document.querySelector(".secondary-display");
let buttons = document.querySelectorAll(".btn");

// listening to buttons
buttons.forEach(button => button.addEventListener("click", function(e) {
    let value = e.target.value;

    // switch to target button
    switch(value) {
            case "C":
                clearCalculator();
                break;
            case "+":
            case "-":
            case "x":
            case "/":
                handleOperator(value);
                break;
            case "=":
                calculateResult();
                break;
            case "+/-":
                handleOperator(value);
                handleNegation();
                handleUnaryOperator(value);
                break;
            case "1/x":
                handleUnaryOperator(value);
                handleUnaryOperation(value);
                break;
            case "%":
                handleUnaryOperation(value);
                break;
            case "x^2":
                handleUnaryOperator(value);
                handleUnaryOperation(value);
                break;
            case "sqrt":
                handleUnaryOperator(value);
                handleUnaryOperation(value);
                break;
            case ".":
                handleDecimal(value);
                break;
            case "BS":
                handleBackSpace();
                break;
            case "CE":
                clearEntry();
                break;
            default:
                handleNumber(value);
                break;
    }
}))

// handle operator
function handleOperator(operator) {
    if(firstOperand !== "" && secondOperand === "") {
        currentOperator = operator;
        updatePrimaryDisplay(`${firstOperand} ${operator} ${secondOperand}`);
    } else if(firstOperand !== "" && secondOperand !== "") {
        currentOperator = operator;
        calculateResult();
        updatePrimaryDisplay(`${result} ${operator}`);
    }
}

// handling unary operation
function handleUnaryOperation(operator) {
    if(!result) {
        result = operate(firstOperand,null,operator);
    } else {
        result = operate(result, null,operator);
    }
    updateSecondaryDisplay(result);
}
// Initialize a counter for nesting
let sqrCounter = 0;
let sqrtCounter = 0;

// handling unary operators
let updatedDisplay = "";
function handleUnaryOperator(operator) {
    switch(operator) {
        case "1/x":
            updatePrimaryDisplay(`1 /(${firstOperand})`);
            break;
        case "x^2":
            sqrCounter++;
            updatedDisplay = nestFunction("sqr",firstOperand,sqrCounter);
            updatePrimaryDisplay(updatedDisplay);
            updatePadding();
            break;
        case "sqrt":
            sqrtCounter++;
            updatedDisplay = nestFunction("sqrt",firstOperand,sqrtCounter);
            updatePrimaryDisplay(updatedDisplay);
            updatePadding();
            break;
        case "+/-":
            updatePrimaryDisplay("");
            break;
    }
}

// nesting function
let nested = "";
function nestFunction(func, operand, counter) {
    nested = operand.toString(); 
    for(let i = 0; i < counter;i++) {
        nested = `${func}(${nested})`;
    }
    return nested;
}
// decreasing padding 
let baseLeftPadding = 95;
let paddingDecreasingFactor = 1;
let decreaseAmount = 7;
function updatePadding() {
   currentPadding = (baseLeftPadding - (decreaseAmount * paddingDecreasingFactor)) + "px";
    priDisplay.style.paddingLeft = currentPadding;
    paddingDecreasingFactor += 1.8;
}
// handling negation
function handleNegation() {
    firstOperand = -1 * firstOperand;
    updateSecondaryDisplay(firstOperand);
}
// removing commas
function removeCommas(number) {
    // Remove commas for proper calculations
    return number.replace(/,/g, '');
}

// number format
function formatNumberWithComma(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// handle numbers
function handleNumber(number) {
    if(currentOperator === "") {
        firstOperand = removeCommas(firstOperand);
        firstOperand += number;
        firstOperand = formatNumberWithComma(firstOperand);
        updateSecondaryDisplay(firstOperand);
    } else {
        secondOperand += number;
        updateSecondaryDisplay(secondOperand);
    }
}

// calculate the result
function calculateResult() {
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);

    switch(currentOperator) {
        case "+":
            result = operate(num1, num2, "+");
            break;
        case "-":
            result = operate(num1, num2, "-");
            break;
        case "x":
            result = operate(num1, num2, "x");
            break;
        case "/":
            result = operate(num1, num2, "/");
            break;
        default:
            result = firstOperand;
            break;
    }
    updateSecondaryDisplay(result);
    firstOperand = result.toString();
    secondOperand = "";
    currentOperator = "";
}

// clearing the display
function clearCalculator() {
    firstOperand = "";
    secondOperand = "";
    currentOperator = "";
    result = 0;
    nested = "";
    sqrCounter = 0;
    sqrtCounter = 0;
    baseLeftPadding = 90;
    paddingDecreasingFactor = 1;
    decreaseAmount = 7;
    updatePrimaryDisplay("");
    updateSecondaryDisplay("0");
}

// clearing the entry
function clearEntry() {
    firstOperand = "";
    secondOperand = "";
    updateSecondaryDisplay("0");
}

// handling backspace
function handleBackSpace() {
    if(result) {
        return;
    } else if(currentOperator) {
        secondOperand = removeCommas(secondOperand);
        secondOperand = secondOperand.slice(0,-1);
        secondOperand = formatNumberWithComma(secondOperand);
        secondOperand ? updateSecondaryDisplay(secondOperand):updateSecondaryDisplay("0");
    } else {
        firstOperand = removeCommas(firstOperand);
        firstOperand = firstOperand.slice(0,-1);
        firstOperand = formatNumberWithComma(firstOperand);
        firstOperand ? updateSecondaryDisplay(firstOperand):updateSecondaryDisplay("0");
    }
}
// handling period
function handleDecimal(operand) {
    if(!firstOperand.includes(".")) {
        firstOperand += operand;
        updateSecondaryDisplay(firstOperand);
    }
}

// display methods
function updatePrimaryDisplay(value) {
    priDisplay.textContent = value;
}

function updateSecondaryDisplay(value) {
    const baseFontSize = 15; // Initial font size
    let decrementFactor = 1; // Font size decrement factor per character over 13

    // Convert value to string to handle length check uniformly
    value = value.toString();

    // Adjust font size based on the length of the value
    if (value.length > 14) {
        const extraCharacters = value.length - 13;
        const reducedFontSize = baseFontSize - (extraCharacters * decrementFactor);
        secDisplay.style.fontSize = Math.max(reducedFontSize, 9) + "px"; // Ensure font size doesn't go below 10px
    } else {
        secDisplay.style.fontSize = baseFontSize + "px"; // Default font size
    }

    secDisplay.textContent = value;
}

