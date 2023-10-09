let value = '';
let secondValue = '';
let firstInput = [];
let secondInput = [];
let calcsArray = [];
let checkCalc = null;
let roots = null;
let square = null;
let calcComplete = false;
let dump = false;

const numericButtons = document.querySelectorAll('.button-numeric');
const operatorButtons = document.querySelectorAll('.operator');
const calc = document.getElementById('=')
const input = document.getElementById('input')
const esteticResult = document.getElementById('calc')


if (value === '') {
    esteticResult.textContent = '0';
}

numericButtons.forEach(button => {
    button.addEventListener('click', function() {
        const numb = button.textContent;
        addDigitNumber(numb);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const operator = button.id;
        addOperator(operator);
    });
});
////////////////////////////////////////////////////////////////////
//CALCS SECTION
////////////////////////////////////////////////////////////////////
calc.addEventListener('click', function() {
    console.log('numeri da operare mell array', calcsArray)
    console.log('risultato finale dei due array', sumArray(calcsArray))
    if(calcsArray[calcsArray.length - 1] == firstInput[firstInput.length - 1]) {
        input.textContent = firstInput[firstInput.length - 1] + ' ' + '='
        calcComplete = true
    }
    if(checkCalc == '+') {
        esteticResult.innerHTML = sumArray(calcsArray)
        input.textContent = firstInput[firstInput.length - 1] + ' ' + checkCalc + ' ' + secondInput[secondInput.length - 1] + ' ' + '=';
        reset()
        calcComplete = true
        if(sumArray(calcsArray) != 0) {
            console.log(sumArray(calcsArray))
        }
       
    }
})
////////////////////////////////////////////////////////////////////
//FUNCTION FOR ADD NUMBERS VALUES
////////////////////////////////////////////////////////////////////
function addDigitNumber(numb) {
    if (value === '0') {
        value = numb;
    } else {
        value += numb;
    }

    if(calcComplete) {
       
        calcComplete = false
        reset()
        value = numb;
    }

    if (firstInput.length > 0 && checkCalc != null) {
        secondValue += numb;
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        esteticResult.append(secondDiv);
        secondInput.push(secondValue)
        update()
        console.log('questo è il secondo input per il calcolo' + secondInput)
        console.log(secondInput)
        if(secondInput.length != 0) {
            calcsArray.push(parseInt(secondInput[secondInput.length - 1]))
        }
        console.log(secondValue + 'questo è il secondo input per il calcolo messo nell array per il calcolo effettivo')
    }
    else {
        const div = document.createElement('div');
        div.textContent = numb;
        esteticResult.appendChild(div);
        firstInput.push(value)
        update()
        console.log(value + 'questo è il primo input per il calcolo')
        console.log(firstInput)
        if(firstInput.length != 0) {
            calcsArray.push(parseInt(firstInput[firstInput.length - 1]))
        }
        console.log(value + 'questo è il primo input per il calcolo messo nell array per il calcolo effettivo')
        
    } 
}
////////////////////////////////////////////////////////////////////
//FUNCTION FOR ADD OPERATORS
////////////////////////////////////////////////////////////////////
function addOperator(operator) {
    if(operator != '=' && operator != 'C') {
        checkCalc = operator
        console.log('opeartore utilizzato', operator)
        if(firstInput.length == 0) {
            firstInput.push('0')
        }
        input.textContent = firstInput.length > 0 ? firstInput[firstInput.length - 1] + ' ' + operator : '0 ' + operator;
        console.log(firstInput);
    }

    if(operator == 'C') {
        reset()
        calcComplete = false
        input.innerHTML = ''
        esteticResult.innerHTML = ''
        if (value === '') {
            esteticResult.textContent = '0';
        }
    }
}
////////////////////////////////////////////////////////////////////
//UPDATE FUNCTION
////////////////////////////////////////////////////////////////////
function update() {
    if(value != null) {
        esteticResult.textContent = value;
    }
    if(secondValue != '') {
        esteticResult.textContent = secondValue;
    }
}
////////////////////////////////////////////////////////////////////
//RESET FUNCTION
////////////////////////////////////////////////////////////////////
function reset() {
     value = '';
     secondValue = '';
     firstInput = [];
     secondInput = [];
     calcsArray = [];
     checkCalc = null;
     roots = null;
     square = null;
}
////////////////////////////////////////////////////////////////////
//TYPES  OF CALCS  FUNCTIONS
////////////////////////////////////////////////////////////////////
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = parseFloat(arr[i]); 
        if (!isNaN(number)) {
            total += number;
        }
    }
    return total;
}









 