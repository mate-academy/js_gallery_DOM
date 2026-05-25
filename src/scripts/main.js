'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (newevent) => {
  newevent.preventDefault();

  // Знаходимо найближчий елемент <a> від того, на що клікнули
  // .closest() шукає вгору по DOM — працює і якщо клікнули на <img>, і на <a>
  const link = event.target.closest('a');

  // Якщо клік був поза посиланням — ігноруємо
  if (!link) {
    return;
  }

  // Беремо URL великого зображення з атрибута href посилання
  largeImg.src = link.href;

  // Оновлюємо alt великого зображення з атрибута title посилання
  largeImg.alt = link.title;
});
