export const createKeyboard = lang => {
  const RuWords = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ShiftRight',
    'CtrlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlRight', '←', '→'];
  const EnWords = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight',
    'CtrlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlRight', '←', '→'];
  const CONTAINER = document.createElement('div');
  const KEYBOARD = document.createElement('div');
  CONTAINER.className = 'container';
  CONTAINER.innerHTML = '<h1 class="header">RSS Виртуальная клавиатура</h1>';
  KEYBOARD.className = 'keyboard';
  KEYBOARD.innerHTML = `        
      <div class="keyboard__top">
        <textarea id="" class="keyboard__view" autofocus></textarea>
      </div>
      <div class="keyboard__bottom">
        <div class="keyboard__content"></div>
      </div>`;
  const p =  document.createElement('p');
  p.innerHTML = '';
  p.innerHTML = `<p>Клавиатура создана в операционной системе Windows<br>
                      Для переключения языка комбинация: левыe Shift + Alt</p>`;
  CONTAINER.append(p);
  CONTAINER.append(KEYBOARD);
  document.body.append(CONTAINER);
  const updateKeyboard = language => {
    const container = document.querySelector('.keyboard__content');
    container.innerHTML = '';
    const tw = document.createElement('div');
    tw.dataset.id = 'tw';
    tw.className = 'keyboard__item alter';
    for (let i = 0; i < 62; i++) {
      const item = document.createElement('div');
      item.className = 'keyboard__item';
      if (language[i] === 'Backspace') {
        item.textContent = language[i];
        item.dataset.id = 'backspace';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'Win') {
        item.textContent = language[i];
        item.dataset.id = 'win';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'Tab') {
        item.textContent = language[i];
        item.classList.add('alter');
        item.dataset.id = 'tab';
        container.append(item);
        continue;
      }
      if (language[i] === 'Del') {
        item.textContent = language[i];
        item.classList.add('alter');
        item.dataset.id = 'del';
        container.append(item);
        continue;
      }
      if (language[i] === 'CtrlLeft') {
        item.dataset.id = 'ctrl_left';
        item.textContent = 'Ctrl';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'CtrlRight') {
        item.dataset.id = 'ctrl_right';
        item.textContent = 'Ctrl';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'AltLeft') {
        item.dataset.id = 'alt_left';
        item.textContent = 'Alt';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'AltRight') {
        item.dataset.id = 'alt_right';
        item.textContent = 'Alt';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'CapsLock') {
        item.textContent = language[i];
        item.dataset.id = 'caps_lock';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'Enter') {
        item.textContent = language[i];
        item.dataset.id = 'enter';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'ShiftLeft') {
        item.textContent = 'Shift';
        item.dataset.id = 'shift';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (language[i] === 'ShiftRight') {
        item.textContent = 'Shift';
        item.dataset.id = 'shift_right';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      if (i === 61) {
        tw.innerHTML = `<div class="keyboard__item alter" data-id="arrow_top">↑</div>
                            <div class="keyboard__item alter" data-id="arrow_bottom">↓</div>`;
        container.append(tw);
      }
      if (language[i] === '↓') { continue; }
      // eslint-disable-next-line max-len
      if (language[i] === '←' || language[i] === '→' || language[i] === 'Ctrl' || language[i] === 'Alt' || language[i] === 'Win') {
        item.classList.add('alter');
      }
      if (language[i] === '←') {
        item.dataset.id = 'arrow_left';
      }
      if (language[i] === '→') {
        item.dataset.id = 'arrow_right';
      }
      if (language[i] === 'Space') {
        item.textContent = language[i];
        item.dataset.id = 'space';
        item.classList.add('alter');
        container.append(item);
        continue;
      }
      item.textContent = language[i];
      item.dataset.name = String(language[i]);
      container.append(item);
    }
  };
  const updateLang = () => {
    window.addEventListener('keydown', e => {
      if (e.code === 'AltLeft' && e.shiftKey) {
        if (localStorage.getItem('lang') === 'en') {
          localStorage.setItem('lang', 'ru');
          updateKeyboard(RuWords);
        } else {
          localStorage.setItem('lang', 'en');
          updateKeyboard(EnWords);
        }
      }
    });
  };
  updateLang();
  if (lang === 'en') {
    updateKeyboard(EnWords);
  } else {
    updateKeyboard(RuWords);
  }
};
