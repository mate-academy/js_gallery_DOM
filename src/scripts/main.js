'use strict';

const images = document.querySelector('.gallery__list');

const bigImage = document.querySelector('.gallery__large-img');

images.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (ev.target.classList.contains('list-item')) {
    return;
  }

  bigImage.src = ev.target.closest('.list-item__link').href;
});
