'use strict';

// -----------------------------------------------------------------------------

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  let click = event.target;

  if (click.tagName === 'IMG') {
    click = click.closest('a');
  }

  // eslint-disable-next-line max-len
  // click - потрібен бо якщо клікнем по ul або li або в пусте місце між картками буде null, a null.tagName === EROR
  // click.tagName === 'A' - якщо ми клінули на "а"
  if (click && click.tagName === 'A') {
    event.preventDefault();

    largeImg.src = click.href;
    largeImg.alt = click.title;
  }
});

// -----------------------------------------------------------------------------

// Сказано переробити логіку, а саме:
// 1. event.preventDefault() повинен впливати тільки на "а"
// 2. Зробити умову click && click.tagName === 'A' бо if NULL буде eror
// 3. Змінити event.target.parentElement > event.target.closest('a') "Надійніше"

// Отримуємо елементи по ID (img = 'largeImg' і ul = 'thumbs')
// const largeImg = document.getElementById('largeImg');
// const thumbs = document.getElementById('thumbs');

// Робим делегацію подій на ul = 'thumbs'
// // eslint-disable-next-line no-shadow
// thumbs.addEventListener('click', (event) => {
//   // Відміняємо стандартну поведінку елемента <a>
//   event.preventDefault();

//   // Якщо клікнули на картинку, піднімаємся до посилання .closest('a')
//   // event.target.tagName = тег на який ми клікнули (повертає big реєстром)
//   // eslint-disable-next-line prettier/prettier
//   const link = (event.target.tagName === 'IMG')
//     ? event.target.parentElement
//     : event.target;

//   // Якщо це посилання, змінюємо головне зображення
//   if (link.tagName === 'A') {
//     largeImg.src = link.href;
//     largeImg.alt = link.title;
//   }
// });

// -----------------------------------------------------------------------------
