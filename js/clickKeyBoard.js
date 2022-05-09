export const clickKeyBoard = () => {
  const KEYBOARD_VIEW = document.querySelector('.keyboard__view');
  const KEYS = document.querySelectorAll('.keyboard__item');
  window.addEventListener('click', e => {
    for (let i = 0; i < KEYS.length; i++) {
      if (e.target.dataset.name || e.target.dataset.id) {
        if (e.target.dataset.id === 'space') {
          KEYBOARD_VIEW.value += ' ';
          break;
        }
        if (e.target.dataset.lowercase) {
          KEYBOARD_VIEW.value += e.target.dataset.lowercase;
          break;
        }
        if (e.target.dataset.name) {
          KEYBOARD_VIEW.value += e.target.dataset.name;
          break;
        }
        if (e.target.dataset.id === 'tab') {
          KEYBOARD_VIEW.value += '    ';
          break;
        }
        if (e.target.dataset.id === 'enter') {
          KEYBOARD_VIEW.value += '\n';
          break;
        }
        if (e.target.dataset.id === 'caps_lock') {
          KEYBOARD_VIEW.value += '\n';
          break;
        }
      }
    }
  });
};
