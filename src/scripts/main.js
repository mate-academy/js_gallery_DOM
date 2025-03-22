'use strict';

const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (e) => {
  e.preventDefault();

  const link =
    e.target.closest('.gallery__img') || e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const largeImg = document.querySelector('.gallery__large-img');

  if (link.nodeName === 'A') {
    largeImg.src = link.href;
  } else {
    largeImg.src = link.parentElement.href;
  }
});
