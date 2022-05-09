export const keyupEvent = e => {
  const KEYS = document.querySelectorAll('.keyboard__item');
  const BACKSPACE = document.querySelector('[data-id="backspace"]');
  const TAB = document.querySelector('[data-id="tab"]');
  const ENTER = document.querySelector('[data-id="enter"]');
  const SHIFT = document.querySelector('[data-id="shift"]');
  const SHIFT_RIGHT = document.querySelector('[data-id="shift_right"]');
  const SPACE = document.querySelector('[data-id="space"]');
  for (let i = 0; i < KEYS.length; i++) {
    if (e.key === KEYS[i].dataset.name) {
      KEYS[i].classList.remove('active');
      KEYS[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      SPACE.classList.remove('active');
      SPACE.classList.add('remove');
    }
    if (e.code === 'Space') {
      SPACE.classList.remove('active');
      SPACE.classList.add('remove');
    }
    if (e.code === 'Backspace') {
      BACKSPACE.classList.remove('active');
      BACKSPACE.classList.add('remove');
    }
    if (e.code === 'Tab') {
      console.log(TAB, e.code);
      TAB.classList.remove('active');
      TAB.classList.add('remove');
    }
    if (e.code === 'Enter') {
      ENTER.classList.remove('active');
      ENTER.classList.add('remove');
    }

    if (e.code === 'ShiftLeft') {
      SHIFT.classList.remove('active');
      SHIFT.classList.remove('remove');
    }

    if (e.code === 'ShiftRight') {
      SHIFT_RIGHT.classList.remove('active');
      SHIFT_RIGHT.classList.remove('remove');
    }

    setTimeout(() => {
      KEYS[i].classList.remove('remove');
      KEYS[i].classList.remove('active');
    }, 200);
  }
};
