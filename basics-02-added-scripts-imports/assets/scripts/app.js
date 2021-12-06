const initialValue = 0;
let currentValue = initialValue;
let loggingArray = [];



function inputNumberValue(){
    return parseInt(userInput.value);
}

function discriptionOutput(operator, initialEnteredNumber, enteredInput){
    let calDiscription = `${initialEnteredNumber}  ${operator}  ${enteredInput}`;
    outputResult(currentValue, calDiscription);// from vender.js file
}

function logFuction(operator, prevValue, enterValue, resultFromCalc){
    const logCalc = {
        operator: operator,
        previousValue: prevValue,
        enteredNumber: enterValue,
        result: resultFromCalc
    }
    loggingArray.push(logCalc);
    console.log(loggingArray);
}

function conditionalCalc(operatorString) {
    const enteredNumber = inputNumberValue();
    const beforeCalc = currentValue;
    let operatorSign;

    if (operatorString !== 'ADD' &&
        operatorString !== 'SUBTRACT' &&
        operatorString !== 'MULTIPLY' &&
        operatorString !== 'DIVIDE' ||
        !enteredNumber  
    ) {
        return;
    }

    if (operatorString === 'ADD'){
        currentValue += enteredNumber;
        operatorSign = '+';
    }
    else if (operatorString === 'SUBTRACT'){
        currentValue -= enteredNumber;
        operatorSign = '-';
    }
    else if (operatorString === 'MULTIPLY'){
        currentValue *= enteredNumber;
        operatorSign = '*';
    }
    else if (operatorString === 'DIVIDE'){
        currentValue /= enteredNumber;
        operatorSign = '/';
    }
    discriptionOutput(operatorSign, beforeCalc, enteredNumber);
    logFuction(operatorString, beforeCalc, enteredNumber, currentValue);
}

function divide(){
    conditionalCalc('DIVIDE');
}

function multiply(){
    conditionalCalc('MULTIPLY');
}

function subtract(){
    conditionalCalc('SUBTRACT');
}

function add(){
    conditionalCalc('ADD');
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
