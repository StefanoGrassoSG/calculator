import './style.scss'

const symbols = [
  '%',
  'CE',
  'C',
  '<',
  '1/x',
  'x2',
  '√x',
  '÷',
  7,
  8,
  9,
  'x',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  '+/-',
  0,
  '.',
  '='
]

const btnContainer = document.getElementById('btn'); 


for (let index = 0; index < symbols.length; index++) {
  const btn = document.createElement('div');
  btn.id = symbols[index];
  btn.innerHTML = symbols[index]; 
  if (typeof symbols[index] === 'number') {
    btn.classList.add('button-numeric');
  }
  else {
    btn.classList.add('operator');
  }

  if (index === symbols.length - 1) {
    btn.style.backgroundColor = 'SteelBlue'; 
  }
  if(btn.id == '.') {
    btn.classList.add('button-numeric');
    btn.classList.remove('operator');
    btn.textContent = ',';
  }
  btnContainer.appendChild(btn); 
}


