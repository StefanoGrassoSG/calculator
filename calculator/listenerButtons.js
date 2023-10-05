let value = '';
let secondValue = '';
let inputs = [];
let checkCalc = null;
let roots = null;
let square = null;

if (value === '') {
    document.getElementById('calc').textContent = '0';
}

document.getElementById('0').addEventListener('click', function() {
    if (value === '0') {
        value = '0';
    } else {
        value += '0';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '0';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value + 'questo è il primo input per il calcolo')
        const div = document.createElement('div');
        div.textContent = "0";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

document.getElementById('1').addEventListener('click', function() {
    if (value === '0') {
        value = '1';
    } else {
        value += '1';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '1';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value + 'questo è il primo input per il calcolo')
        const div = document.createElement('div');
        div.textContent = "1";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  
  document.getElementById('2').addEventListener('click', function() {
    if (value === '0') {
        value = '2';
    } else {
        value += '2';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '2';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "2";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });
  
  document.getElementById('3').addEventListener('click', function() {
    if (value === '0') {
        value = '3';
    } else {
        value += '3';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '3';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "3";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('4').addEventListener('click', function() {
    if (value === '0') {
        value = '4';
    } else {
        value += '4';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '4';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "4";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('5').addEventListener('click', function() {
    if (value === '0') {
        value = '5';
    } else {
        value += '5';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '5';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "5";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('6').addEventListener('click', function() {
    if (value === '0') {
        value = '6';
    } else {
        value += '6';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '6';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "6";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('7').addEventListener('click', function() {
    if (value === '0') {
        value = '7';
    } else {
        value += '7';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '7';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "7";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('8').addEventListener('click', function() {
    if (value === '0') {
        value = '8';
    } else {
        value += '8';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '8';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "8";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('9').addEventListener('click', function() {
    if (value === '0') {
        value = '9';
    } else {
        value += '9';
    }

    if (inputs.length > 0) {
        value = null;
        secondValue += '9';
        const secondDiv = document.createElement('div');
        secondDiv.textContent = secondValue;
        document.getElementById('calc').append(secondDiv);
        update()
        console.log('il secondo valore' + secondValue)
    }
    else {
        console.log(value)
        const div = document.createElement('div');
        div.textContent = "9";
        document.getElementById('calc').appendChild(div);
        update()
    } 
   
  });

  document.getElementById('+').addEventListener('click', function() {
    let firstInput = value;
    checkCalc = 'sum';
    document.getElementById('input').textContent = firstInput + '' + '+';
    inputs.push(firstInput);
    console.log(inputs)
  })

  document.getElementById('X').addEventListener('click', function() {
    let firstInput = value;
    checkCalc = 'multy';
    document.getElementById('input').textContent = firstInput + '' + 'x';
    inputs.push(firstInput);
    console.log(inputs)
  })


  document.getElementById('C').addEventListener('click', function() {
    value = '0'
    clear()
  })

  document.getElementById('=').addEventListener('click', function() {
    if(checkCalc == 'sum') {
        sum()
    }
    if(checkCalc == 'multy') {
        multiply()
    }
    
  })

  
  document.getElementById('√x').addEventListener('click', function() {
    qdrt()
  })

  
  document.getElementById('x2').addEventListener('click', function() {
    squareCalc()
  })

  

  function update() {
    if(value != null) {
       document.getElementById('calc').textContent = value;
    }
    if(secondValue != '') {
        document.getElementById('calc').textContent = secondValue;
    }
  }

  function clear() {
    if (value != '') {
        document.getElementById('calc').textContent = '0';
        document.getElementById('input').textContent = '';
        inputs = [];
    }
  }

  function sum() {
    inputs.push(secondValue)
    console.log(inputs)
    let total = 0;
    for (let index = 0; index < inputs.length; index++) {
       let nmb = parseInt(inputs[index]);
        total += nmb 
    }

    
    function formatNumber() {
        if(total >= 1000) {
            return total.toLocaleString();
        }    
        else {
            return total.toString();
        }
    }

    const foramttedNumber = formatNumber()
    console.log('l addizzione  è' + foramttedNumber)
    document.getElementById('calc').innerHTML = foramttedNumber;
    
    document.getElementById('calc').innerHTML = foramttedNumber;
    document.getElementById('input').textContent = inputs[0] + ' + ' + secondValue + ' = ';
    value = '',
    secondValue = ''
    inputs = [];
    

    console.log('la somma è' + total)
  } 

  function multiply() {
    inputs.push(secondValue)
    console.log(inputs)
    let total = 1;
    for (let index = 0; index < inputs.length; index++) {
       let nmb = parseInt(inputs[index]);
        total *= nmb 
    }
    document.getElementById('input').textContent = inputs[0] + ' x ' + secondValue + ' = ';

    value = '',
    secondValue = ''
    inputs = [];

    function formatNumber() {
        if(total >= 1000) {
            return total.toLocaleString();
        } 
        else {
            return total.toString();
        }   
    }

    const foramttedNumber = formatNumber()
    console.log('la moltiplciazione è' + foramttedNumber)
    document.getElementById('calc').innerHTML = foramttedNumber;
  }

  function qdrt() {
    roots = value;
    const root = Math.sqrt(roots)
    console.log(root, typeof root)
    console.log(hasDecimalPlaces(root))
    let final = root.toFixed(1)
    if(hasDecimalPlaces(root) == true) {
      document.getElementById('calc').innerHTML = final
    }
    else {
        document.getElementById('calc').innerHTML = root
    }
    
  }

  function squareCalc() {
    let square = value;
    let result = value * value
    function formatNumber() {
        if(result >= 1000) {
            return result.toLocaleString();
        } 
        else {
            return result.toString();
        }   
    }
    const formatted = formatNumber()
    document.getElementById('calc').innerHTML = formatted;
  }

  function hasDecimalPlaces(number) {
    return (number % 1) !== 0;
  }
  