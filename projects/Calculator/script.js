const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}

// Fungsi untuk memperbarui tampilan layar kalkulator
function updateDisplay() {
    const display = document.querySelector('.calculator-display')
    display.value = calculator.displayValue
}

// Fungsi untuk menangani input angka
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator

    if (waitingForSecondOperand) {
        calculator.displayValue = digit
        calculator.waitingForSecondOperand = false
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit
    }
    updateDisplay()
}

// Fungsi untuk menangani input desimal
function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot
        updateDisplay()
    }
}

// Fungsi untuk menangani operator
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue)

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator
        return
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator)
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = result
    }

    calculator.waitingForSecondOperand = true
    calculator.operator = nextOperator

    updateDisplay()
}

// Fungsi untuk menghitung hasil operasi
function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand
    } else if (operator === '-') {
        return firstOperand - secondOperand
    } else if (operator === '*') {
        return firstOperand * secondOperand
    } else if (operator === '/') {
        return firstOperand / secondOperand
    } else if (operator === '√') {
        return Math.sqrt(firstOperand) // Perbaikan √ agar hanya menggunakan satu operand
    } else if (operator === '%') {
        return firstOperand % secondOperand
    }
    return secondOperand
}

// Fungsi untuk mereset kalkulator
function resetCalculator() {
    calculator.displayValue = '0'
    calculator.firstOperand = null
    calculator.waitingForSecondOperand = false
    calculator.operator = null
    updateDisplay()
}

// Fungsi untuk menangani tombol "="
function handleEqual() {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue)

    if (operator && !calculator.waitingForSecondOperand) {
        const result = calculate(firstOperand, inputValue, operator)
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
        calculator.firstOperand = null
        calculator.operator = null
        calculator.waitingForSecondOperand = false
        updateDisplay()
    }
}

// Event listener untuk tombol kalkulator
document.querySelector('.calculator-keys').addEventListener('click', (event) => {
    const target = event.target

    if (!target.matches('button')) {
        return
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value)
        return
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value)
        return
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator()
        return
    }

    if (target.classList.contains('equal-sign')) {
        handleEqual()
        return
    }

    inputDigit(target.value)
})
