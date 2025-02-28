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

function inputDecimal(dot){
    if(calculator.displayValue.includes(dot)){
        calculator.displayValue += dot
    }
}

function handleOperator(nextOperator){
    const {firstOperand, displayValue, operator} = calculator
    const inpuValue = parseFloat(displayValue)

    if(operator && calculator.waitingForSecondOperand){
        calculator.operator == nextOperator
        return
    }
    if(firstOperand === null && !isNaN(inpuValue)){
        calculator.firstOperand = inpuValue
    } else if (operator){
        const result = calculate(firstOperand, inputValue, operator)
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = result
    }

    calculator.waitingForSecondOperand = true
    calculator.operator = nextOperator

    updateDisplay()
}

function calculate(firstOperand, secondOperand, operator){
    if(operator === '+'){
        return firstOperand + secondOperand
    } else if (operator === '-'){
        return firstOperand - secondOperand
    } else if (operator === '*'){
        return firstOperand * secondOperand
    } else if (operator === '/'){
        return firstOperand / secondOperand
    } else if (operator === '√'){
        return firstOperand √ secondOperand
    } else if (operator === '%'){
        return firstOperand % secondOperand
    } 
    return secondOperand
} 

function resetCalculator(){
    calculator.displayValue = '0'
    calculator.firstOperand = null
    calculator.waitingForSecondOperand = false
    calculator.operator = null
    updateDisplay()
}

function handleEqual(){
    const {firstOperand, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue)

    if(operator && !calculator.waitingForSecondOperand){
        const result = calculate(firstOperand, inputValue, operator)
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = null
        calculator.operator = null
        calculator.waitingForSecondOperand = false
        updateDisplay()
    }
}


