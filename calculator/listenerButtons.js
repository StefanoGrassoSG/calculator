let value = '';
let secondValue = '';
let firstInput = [];
let secondInput = [];
let calcsArray = [];
let checkCalc = null;
let roots = null;
let square = null;
let calcComplete = false

const numericButtons = document.querySelectorAll('.button-numeric');
const operatorButtons = document.querySelectorAll('.operator');
const calc = document.getElementById('=')
const input = document.getElementById('input')


if (value === '') {
    document.getElementById('calc').textContent = '0';
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
    calcsArray.push(parseInt(firstInput[firstInput.length - 1]))
    calcsArray.push(parseInt(secondInput[secondInput.length - 1]))
    console.log(calcsArray)
    if(checkCalc == '+') {
        document.getElementById('calc').innerHTML = sumArray(calcsArray)
        document.getElementById('input').textContent = firstInput[firstInput.length - 1] + ' ' + checkCalc + ' ' + secondInput[secondInput.length - 1] + ' ' + '=';
        value = '';
        secondValue = '';
        firstInput = [];
        secondInput = [];
        checkCalc = null;
        roots = null;
        square = null;
        calcComplete = true
        console.log(sumArray(calcsArray))
    }
})
////////////////////////////////////////////////////////////////////
//FUNCTION FOR ADD NUMBERS
////////////////////////////////////////////////////////////////////
function addDigitNumber(numb) {
    if (value === '0') {
        value = numb;
    } else {
        value += numb;
    }

    if(calcComplete) {
        input.innerHTML = ''
    }

    if (firstInput.length > 0 && checkCalc != null) {
        secondValue += numb;
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        secondInput.push(secondValue)
        update()
        console.log('questo è il secondo input per il calcolo' + secondInput)
        console.log(secondInput)
    }
    else {
        const div = document.createElement('div');
        div.textContent = numb;
        document.getElementById('calc').appendChild(div);
        firstInput.push(value)
        update()
        console.log(value + 'questo è il primo input per il calcolo')
        console.log(firstInput)
        
    } 
}
////////////////////////////////////////////////////////////////////
//FUNCTION FOR ADD OPERATORS
////////////////////////////////////////////////////////////////////
function addOperator(operator) {
    if(operator != '=') {
        checkCalc = operator
        console.log('questo è il primo valore da operare', calcsArray)
        console.log('opeartore utilizzato', operator)
        if(firstInput.length == 0) {
            firstInput.push('0')
        }
        input.textContent = firstInput.length > 0 ? firstInput[firstInput.length - 1] + ' ' + operator : '0 ' + operator;
        console.log(firstInput);
    }
}
////////////////////////////////////////////////////////////////////
//UPDATE FUNCTION
////////////////////////////////////////////////////////////////////
function update() {
    if(value != null) {
       document.getElementById('calc').textContent = value;
    }
    if(secondValue != '') {
        document.getElementById('calc').textContent = secondValue;
    }
}
////////////////////////////////////////////////////////////////////
//CALCS FUNCTIONS
////////////////////////////////////////////////////////////////////
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = parseFloat(arr[i]); // Converte l'elemento in un numero
        if (!isNaN(number)) { // Verifica se è un numero valido
            total += number;
        }
    }
    return total;
}









 