'use strict';

const gallery = document.querySelector('.gallery');
const img = gallery.querySelector('img');
const list = gallery.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('li');

  if (!target) {
    return null;
  } else {
    const a = target.querySelector('a');

    img.src = a.href;
  }
});
