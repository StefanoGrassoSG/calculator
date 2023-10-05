let value = '';

if (value === '') {
    document.getElementById('calc').textContent = '0';
}


document.getElementById('1').addEventListener('click', function() {
    value = value + '1';
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "1";
    document.getElementById('calc').appendChild(div);
    update()
  });

  
document.getElementById('2').addEventListener('click', function() {
    value = value + '2';
    console.log(value)
    const div = document.createElement('div');
    div.textContent = "2";
    document.getElementById('calc').appendChild(div);
    update()
  });



  document.getElementById('C').addEventListener('click', function() {
    value = '0'
    clear()
  })

  function update() {
    document.getElementById('calc').textContent = value;
  }

  function clear() {
    if (value != '') {
        document.getElementById('calc').textContent = '0';
    }
  }
