'use strict';

const list = document.querySelector('.gallery');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (clickEvent) => {
  let target = clickEvent.target;
  // Якщо клікнули на мініатюру (img), беремо батька (a)

  if (target.tagName === 'IMG') {
    target = target.closest('a');
  }

  // Перевіряємо, що це посилання
  if (target.tagName !== 'A') {
    return;
  }

  clickEvent.preventDefault();
  largeImage.src = target.href;
  largeImage.alt = target.title;
});
