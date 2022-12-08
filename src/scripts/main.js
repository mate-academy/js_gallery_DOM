'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', e => {
  e.preventDefault();

  const img = document.querySelector('#largeImg');
  const item = e.target.closest('.gallery__thumb');

  if (item) {
    const path = item.parentElement.href;

    img.setAttribute('src', path);
  }
});
