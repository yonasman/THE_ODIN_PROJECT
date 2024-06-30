// calculator
// ******************************
// functions for calculator
// sum
function sum(...args) {
    let answer = args.reduce((result,current) => result += current,0)
    console.log(answer)
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
let num1, num2, operator;
// num1 = Number(prompt("Enter the first num"));
// num2 = Number(prompt("Enter the second num"));
// operator = prompt("Enter the operator")
function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            sum(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        case "1/x":
            inverse(num1);
            break;
        case "x^2":
            square(num1, num2);
            break;
        case "%":
            percent(num1, num2);
            break;
        default:
            console.log("Nothing to operate");
    }
}
operate(num1,num2,operator);


