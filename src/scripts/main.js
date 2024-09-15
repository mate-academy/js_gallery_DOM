'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');
  const bigImage = document.getElementById('largeImg');

  if (!target || !gallery.contains(target)) {
    return;
  }

  bigImage.src = target.href;
});
