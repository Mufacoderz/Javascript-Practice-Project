const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}

function updateDisplay(){
    const display = document.querySelector('.calculator-display')
    display.value = calculator.displayValue
}

function inputDigit(digit){
    const {displayValue, waitingForSecondOperand} = calculator

    if(waitingForSecondOperand === true){
        calculator.displayValue = digit
        calculator.waitingForSecondOperand = false
    } else{
        calculator.displayValue = displayValue === '0' ? digit: displayValue + digit
    }
    updateDisplay()
}
