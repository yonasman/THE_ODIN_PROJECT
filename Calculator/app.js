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
function multiple(...args) {
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




