'use strict';

const gallery = document.querySelector('.gallery__list');
const bigPicture = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');

  if (!target) {
    return;
  }

  bigPicture.src = target.href;
});
