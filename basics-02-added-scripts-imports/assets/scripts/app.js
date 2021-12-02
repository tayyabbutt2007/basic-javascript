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


function divide(){
    const enteredNumber = inputNumberValue();
    const beforeCalc = currentValue;
    currentValue /= enteredNumber;
    discriptionOutput('/', beforeCalc, enteredNumber);
    logFuction("DIVIDE", beforeCalc, enteredNumber, currentValue);
}

function multiply(){
    const enteredNumber = inputNumberValue();
    const beforeCalc = currentValue;
    currentValue = currentValue * enteredNumber;
    discriptionOutput('*', beforeCalc, enteredNumber);
    logFuction("MULTILY", beforeCalc, enteredNumber, currentValue);
}

function subtract(){
    const enteredNumber = inputNumberValue();
    const beforeCalc = currentValue;
    currentValue = currentValue - enteredNumber;
    discriptionOutput('-', beforeCalc, enteredNumber);
    logFuction("SUBTRACT", beforeCalc, enteredNumber, currentValue);
}

function add(){
    const enteredNumber = inputNumberValue();
    const beforeCalc = currentValue;
    currentValue += enteredNumber;
    discriptionOutput('+', beforeCalc, enteredNumber);
    logFuction("ADD", beforeCalc, enteredNumber, currentValue);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
