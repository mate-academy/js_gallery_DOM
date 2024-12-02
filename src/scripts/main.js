'use strict';

const ul = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

ul.addEventListener('click', (e) => {
  const clickEvent = e;

  clickEvent.preventDefault();

  if (!clickEvent) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  const link = e.target.closest('.list-item__link');

  largeImg.src = link.href;
});
