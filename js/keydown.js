export const keydownEvent = e => {
  const KEYS = document.querySelectorAll('.keyboard__item');
  const BACKSPACE = document.querySelector('[data-id="backspace"]');
  const TAB = document.querySelector('[data-id="tab"]');
  const DEL = document.querySelector('[data-id="del"]');
  const CAPS = document.querySelector('[data-id="caps_lock"]');
  const ENTER = document.querySelector('[data-id="enter"]');
  const SHIFT = document.querySelector('[data-id="shift"]');
  const SHIFT_RIGHT = document.querySelector('[data-id="shift_right"]');
  const CTRL = document.querySelector('[data-id="ctrl_left"]');
  const CTRL_RIGHT = document.querySelector('[data-id="ctrl_right"]');
  const WIN = document.querySelector('[data-id="win"]');
  const ALT = document.querySelector('[data-id="alt_left"]');
  const ALT_RIGHT = document.querySelector('[data-id="alt_right"]');
  const SPACE = document.querySelector('[data-id="space"]');
  const ARROW_LEFT = document.querySelector('[data-id="arrow_left"]');
  const ARROW_RIGHT = document.querySelector('[data-id="arrow_right"]');
  const ARROW_BOTTOM = document.querySelector('[data-id="arrow_bottom"]');
  const ARROW_TOP = document.querySelector('[data-id="arrow_top"]');
  for (let i = 0; i < KEYS.length; i++) {
    const key = String(e.key).toLowerCase();
    if (key === KEYS[i].dataset.name) {
      KEYS[i].classList.add('active');
    }
    if (e.code === 'Space') { SPACE.classList.add('active'); }
    if (e.code === 'Backspace') { BACKSPACE.classList.add('active'); }
    if (e.code === 'Delete') { DEL.classList.add('active'); }
    if (e.code === 'Enter') { ENTER.classList.add('active'); }
    if (e.code === 'Tab') {
      TAB.classList.add('active');
    }
    if (e.code === 'ControlLeft') { CTRL.classList.add('active'); }
    if (e.code === 'ControlRight') { CTRL_RIGHT.classList.add('active'); }
    if (e.code === 'ShiftLeft') {
      SHIFT.classList.add('active');
      SHIFT_RIGHT.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      SHIFT.classList.remove('active');
      SHIFT_RIGHT.classList.add('active');
    }
    if (e.code === 'OSLeft') {
      WIN.classList.add('active');
    }
    if (e.code === 'CapsLock') {
      CAPS.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      ALT.classList.add('active');
      ALT_RIGHT.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      ALT.classList.remove('active');
      ALT_RIGHT.classList.add('active');
    }

    if (e.code === 'ArrowUp') { ARROW_TOP.classList.add('active'); }
    if (e.code === 'ArrowDown') { ARROW_BOTTOM.classList.add('active'); }
    if (e.code === 'ArrowLeft') { ARROW_LEFT.classList.add('active'); }
    if (e.code === 'ArrowRight') { ARROW_RIGHT.classList.add('active'); }
  }
};
