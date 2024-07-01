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
function square(num1,num2) {
    return num1 ** num2;
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
            return square(num1, num2);
        case "%":
            return percent(num1, num2);
        default:
            return "Nothing to operate";
    }
}
// reading the value of each button
// ************************
let num1 = "", num2 = "", operator = "";
// displays
let priDisplay = document.querySelector(".primary-display");
let secDisplay = document.querySelector(".secondary-display");
let buttons = document.querySelectorAll(".btn");
let nowResult = 0
buttons.forEach (
    (button) => {
        button.addEventListener("click", function(e) {
            let value = e.target.value;
            isFirstNum = true;
            isSecNum = false;
            if(value === "C") {
                num1 = "";
                num2 = "";
                isFirstNum = true;
                isSecNum = true;
                operator = "";
                nowResult = 0;
                priDisplay.textContent = "";
                secDisplay.textContent = "0";
            } else if(value === "+" || value === "-" || value === "x" || value === "/") {
                if(num1 !== "") {
                    isFirstNum = false;
                    operator = value;
                    // console.log(num1);
                    console.log("operator  " + operator)
                    // priDisplay.textContent = operator;
                    // secDisplay.textContent = operator;
                    if(!nowResult) {
                        priDisplay.textContent = `${num1} ${operator}`;
                    } else {
                        priDisplay.textContent = `${nowResult} ${operator}`;
                    }
                }
            } else if(value === "BS") {
                secDisplay.textContent = secDisplay.textContent.slice(0,-1);
                num1 = secDisplay.textContent;
                if(secDisplay.textContent === "") {
                    secDisplay.textContent = 0;
                    num1 = "";
                }
                console.log(secDisplay.textContent)
            }
            
            
            else if(num1 !== "" && operator !== "") {
                //  && (value !== "+" || value !== "-" || value !== "x" || value !== "/")
                    isFirstNum = false;
                    isSecNum = true;
                    console.log("number 2 is here")
                    // ******
                    // if(!isFirstNum && isSecNum) {
                        num2 = value;
                        console.log("num2  " + num2)
                        secDisplay.textContent = num2;
                    // }
                    // let sum = 0;
                    // if(!isFirstNum && isSecNum) {
                        console.log(num1)
                        console.log(num2)
                        if(nowResult) {
                            nowResult = operate(Number(nowResult),Number(num2),operator);
                            console.log("current result inside " + nowResult)
                            secDisplay.textContent = nowResult
                            
                        } else {
                            nowResult = operate(Number(num1),Number(num2),operator);
                            console.log("current result outside " + nowResult);
                            secDisplay.textContent = nowResult
                            // priDisplay.textContent = `${nowResult} ${operator}`
                        }
                       
                    //    num1 = num2;
                    // }
                } 
                else {    
                    
                if (isFirstNum) {
                    num1 += value;
                    console.log("num1  " + num1)
                    secDisplay.textContent = num1;
                } 
                
                }
        })
} )
