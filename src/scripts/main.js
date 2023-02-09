'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', e => {
  e.preventDefault();

  const img = document.querySelector('.gallery__large-img');

  const item = e.target.closest('.gallery__img');

  if (item && item.id !== 'largeImg') {
    const link = item.parentElement.href;

    img.setAttribute('src', link);
  }
});
