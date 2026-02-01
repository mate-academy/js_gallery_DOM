'use strict';

// Отримуємо список мініатюр (ul)
const thumbs = document.getElementById('thumbs');

// Отримуємо велику картинку
const largeImg = document.getElementById('largeImg');

// Використовуємо делегування подій:
// слухаємо клік на всьому списку, а не на кожній мініатюрі окремо
thumbs.addEventListener('click', (e) => {
  // Забороняємо стандартну поведінку <a> (перехід по href)
  e.preventDefault();

  let link = null;

  // Якщо клікнули безпосередньо по <img>
  // event.target — це img
  // тоді шукаємо найближчий батьківський <a>
  if (e.target.tagName === 'IMG') {
    link = e.target.closest('a');
  }

  // Якщо клікнули прямо по <a>
  // event.target — це a
  if (e.target.tagName === 'A') {
    link = e.target;
  }

  // Якщо клік був не по картинці і не по посиланню — виходимо
  if (!link) {
    return;
  }

  // Міняємо src великої картинки на href вибраної мініатюри
  largeImg.src = link.href;
});
