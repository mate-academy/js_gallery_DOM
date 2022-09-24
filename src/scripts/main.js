'use strict';

const images = document.querySelector('.gallery__list');

const bigImage = document.querySelector('.gallery__large-img');

images.addEventListener('click', () => {
  event.preventDefault();

  if (event.target.classList.contains('list-item')) {
    return;
  }

  bigImage.src = event.target.closest('.list-item__link').href;
});
