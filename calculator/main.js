import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

for (let index = 0; index < 20; index++) {
  const btn = document.createElement("div");
  document.getElementById('btn').append(btn)
}