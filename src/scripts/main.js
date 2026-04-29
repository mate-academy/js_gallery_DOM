'use strict';

const gallery = document.querySelector('.gallery'); // контейнер
const mainImage = document.getElementById('largeImg'); // велике фото

gallery.addEventListener('click', (ev) => {
  let link = ev.target;

  if (link.tagName === 'IMG') {
    link = link.closest('a');
  }

  if (!link) {
    return;
  }

  ev.preventDefault(); // не відкриваємо нову сторінку

  mainImage.src = link.href;
});
