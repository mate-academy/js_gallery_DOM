'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const imgSrcNew = link.getAttribute('href');

  e.preventDefault();

  largeImg.setAttribute('src', imgSrcNew);
});
