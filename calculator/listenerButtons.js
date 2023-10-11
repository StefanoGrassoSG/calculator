let value = '';
let secondValue = '';
let firstInput = [];
let secondInput = [];
let calcsArray = [];
let checkCalc = null;
let roots = null;
let square = null;
let calcComplete = false;
let repeat = false;
let same = false;

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
    if(firstInput.length > 0 && secondInput.length == 0) {
        same = true;
        calcComplete = true;
        input.textContent = firstInput[firstInput.length - 1] + ' ' + '='
    }

    if(same == true && secondInput.length > 0) {
        calcsArray[0] = firstInput[0]
        calcsArray.push(secondInput[secondInput.length - 1])
        console.log(calcsArray, 'CALCSARRAY')
        esteticResult.innerHTML = sumArray(calcsArray)
        input.textContent = (sumArray(calcsArray) - secondInput[secondInput.length - 1]) + ' ' + checkCalc + ' ' + secondInput[secondInput.length - 1] + ' ' + '=';
        console.log('firstinput', firstInput)
        console.log('checkvalue', checkCalc)
        console.log('secondinput', secondInput)
    }

    if(calcComplete == true && same == false) {
        calcsArray.push(secondInput[secondInput.length - 1])
        repeat = true;
        esteticResult.innerHTML = sumArray(calcsArray)
        input.textContent = (sumArray(calcsArray) - secondInput[secondInput.length - 1]) + ' ' + checkCalc + ' ' + secondInput[secondInput.length - 1] + ' ' + '=';
        console.log(calcsArray, 'porco dio')
    }

    if(checkCalc == '+' && repeat !=true && same != true) {
        calcsArray.push(secondInput[secondInput.length - 1])
        calcsArray.push(firstInput[firstInput.length - 1])
        console.log('YOOOOOOOOOOO')
        console.log('stato attuale calcsarray', calcsArray)
        console.log('stato attuale same', same)
        esteticResult.innerHTML =  sumArray(calcsArray)
        input.textContent = firstInput[firstInput.length - 1] + ' ' + checkCalc + ' ' + secondInput[secondInput.length - 1] + ' ' + '=';
        calcComplete = true
       
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

    if(calcComplete && checkCalc != null && same != true) {
        input.innerHTML = ''
        calcComplete = false
        reset()
        value = numb;
        console.log('yeeeeeeeeeeeeeeeeeeeeee')
    }

    if(calcComplete && same != true) {
        calcComplete = false
        reset()
        value = numb;
        console.log('YOOOOOOOOOOOOOOO')
    }

    if(same && calcsArray.length > 0) {
        input.innerHTML = ''
        calcComplete = false
        reset()
        value = numb;
        console.log('yeeeeeeeeeeeeeeeeeeeeee')
    }

    if (firstInput.length > 0 && checkCalc != null) {
        secondValue += numb;
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        esteticResult.append(secondDiv);
        secondInput.push(secondValue)
        update()
        console.log('stato attuale secondinput', secondInput)
        console.log('stato dell array finale', calcsArray)
    }
    else {
        const div = document.createElement('div');
        div.textContent = numb;
        esteticResult.appendChild(div);
        firstInput.push(value)
        update()
        console.log(firstInput, 'stato array first input')
        console.log('stato dell array finale', calcsArray)
        if(firstInput.length != 0 && checkCalc != null) {
            calcsArray.push(parseInt(firstInput[firstInput.length - 1]))
        }
    } 
}
////////////////////////////////////////////////////////////////////
//FUNCTION FOR ADD OPERATORS
////////////////////////////////////////////////////////////////////
function addOperator(operator) {
    if(operator != '=' && operator != 'C') {
        checkCalc = operator
        console.log('opeartore utilizzato', operator)
        console.log('stato operatore', checkCalc)
        if(firstInput.length == 0) {
            firstInput.push('0')
        }
        input.textContent = firstInput.length > 0 ? firstInput[firstInput.length - 1] + ' ' + operator : '0 ' + operator;
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
     repeat = false;
     same = false;
}
////////////////////////////////////////////////////////////////////
//TYPES  OF CALCS  FUNCTIONS
////////////////////////////////////////////////////////////////////
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let number = parseFloat(arr[i].replace(',', '.'));
        if (!isNaN(number)) {
            total += number;
        }
    }
    return total.toString().replace('.', ','); 
}







 