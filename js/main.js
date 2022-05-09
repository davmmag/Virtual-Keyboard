import { createKeyboard } from './load.js';
import { keydownEvent } from './keydown.js';
import { keyupEvent } from './keyup.js';
import { clickKeyBoard } from './clickKeyBoard.js';
let lang;
if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en');
  lang = 'en';
} else {
  lang = localStorage.getItem('lang');
}

createKeyboard(lang);
window.addEventListener('keydown', keydownEvent);
window.addEventListener('keyup', keyupEvent);
clickKeyBoard();
