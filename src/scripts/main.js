'use strict';

const container = document.querySelector('.gallery__list');

container.addEventListener('click', (ev) => {
  const largeImg = document.querySelector('.gallery__large-img');

  ev.preventDefault();
  largeImg.src = event.target.closest('.list-item__link').href;
});
