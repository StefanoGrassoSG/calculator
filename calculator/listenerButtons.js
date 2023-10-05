let value = '';
let secondValue = '';
let inputs = [];

if (value === '') {
    document.getElementById('calc').textContent = '0';
}


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
        console.log('il secondo valore è' + secondValue)
        update()
    }
    else {
        console.log(value)
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
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "2";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('3').addEventListener('click', function() {
    if (value === '0') {
        value = '3';
    } else {
        value += '3';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "3";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('4').addEventListener('click', function() {
    if (value === '0') {
        value = '4';
    } else {
        value += '4';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "4";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('5').addEventListener('click', function() {
    if (value === '0') {
        value = '5';
    } else {
        value += '5';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "5";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('6').addEventListener('click', function() {
    if (value === '0') {
        value = '6';
    } else {
        value += '6';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "6";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('7').addEventListener('click', function() {
    if (value === '0') {
        value = '7';
    } else {
        value += '7';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "7";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('8').addEventListener('click', function() {
    if (value === '0') {
        value = '8';
    } else {
        value += '8';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "8";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('9').addEventListener('click', function() {
    if (value === '0') {
        value = '9';
    } else {
        value += '9';
    }
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "9";
    document.getElementById('calc').appendChild(div);
    update()
  });

  document.getElementById('+').addEventListener('click', function() {
    let firstInput = value;
    document.getElementById('input').textContent = firstInput + '' + '+';
    inputs.push(firstInput);
    console.log(inputs)
  })


  document.getElementById('C').addEventListener('click', function() {
    value = '0'
    clear()
  })

  function update() {
    if(value != null) {
        document.getElementById('calc').textContent = value;
    }
    if(secondValue != '') {
        document.getElementById('calc').innerHTML = '';
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
