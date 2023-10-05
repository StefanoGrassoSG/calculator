import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const symbols = [
  '%',
  'CE',
  'C',
  '<',
  '1/x',
  'x2',
  '√x',
  '÷',
  '7',
  '8',
  '9',
  'X',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '+/-',
  '0',
  ',',
  '='
]

const btnContainer = document.getElementById('btn'); 


for (let index = 0; index < symbols.length; index++) {
  const btn = document.createElement('div');
  btn.id = symbols[index];
  btn.innerHTML = symbols[index]; 

  if (index === symbols.length - 1) {
    btn.style.backgroundColor = 'SteelBlue'; 
  }
  btnContainer.appendChild(btn); 
}


